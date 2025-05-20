<?php
/**
 * Plugin Name: Minimal Pricing Table
 * Description: Easily showcase your pricing plans with the Gutenberg Pricing Table Block.  it helps you present your products or services clearly and attractively on your WordPress site.
 * Version: 1.0.0
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: b-pricing-table
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'BMPT_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
define( 'BMPT_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'BMPT_DIR_PATH', plugin_dir_path( __FILE__ ) );

if( !class_exists( 'BMPTPlugin' ) ){
	class BMPTPlugin{
		function __construct(){
			add_action( 'init', [ $this, 'onInit' ] );
		}

		function onInit(){
			register_block_type( __DIR__ . '/build' );
		}
	}
	new BMPTPlugin();
}