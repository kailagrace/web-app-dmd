<?php

global $ebor_toggles_count;

/**
 * The Shortcode
 */
function ebor_toggles_shortcode( $atts, $content = null ) {
	global $ebor_toggles_count;
	$ebor_toggles_count = 0;
	
	extract( 
		shortcode_atts( 
			array(
				'title' => ''
			), $atts 
		) 
	);
	$output = false;
	
	if( $title )
		$output = '<h3 class="section-title">'. htmlspecialchars_decode($title) .'</h3>';
		
	$output .= '<div class="panel-group" id="accordion">'. do_shortcode($content) .'</div>';

	return $output;
}
add_shortcode( 'keepsake_toggles', 'ebor_toggles_shortcode' );

/**
 * The Shortcode
 */
function ebor_toggles_content_shortcode( $atts, $content = null ) {
	global $ebor_toggles_count;
	
	extract( 
		shortcode_atts( 
			array(
				'title' => ''
			), $atts 
		) 
	);
	
	$ebor_toggles_count++;
	$active = $in = false;
	
	if( 1 == $ebor_toggles_count ){
		$active = 'active';
		$in = 'in';	
	}
	
	$output = '<div class="panel panel-default">
					<div class="panel-heading">
						<h4 class="panel-title">
							<a data-toggle="collapse" class="panel-toggle '. esc_attr($active) .'" data-parent="#accordion" href="#collapse'. esc_attr($ebor_toggles_count) .'">'. htmlspecialchars_decode($title) .'</a>
						</h4>
					</div>
					<div id="collapse'. esc_attr($ebor_toggles_count) .'" class="panel-collapse collapse '. esc_attr($in) .'">
						<div class="panel-body">'. wpautop(do_shortcode(htmlspecialchars_decode($content))) .'</div>
					</div>
			   </div>';

	return $output;
}
add_shortcode( 'keepsake_toggles_content', 'ebor_toggles_content_shortcode' );

// Parent Element
function ebor_toggles_shortcode_vc() {
	vc_map( 
		array(
			"icon" => 'keepsake-vc-block',
		    'name'                    => __( 'Toggles' , 'keepsake' ),
		    'base'                    => 'keepsake_toggles',
		    'description'             => __( 'Create Accordion Content', 'keepsake' ),
		    'as_parent'               => array('only' => 'keepsake_toggles_content'), // Use only|except attributes to limit child shortcodes (separate multiple values with comma)
		    'content_element'         => true,
		    'show_settings_on_create' => false,
		    "js_view" => 'VcColumnView',
		    "category" => __('Keepsake WP Theme', 'keepsake'),
		    'params' => array(
		    	array(
		    		"type" => "textfield",
		    		"heading" => __("Title", 'keepsake'),
		    		"param_name" => "title",
		    	),
		    )
		) 
	);
}
add_action( 'vc_before_init', 'ebor_toggles_shortcode_vc' );

// Nested Element
function ebor_toggles_content_shortcode_vc() {
	vc_map( 
		array(
			"icon" => 'keepsake-vc-block',
		    'name'            => __('toggles Content', 'keepsake'),
		    'base'            => 'keepsake_toggles_content',
		    'description'     => __( 'Toggle Content Element', 'keepsake' ),
		    "category" => __('Keepsake WP Theme', 'keepsake'),
		    'content_element' => true,
		    'as_child'        => array('only' => 'keepsake_toggles'), // Use only|except attributes to limit parent (separate multiple values with comma)
		    'params'          => array(
		    	array(
		    		"type" => "textfield",
		    		"heading" => __("Title", 'keepsake'),
		    		"param_name" => "title",
		    		'holder' => 'div'
		    	),
	            array(
	            	"type" => "textarea_html",
	            	"heading" => __("Block Content", 'keepsake'),
	            	"param_name" => "content"
	            ),
		    ),
		) 
	);
}
add_action( 'vc_before_init', 'ebor_toggles_content_shortcode_vc' );

// A must for container functionality, replace Wbc_Item with your base name from mapping for parent container
if(class_exists('WPBakeryShortCodesContainer')){
    class WPBakeryShortCode_keepsake_toggles extends WPBakeryShortCodesContainer {

    }
}

// Replace Wbc_Inner_Item with your base name from mapping for nested element
if(class_exists('WPBakeryShortCode')){
    class WPBakeryShortCode_keepsake_toggles_content extends WPBakeryShortCode {

    }
}