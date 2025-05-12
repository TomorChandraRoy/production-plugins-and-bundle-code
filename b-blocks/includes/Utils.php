<?php
namespace BBlocks\Inc;

class Utils{
	static function isPro(){
		return b_blocks_fs()->is__premium_only() && b_blocks_fs()->can_use_premium_code();
	}
	static function valForZero( $value = '', $default = 'auto' ){
		return !$value || 0 === intval( $value ) ? $default : $value;
	}
	static function allowedInnerHTML() {
		global $allowedposttags;
		return wp_parse_args( [
			'style' => [],
			'iframe' => [
				'allowfullscreen' => true,
				'allowpaymentrequest' => true,
				'height' => true,
				'loading' => true,
				'name' => true,
				'referrerpolicy' => true,
				'sandbox' => true,
				'src' => true,
				'srcdoc' => true,
				'width' => true,
				'aria-controls' => true,
				'aria-current' => true,
				'aria-describedby' => true,
				'aria-details' => true,
				'aria-expanded' => true,
				'aria-hidden' => true,
				'aria-label' => true,
				'aria-labelledby' => true,
				'aria-live' => true,
				'class' => true,
				'data-*' => true,
				'dir' => true,
				'hidden' => true,
				'id' => true,
				'lang' => true,
				'style' => true,
				'title' => true,
				'role' => true,
				'xml:lang' => true
			],
			'svg' => [
				'xmlns' => [],
				'viewbox' => [],
				'width' => [],
				'height' => [],
				'fill' => [],
				'class' => [],
				'style' => [],
			],
			'g' => [
				'fill' => [],
				'stroke' => [],
				'class' => [],
				'style' => [],
			],
			'path' => [
				'd' => [],
				'fill' => [],
				'stroke' => [],
				'class' => [],
				'style' => [],
				'stroke-width' => []
			],
			'circle' => [
				'cx' => [],
				'cy' => [],
				'r' => [],
				'fill' => [],
				'stroke' => [],
				'class' => [],
				'style' => [],
			],
			'rect' => [
				'x' => [],
				'y' => [],
				'width' => [],
				'height' => [],
				'fill' => [],
				'stroke' => [],
				'class' => [],
				'style' => [],
			],
			'ellipse' => [
				'cx' => [],
				'cy' => [],
				'rx' => [],
				'ry' => [],
				'fill' => [],
				'stroke' => [],
				'class' => [],
				'style' => [],
			],
			'line' => [
				'x1' => [],
				'y1' => [],
				'x2' => [],
				'y2' => [],
				'stroke' => [],
				'class' => [],
				'style' => [],
			],
			'polyline' => [
				'points' => [],
				'fill' => [],
				'stroke' => [],
				'class' => [],
				'style' => [],
			],
			'polygon' => [
				'points' => [],
				'fill' => [],
				'stroke' => [],
				'class' => [],
				'style' => [],
			]
		], $allowedposttags );
	}
}