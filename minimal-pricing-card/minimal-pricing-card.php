<?php
/**
 * Plugin Name: Minimal Pricing Card
 * Description: Easily showcase your pricing plans with the Gutenberg Pricing Card Block.  it helps you present your products or services clearly and attractively on your WordPress site.
 * Version: 1.0.0
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: b-pricing-card
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'BMPC_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
define( 'BMPC_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'BMPC_DIR_PATH', plugin_dir_path( __FILE__ ) );

if( !class_exists( 'BMPCPlugin' ) ){
	class BMPCPlugin{
		function __construct(){
			add_action( 'init', [ $this, 'onInit' ] );
		}

		function onInit(){
			register_block_type( __DIR__ . '/build' );
		}
	}
	new BMPCPlugin();
}