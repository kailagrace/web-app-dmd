<?php 

/**
 * The Shortcode
 */
function ebor_icon_block_shortcode( $atts, $content = null ) {
	extract( 
		shortcode_atts( 
			array(
				'image' => '',
				'image_retina' => '',
				'alt' => ''
			), $atts 
		) 
	);
	
	$image = wp_get_attachment_image_src($image, 'full');
	$image_retina = wp_get_attachment_image_src($image_retina, 'full');
	
	
	if(!( isset($image[0]) ))
		$image[0] = false;
	
	if(!( isset($image_retina[0]) ))
		$image_retina[0] = false;
	
	$output = '<div class="services-1 col-wrapper">';
	
	if(!( false == $image[0] )){
		  $output .= '<div class="icon-wrapper">
		    <div class="icon">
		    	<img 
		    		src="'. esc_url($image[0]) .'" 
		    		data-src="'. esc_url($image[0]) .'" 
		    		data-ret="'. esc_url($image_retina[0]) .'" 
		    		class="retina" 
		    		alt="'. esc_attr($alt) .'" 
		    	/>
		    </div>
		  </div>';
	}
				  
	$output .= '<div class="text-wrapper">';
	$output .= wpautop(do_shortcode(htmlspecialchars_decode($content)));
	$output .= '</div></div>';
	return $output;
}
add_shortcode( 'keepsake_icon_block', 'ebor_icon_block_shortcode' );

/**
 * The VC Functions
 */
function ebor_icon_block_shortcode_vc() {
	vc_map( 
		array(
			"icon" => 'keepsake-vc-block',
			"name" => __("Icon & Text", 'keepsake'),
			"base" => "keepsake_icon_block",
			"category" => __('Keepsake WP Theme', 'keepsake'),
			'description' => 'Add an icon with explanatory text.',
			"params" => array(
				array(
					"type" => "textarea_html",
					"heading" => __("Block Content", 'keepsake'),
					"param_name" => "content",
					'holder' => 'div'
				),
				array(
					"type" => "attach_image",
					"heading" => __("Service Icon Image", 'keepsake'),
					"param_name" => "image"
				),
				array(
					"type" => "attach_image",
					"heading" => __("Service Icon Retina Image (Double Size)", 'keepsake'),
					"param_name" => "image_retina"
				),
				array(
					"type" => "textfield",
					"heading" => __("Image Alt Text", 'keepsake'),
					"param_name" => "alt"
				),
			)
		) 
	);
}
add_action( 'vc_before_init', 'ebor_icon_block_shortcode_vc' );