<?php

global $slider_pro_thumbs;

/**
 * The Shortcode
 */
function ebor_slider_pro_shortcode( $atts, $content = null ) {
	global $slider_pro_thumbs;
	$slider_pro_thumbs = false;
	extract( 
		shortcode_atts( 
			array(
				'thumbs' => 'yes'
			), $atts 
		) 
	);
	
	$output = '<div class="slider-pro main-slider"><div class="sp-slides">'. do_shortcode($content) .'</div>';
	
	if( 'yes' == $thumbs  )
		$output .= '<div class="sp-thumbnails">'. $slider_pro_thumbs .'</div>';
		
	$output .= '</div>';
	
	return $output;
}
add_shortcode( 'keepsake_slider_pro', 'ebor_slider_pro_shortcode' );

/**
 * The Shortcode
 */
function ebor_slider_pro_content_shortcode( $atts, $content = null ) {
	global $slider_pro_thumbs;
	extract( 
		shortcode_atts( 
			array(
				'title' => '',
				'subtitle' => '',
				'alt' => '',
				'image' => '',
				'location' => '',
			), $atts 
		) 
	);
	
	$caption_args = array(
		'position' => 'leftBottom',
		'title_hor' => '40',
		'title_ver' => '92',
		'title_trans' => 'right',
		'title_delay' => '500',
		'title_hide' => 'left',
		'sub_hor' => '40',
		'sub_ver' => '40',
		'sub_trans' => 'left',
		'sub_delay' => '700',
		'sub_hide' => 'right'
	);
	
	if( 'bottomRight' == $location ){
		$caption_args = array(
			'position' => 'bottomRight',
			'title_hor' => '40',
			'title_ver' => '92',
			'title_trans' => 'down',
			'title_delay' => '500',
			'title_hide' => 'up',
			'sub_hor' => '40',
			'sub_ver' => '40',
			'sub_trans' => 'up',
			'sub_delay' => '700',
			'sub_hide' => 'down'
		);
	} elseif( 'topLeft' == $location ){
		$caption_args = array(
			'position' => 'topLeft',
			'title_hor' => '40',
			'title_ver' => '40',
			'title_trans' => 'down',
			'title_delay' => '500',
			'title_hide' => 'up',
			'sub_hor' => '40',
			'sub_ver' => '92',
			'sub_trans' => 'up',
			'sub_delay' => '700',
			'sub_hide' => 'down'
		);
	} elseif( 'topRight' == $location ){
		$caption_args = array(
			'position' => 'topRight',
			'title_hor' => '40',
			'title_ver' => '40',
			'title_trans' => 'down',
			'title_delay' => '500',
			'title_hide' => 'up',
			'sub_hor' => '40',
			'sub_ver' => '92',
			'sub_trans' => 'up',
			'sub_delay' => '700',
			'sub_hide' => 'down'
		);
	} elseif( 'bottomCenter' == $location ){
		$caption_args = array(
			'position' => 'bottomCenter',
			'title_hor' => '0',
			'title_ver' => '92',
			'title_trans' => 'left',
			'title_delay' => '500',
			'title_hide' => 'right',
			'sub_hor' => '0',
			'sub_ver' => '42',
			'sub_trans' => 'right',
			'sub_delay' => '700',
			'sub_hide' => 'left'
		);
	}
	
	$thumb = wp_get_attachment_image_src($image, 'slider');
	$slide = wp_get_attachment_image_src($image, 'full');
	
	if(!( isset($thumb[0]) ))
		$thumb[0] = false;
		
	if(!( isset($slide[0]) ))
		$slide[0] = false;
	
	$slider_pro_thumbs .= '<img class="sp-thumbnail" src="'. esc_url($thumb[0]) .'" alt="'. esc_attr($alt) .'" />';
	$output = '<div class="sp-slide"><img class="sp-image" src="'. EBOR_THEME_DIRECTORY .'style/images/blank.gif"  data-src="'. esc_url($slide[0]) .'" alt="'. esc_attr($alt) .'" />';
	
	if( $title )
		$output .= '<h4 
						class="sp-layer sp-white sp-padding" 
						data-position="'. esc_attr($caption_args['position']) .'" 
						data-horizontal="'. esc_attr($caption_args['title_hor']) .'" 
						data-vertical="'. esc_attr($caption_args['title_ver']) .'" 
						data-show-transition="'. esc_attr($caption_args['title_trans']) .'" 
						data-show-delay="'. esc_attr($caption_args['title_delay']) .'" 
						data-hide-transition="'. esc_attr($caption_args['title_hide']) .'"
					>'. $title .'</h4>';
	
	if( $subtitle )
		$output .= '<p 
						class="sp-layer sp-white sp-padding" 
						data-position="'. esc_attr($caption_args['position']) .'"  
						data-horizontal="'. esc_attr($caption_args['sub_hor']) .'" 
						data-vertical="'. esc_attr($caption_args['sub_ver']) .'" 
						data-show-transition="'. esc_attr($caption_args['sub_trans']) .'" 
						data-show-delay="'. esc_attr($caption_args['sub_delay']) .'"
						data-hide-transition="'. esc_attr($caption_args['sub_hide']) .'"
					>'. $subtitle .'</p>';
				
	$output .= '</div>';
	
	return $output;
}
add_shortcode( 'keepsake_slider_pro_content', 'ebor_slider_pro_content_shortcode' );

