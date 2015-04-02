<?php 

/**
 * The Shortcode
 */
function ebor_team_shortcode( $atts ) {
	extract( 
		shortcode_atts( 
			array(
				'type' => 'large',
				'pppage' => '999',
				'filter' => 'all'
			), $atts 
		) 
	);
	
	/**
	 * Initial query args
	 */
	$query_args = array(
		'post_type' => 'team',
		'posts_per_page' => $pppage
	);
	
	if (!( $filter == 'all' )) {
		if( function_exists( 'icl_object_id' ) ){
			$filter = (int)icl_object_id( $filter, 'team_category', true);
		}
		$query_args['tax_query'] = array(
			array(
				'taxonomy' => 'team_category',
				'field' => 'id',
				'terms' => $filter
			)
		);
	}
	
	/**
	 * Finally, here's the query.
	 */
	$block_query = new WP_Query( $query_args );
	
	ob_start();
?>
	
	<div class="row team text-center">
		<?php 
			if ( $block_query->have_posts() ) : while ( $block_query->have_posts() ) : $block_query->the_post();
				
				/**
				 * Get blog posts by blog layout.
				 */
				get_template_part('loop/content', 'team');
				
				if( ($block_query->current_post + 1) % 3 == 0)
					echo '<div class="divide20 clear"></div>';
			
			endwhile;	
			else : 
				
				/**
				 * Display no posts message if none are found.
				 */
				get_template_part('loop/content','none');
				
			endif;
			wp_reset_query();
		?>
	</div>
	
<?php	
	$output = ob_get_contents();
	ob_end_clean();
	
	return $output;
}
add_shortcode( 'keepsake_team', 'ebor_team_shortcode' );

/**
 * The VC Functions
 */
function ebor_team_shortcode_vc() {
	
	vc_map( 
		array(
			"icon" => 'keepsake-vc-block',
			"name" => __("Team Feed", 'keepsake'),
			"base" => "keepsake_team",
			"category" => __('Keepsake WP Theme', 'keepsake'),
			'description' => 'Add your team posts to the page.',
			"params" => array(
				array(
					"type" => "textfield",
					"heading" => __("Show How Many Posts?", 'keepsake'),
					"param_name" => "pppage",
					"value" => '8'
				),
			)
		) 
	);
	
}
add_action( 'vc_before_init', 'ebor_team_shortcode_vc');