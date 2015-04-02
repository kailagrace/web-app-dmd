<?php 

/**
 * The Shortcode
 */
function ebor_testimonial_block_shortcode( $atts, $content = null ) {
	extract( 
		shortcode_atts( 
			array(
				'title' => ''
			), $atts 
		) 
	);
	
	$output = '<div class="testimonials clearfix"><blockquote>'. wpautop(htmlspecialchars_decode($content)) .'<small>'. htmlspecialchars_decode($title) .'</small></blockquote></div>';
	return $output;
}
add_shortcode( 'keepsake_testimonial_block', 'ebor_testimonial_block_shortcode' );

/**
 * The VC Functions
 */
function ebor_testimonial_block_shortcode_vc() {
	vc_map( 
		array(
			"icon" => 'keepsake-vc-block',
			"name" => __("Testimonial", 'keepsake'),
			"base" => "keepsake_testimonial_block",
			"category" => __('Keepsake WP Theme', 'keepsake'),
			'description' => 'Add a styled testimonial to your content.',
			"params" => array(
				array(
					"type" => "textfield",
					"heading" => __("Testimonial Attributation", 'keepsake'),
					"param_name" => "title",
				),
				array(
					"type" => "textarea",
					"heading" => __("Block Content", 'keepsake'),
					"param_name" => "content",
					'holder' => 'div'
				),
			)
		) 
	);
}
add_action( 'vc_before_init', 'ebor_testimonial_block_shortcode_vc' );