// Parent Element
function ebor_slider_pro_shortcode_vc() {
	vc_map( 
		array(
			"icon" => 'keepsake-vc-block',
		    'name'                    => __( 'Slider Pro' , 'keepsake' ),
		    'base'                    => 'keepsake_slider_pro',
		    'description'             => __( 'Adds an Image Slider', 'keepsake' ),
		    'as_parent'               => array('only' => 'keepsake_slider_pro_content'), // Use only|except attributes to limit child shortcodes (separate multiple values with comma)
		    'content_element'         => true,
		    'show_settings_on_create' => false,
		    "js_view" => 'VcColumnView',
		    "category" => __('Keepsake WP Theme', 'keepsake'),
		    'params'          => array(
		        array(
		        	'type' => 'dropdown',
		        	'heading' => "Show Image Thumbnails?",
		        	'param_name' => 'thumbs',
		        	'value' => array_flip(array(
		        		'yes' => 'Yes',
		        		'no' => 'No',
		        	)),
		        ),
		    ),
		) 
	);
}
add_action( 'vc_before_init', 'ebor_slider_pro_shortcode_vc' );

// Nested Element
function ebor_slider_pro_content_shortcode_vc() {
	vc_map( 
		array(
			"icon" => 'keepsake-vc-block',
		    'name'            => __('Slider Pro Slide', 'keepsake'),
		    'base'            => 'keepsake_slider_pro_content',
		    'description'     => __( 'A slide for the image slider.', 'keepsake' ),
		    "category" => __('Keepsake WP Theme', 'keepsake'),
		    'content_element' => true,
		    'as_child'        => array('only' => 'keepsake_slider_pro'), // Use only|except attributes to limit parent (separate multiple values with comma)
		    'params'          => array(
	            array(
	            	"type" => "attach_image",
	            	"heading" => __("Slide Image", 'keepsake'),
	            	"param_name" => "image",
	            	'holder' => 'div' 
	            ),
	            array(
	            	"type" => "textfield",
	            	"heading" => __("Title", 'keepsake'),
	            	"param_name" => "title"
	            ),
	            array(
	            	"type" => "textfield",
	            	"heading" => __("Subtitle", 'keepsake'),
	            	"param_name" => "subtitle",
	            ),
	            array(
	            	"type" => "textfield",
	            	"heading" => __("Image Alt Text", 'keepsake'),
	            	"param_name" => "alt"
	            ),
	            array(
	            	'type' => 'dropdown',
	            	'heading' => "Caption Location",
	            	'param_name' => 'location',
	            	'value' => array_flip(array(
	            		'topLeft' => 'Top Left',
	            		'topRight' => 'Top Right',
	            		'leftBottom' => 'Bottom Left',
	            		'bottomRight' => 'Bottom Right',
	            		'bottomCenter' => 'Bottom Center',
	            	)),
	            ),
		    ),
		) 
	);
}
add_action( 'vc_before_init', 'ebor_slider_pro_content_shortcode_vc' );

// A must for container functionality, replace Wbc_Item with your base name from mapping for parent container
if(class_exists('WPBakeryShortCodesContainer')){
    class WPBakeryShortCode_keepsake_slider_pro extends WPBakeryShortCodesContainer {

    }
}

// Replace Wbc_Inner_Item with your base name from mapping for nested element
if(class_exists('WPBakeryShortCode')){
    class WPBakeryShortCode_keepsake_slider_pro_content extends WPBakeryShortCode {

    }
}