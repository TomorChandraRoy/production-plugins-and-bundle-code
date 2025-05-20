<?php

/*
* Plugin Name: Admin Settings
* Version: 1.0.0
* Author: bPlugins
* Description: Self hosted Plugin
* Text Domain: admin-settings
*/

if( !defined('ABSPATH') ){ exit;}

class BPAS_Admin_Settings{

    public function __construct(){
        add_action( 'admin_menu', array($this, 'register_my_custom_menu_page') );
        add_action( 'admin_enqueue_scripts', array($this, 'admin_enqueue_scripts_callback') );

        add_action( 'wp_ajax_form_submit_data', array($this, 'form_submit_data_callback') );
        add_action( 'wp_ajax_get_form_data', array($this, 'get_form_data_callback') );
    }
    
    public function register_my_custom_menu_page() {
    // add_menu_page( $page_title, $menu_title, $capability, $menu_slug, $function, $icon_url, $position );

        add_menu_page(
            'Admin Settings',
            'Admin Settings Page', 
            'manage_options', 
            'admin-settings',
            array($this, 'admin_settings_callback'), 
            'dashicons-welcome-widgets-menus',
            90 
        );
    }

    public function admin_settings_callback(){
        echo "<div id='bp-admin-settings'></div>";
    }

    public function admin_enqueue_scripts_callback( $screen ){

         if ($screen === "toplevel_page_admin-settings" ){
            $adminAssets = require plugin_dir_path( __FILE__ ) . 'assets/build/admin.asset.php';
             wp_enqueue_script('bpas_admin_settings', plugin_dir_url( __FILE__ ) . 'assets/build/admin.js', $adminAssets['dependencies'],  $adminAssets['version'], array('in_footer' => true)); 
         }

         wp_localize_script( 'bpas_admin_settings', 'bpasAdminSetting',
		    array( 
			    'ajax_url' => admin_url( 'admin-ajax.php' ),
			    'nonce' => wp_create_nonce('bpas_admin_settings_nonce')
		    )
	    );
    }
 


    public function form_submit_data_callback(){

        check_ajax_referer('bpas_admin_settings_nonce', 'submitnonce');

        $title = $_GET['title'];

        $formData = array(
            'title' => $title
        );

        update_option('bpas_admin_settings', $formData);
        wp_send_json_success(["data" => $formData]);
    }


    public function get_form_data_callback (){

        $formData = get_option('bpas_admin_settings');
        wp_send_json_success($formData);
    }
}

new BPAS_Admin_Settings();

add_action('wp_footer', function(){
 print_r(get_option('bpas_admin_settings'));
});




