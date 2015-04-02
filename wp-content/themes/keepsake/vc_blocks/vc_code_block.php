<?php 

/**
 * The Shortcode
 */
function ebor_code_block_shortcode( $atts, $content = null ) {
	extract( 
		shortcode_atts( 
			array(
				'title' => ''
			), $atts 
		) 
	);
	$output = false;
	if($title)
		$output .= '<h3 class="section-title">'. htmlspecialchars_decode($title) .'</h3>';
	$output .= '<pre class="prettyprint linenums">'. htmlspecialchars($content) .'</pre>';
	return $output;
}
add_shortcode( 'keepsake_code_block', 'ebor_code_block_shortcode' );

/**
 * The VC Functions
 */
function ebor_code_block_shortcode_vc() {
	vc_map( 
		array(
			"icon" => 'keepsake-vc-block',
			"name" => __("Highlighted Code", 'keepsake'),
			"base" => "keepsake_code_block",
			"category" => __('Keepsake WP Theme', 'keepsake'),
			'description' => 'Add example code to a page.',
			"params" => array(
				array(
					"type" => "textfield",
					"heading" => __("Title", 'keepsake'),
					"param_name" => "title"
				),
				array(
					"type" => "textarea",
					"heading" => __("Code Snippet", 'keepsake'),
					"param_name" => "content"
				),
			)
		) 
	);
}
add_action( 'vc_before_init', 'ebor_code_block_shortcode_vc' );