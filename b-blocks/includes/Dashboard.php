<?php
namespace BBlocks\Inc;

if( !class_exists( 'BBlocksDashboard' ) ){
	class BBlocksDashboard{
		function __construct(){
			add_action('wp_ajax_bBlocksDisabledBlocks', [$this, 'bBlocksDisabledBlocks']);
			add_action('wp_ajax_activated_block', [$this, 'activated_block']);
			add_action('admin_notices', [$this, 'display_activation_notice']);
			add_action('wp_ajax_get_active_plugins', [$this, 'get_active_plugins']);
			add_action('wp_ajax_get_popular_plugins', [$this, 'get_popular_plugins']);
			add_action( 'admin_enqueue_scripts', [$this, 'adminEnqueueScripts'] );
			add_action( 'admin_menu', [$this, 'adminMenu'] );
		}
	
		public function get_popular_plugins () {
			if ( !function_exists( 'plugins_api' ) ) {
				require_once ABSPATH . 'wp-admin/includes/plugin-install.php';
			}
			 
			$cached_plugins = plugins_api( 'query_plugins', array(
				'author' => 'bplugins',
				'per_page' => 100
			) );
	
			wp_send_json_success($cached_plugins->plugins); 
		}
	
		public function get_active_plugins() {
			$nonce = sanitize_text_field( wp_unslash( $_POST['nonce'] ) ) ?? null;

			if( !wp_verify_nonce( $nonce, 'wp_ajax' )){
				wp_send_json_error( 'Invalid Request' );
			}

			// Get the list of all installed plugins
			if (!function_exists('get_plugins')) {
				include_once ABSPATH . '/wp-admin/includes/plugin.php';
			}

			$installed_plugins = get_plugins();
		
			// Return the plugin basenames as an array
			$installed_plugin_slugs = array_keys($installed_plugins);
		
			wp_send_json_success($installed_plugin_slugs);
		}
		
		public function activated_block() {
			$nonce = sanitize_text_field( wp_unslash( $_POST['nonce'] ) ) ?? null;

			if( !wp_verify_nonce( $nonce, 'wp_ajax' )){
				wp_send_json_error( 'Invalid Request' );
			}

			$plugin_name = sanitize_text_field( wp_unslash( $_GET['plugin_name'] ) ) ?? false;
		
			include_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
			include_once ABSPATH . 'wp-admin/includes/plugin-install.php';
		
			try {
				// Fetch plugin information
				$api = plugins_api('plugin_information', ['slug' => $plugin_name, 'fields' => ['sections' => false]]);
				if (is_wp_error($api)) {
					wp_send_json_error(['message' => 'Failed to fetch plugin information.']);
				}
		
				// Suppress unexpected output
				ob_start();
				$upgrader = new Plugin_Upgrader();
				$result = $upgrader->install($api->download_link);
				ob_end_clean();
			
				$plugin_slug = $plugin_name.'/'.$plugin_name.'.php';
	
				if ($result) {
					// Set transient to show notice
					set_transient('bblocks_show_activation_notice', $plugin_slug, 1000000); // Valid for 60 seconds
					$redirect_url = admin_url('plugins.php?plugin_status=all');
					wp_send_json_success(['message' => 'Plugin installed successfully.', 'redirectUrl' => $redirect_url]);
	
				} else {
					wp_send_json_error(['message' => 'Plugin installation failed.']);
				}
			} catch (Exception $e) {
				wp_send_json_error(['message' => 'An unexpected error occurred: ' . $e->getMessage()]);
			}
		}
	
		public function display_activation_notice() {
			// Check if transient is set
			$plugin_slug = get_transient('bblocks_show_activation_notice');
	
			$first_part = explode("/", $plugin_slug)[0];
			$cleaned_string = str_replace("-", " ", $first_part);
			 
	
			if ($plugin_slug) {
				// Remove transient after displaying the notice
				delete_transient('bblocks_show_activation_notice');
		
				// Generate activation URL
				$activation_url = wp_nonce_url(
					admin_url('plugins.php?action=activate&plugin=' . $plugin_slug),
					'activate-plugin_' . $plugin_slug
				);
		
				// Display notice with activation button
				?>
				<div class="notice notice-success is-dismissible bBlocksAdminNotice">
					<!-- translators: %s: Plugin name -->
                    <p><?php printf( esc_html__('%s plugin was successfully installed.', 'b-blocks'), esc_html( $cleaned_string ) ); ?></p>
	
					<p>
						<a href="<?php echo esc_url($activation_url); ?>" class="button button-primary">
							<?php esc_html_e('Activate Plugin', 'b-blocks'); ?>
						</a>
					</p>
				</div>
				<?php
			}
		}
	
		public function bBlocksDisabledBlocks(){
			$nonce = sanitize_text_field( wp_unslash( $_POST['_wpnonce'] ) ) ?? null;

			if( !wp_verify_nonce( $nonce, 'wp_ajax' )){
				wp_send_json_error( 'Invalid Request' );
			}

			$data = json_decode( stripslashes( $_POST['data'] ), true );
			$db_data = get_option( 'bBlocksDisabledBlocks', [] );

			if( !isset( $data ) && $db_data ){
				wp_send_json_success( $db_data );
			}
			update_option( 'bBlocksDisabledBlocks', $data );
			wp_send_json_success( $data );
		
			
			// AI generated
			// if ( isset( $_POST['data'] ) ) {
			// 	$data = json_decode( stripslashes( $_POST['data'] ), true );
			// 	update_option( 'bBlocksDisabledBlocks', $data );
			// 	wp_send_json_success( $data );
			// }
		
			// $db_data = get_option( 'bBlocksDisabledBlocks', [] );
			// wp_send_json_success( $db_data );
		}
	
		function adminEnqueueScripts( $hook ) {
			if( str_contains( $hook, 'b-blocks' ) ){
				wp_enqueue_style( 'b-blocks-dashboard-style', B_BLOCKS_BUILD . 'admin-dashboard.css', [], B_BLOCKS_VERSION );
	
				wp_enqueue_script( 'b-blocks-dashboard-script', B_BLOCKS_BUILD . 'admin-dashboard.js', [ 'react', 'react-dom', 'wp-api', 'wp-util' ], B_BLOCKS_VERSION, true );
	
				wp_localize_script( 'b-blocks-dashboard-script', 'pluginAction', [
					'ajaxUrl' => admin_url('admin-ajax.php'),
				]);
			}
		}
	
		function adminMenu() {
			$menuIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 500 500' fill='#fff'>
				<path d='M57.7 50.1c-.4 5.1-.7 25.7-.7 45.9v36.7l11.3.6c6.1.4 16 .7 22 .7H101v230H51v92.1l131.3-.4c141.5-.4 139.3-.3 164.1-5.8 44-9.7 76.7-33.5 88.7-64.4 5.8-14.8 7.2-24.5 6.6-46-.6-21-2.2-30-7.7-44.3-8.2-21.3-25.2-38.7-50.9-52l-11-5.8 6.7-2.9c14.7-6.4 32-20.7 41.1-33.8 12-17.5 17-40.5 14.2-65.9-2.6-23.4-9.8-41-22.6-54.6-20.2-21.4-45.9-31.7-92.8-36.9-11.9-1.3-34.1-1.6-137.3-2l-123.1-.4-.6 9.2zm229.5 87.1c6.6 3.1 13 9.3 16 15.7 1.9 4 2.2 6.3 2.3 17.1 0 11-.3 13.1-2.3 17.5-6.1 13.2-18 18.8-43.6 20.5-7.8.5-16.7 1-19.8 1H234v-75.1l23.8.3c23.3.3 23.8.3 29.4 3zm-10.9 141.4c18.1 4.1 28.4 13.6 31.8 29.6 1.7 7.7.6 24.1-2 30.9-6.3 16.4-22.6 23.6-55.3 24.6l-16.8.6V277h17.6c12.5 0 19.6.5 24.7 1.6z' />
			</svg>";
	
			add_menu_page(
				__( 'B Blocks', 'b-blocks' ),
				__( 'B Blocks', 'b-blocks' ),
				'manage_options',
				'b-blocks',
				'',
				'data:image/svg+xml;base64,' . base64_encode( $menuIcon ),
				20
			);
			add_submenu_page(
				'b-blocks',
				__( 'Dashboard', 'b-blocks' ),
				__( 'Dashboard', 'b-blocks' ),
				'manage_options',
				'b-blocks',
				[$this, 'dashboardPage']
			);
		}
	
		function dashboardPage(){ ?>
			<div id='bBlocksDashboard' data-info=<?php echo esc_attr( wp_json_encode([
				'version' => B_BLOCKS_VERSION
			]) ); ?>></div>
		<?php }
	}
	new BBlocksDashboard();
}