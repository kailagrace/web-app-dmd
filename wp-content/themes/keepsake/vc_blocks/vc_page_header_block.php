<?php 

/**
 * The Shortcode
 */
function ebor_page_header_shortcode( $atts, $content = null ) {
	extract( 
		shortcode_atts( 
			array(
				'title' => '',
				'subtitle' => ''
			), $atts 
		) 
	);
	return ebor_page_title($title, $subtitle, false);
}
add_shortcode( 'keepsake_page_header', 'ebor_page_header_shortcode' );

/**
 * The VC Functions
 */
function ebor_page_header_shortcode_vc() {
	vc_map( 
		array(
			"icon" => 'keepsake-vc-block',
			"name" => __("Page Header", 'keepsake'),
			"base" => "keepsake_page_header",
			"category" => __('Keepsake WP Theme', 'keepsake'),
			'description' => 'A Chunky Title.',
			"params" => array(
				array(
					"type" => "textfield",
					"heading" => __("Title", 'keepsake'),
					"param_name" => "title",
					'holder' => 'div'
				),
				array(
					"type" => "textfield",
					"heading" => __("Subtitle", 'keepsake'),
					"param_name" => "subtitle",
					'holder' => 'div'
				)
			)
		) 
	);
}
add_action( 'vc_before_init', 'ebor_page_header_shortcode_vc' );