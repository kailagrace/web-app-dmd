<?php 

/**
 * The Shortcode
 */
function ebor_blog_shortcode( $atts ) {
	extract( 
		shortcode_atts( 
			array(
				'type' => 'small',
				'pppage' => '6',
				'pagination' => 'yes'
			), $atts 
		) 
	);
	
	// Fix for pagination
	if( is_front_page() ) { 
		$paged = ( get_query_var( 'page' ) ) ? get_query_var( 'page' ) : 1; 
	} else { 
		$paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1; 
	}
	
	/**
	 * Setup post query
	 */
	$query_args = array(
		'post_type' => 'post',
		'posts_per_page' => $pppage,
		'paged' => $paged
	);

	$block_query = new WP_Query( $query_args );
	
	ob_start();
?>

	<?php if( $type == 'preview' ) : ?>
	
		<div class="row">
		
			<div class="col-sm-8 content">
				
				<div class="blog-posts col-blog">
					<?php 
						if ( $block_query->have_posts() ) : while ( $block_query->have_posts() ) : $block_query->the_post();
							
							/**
							 * Get blog posts by blog layout.
							 */
							get_template_part('loop/content-post', 'medium');
						
						endwhile;	
						else : 
							
							/**
							 * Display no posts message if none are found.
							 */
							get_template_part('loop/content','none');
							
						endif;
					?>
				</div>
				
				<?php
					/**
					* Post pagination, use ebor_pagination() first and fall back to default
					*/
					if( 'yes' == $pagination )
						echo function_exists('ebor_pagination') ? ebor_pagination($block_query->max_num_pages) : posts_nav_link();
						
					wp_reset_query();
				?>
				
			</div>
			
			<?php get_sidebar(); ?>
		
		</div>
		
	<?php elseif( $type == 'classic' ) : ?>
	
		<div class="row">
		
			<div class="col-sm-8 content">
				
				<div class="blog-posts classic-blog classic-blog-index">
					<?php 
						if ( $block_query->have_posts() ) : while ( $block_query->have_posts() ) : $block_query->the_post();
							
							/**
							 * Get blog posts by blog layout.
							 */
							get_template_part('loop/content-post', 'classic');
						
						endwhile;	
						else : 
							
							/**
							 * Display no posts message if none are found.
							 */
							get_template_part('loop/content','none');
							
						endif;
					?>
				</div>
				
				<?php
					/**
					* Post pagination, use ebor_pagination() first and fall back to default
					*/
					if( 'yes' == $pagination )
						echo function_exists('ebor_pagination') ? ebor_pagination($block_query->max_num_pages) : posts_nav_link();
						
					wp_reset_query();
				?>
				
			</div>
			
			<?php get_sidebar(); ?>
		
		</div>
	
	<?php elseif( $type == 'preview-no-sidebar' ) : ?>
	
		<div class="row">
			<div class="col-sm-12 content">
				
				<div class="latest-blog-wrapper">
					<div class="latest-blog isotope isotope js-isotope row" data-isotope-options='{ "layoutMode": "fitRows", "itemSelector": ".post" }'>
						<?php 
							if ( $block_query->have_posts() ) : while ( $block_query->have_posts() ) : $block_query->the_post();
								
								/**
								 * Get blog posts by blog layout.
								 */
								get_template_part('loop/content-post', 'small');
							
							endwhile;	
							else : 
								
								/**
								 * Display no posts message if none are found.
								 */
								get_template_part('loop/content','none');
								
							endif;
						?>
					</div>
				</div>
				
				<?php
					/**
					* Post pagination, use ebor_pagination() first and fall back to default
					*/
					if( 'yes' == $pagination )
						echo function_exists('ebor_pagination') ? ebor_pagination($block_query->max_num_pages) : posts_nav_link();
						
					wp_reset_query();
				?>
				
			</div>
		</div>
	
	<?php elseif( $type == 'classic-no-sidebar' ) : ?>
	
		<div class="row">
			<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-12 content">
				
				<div class="blog-posts classic-blog classic-blog-index">
					<?php 
						if ( $block_query->have_posts() ) : while ( $block_query->have_posts() ) : $block_query->the_post();
							
							/**
							 * Get blog posts by blog layout.
							 */
							get_template_part('loop/content-post', 'classic');
						
						endwhile;	
						else : 
							
							/**
							 * Display no posts message if none are found.
							 */
							get_template_part('loop/content','none');
							
						endif;
					?>
				</div>
				
				<?php
					/**
					* Post pagination, use ebor_pagination() first and fall back to default
					*/
					if( 'yes' == $pagination )
						echo function_exists('ebor_pagination') ? ebor_pagination($block_query->max_num_pages) : posts_nav_link();
						
					wp_reset_query();
				?>
				
			</div>
		</div>
	
	<?php elseif( $type == 'grid' ) : ?>
	
		<div class="row">
		
			<div class="col-sm-8 content">
				
				<div class="latest-blog-wrapper">
					<div class="latest-blog isotope isotope js-isotope row" data-isotope-options='{ "layoutMode": "fitRows", "itemSelector": ".post" }'>
						<?php 
							if ( $block_query->have_posts() ) : while ( $block_query->have_posts() ) : $block_query->the_post();
								
								/**
								 * Get blog posts by blog layout.
								 */
								get_template_part('loop/content-post', 'grid');
							
							endwhile;	
							else : 
								
								/**
								 * Display no posts message if none are found.
								 */
								get_template_part('loop/content','none');
								
							endif;
						?>
					</div>
				</div>
				
				<?php
					/**
					* Post pagination, use ebor_pagination() first and fall back to default
					*/
					if( 'yes' == $pagination )
						echo function_exists('ebor_pagination') ? ebor_pagination($block_query->max_num_pages) : posts_nav_link();
						
					wp_reset_query();
				?>
				
			</div>
			
			<?php get_sidebar(); ?>
		
		</div>
	
	<?php elseif( $type == 'grid-no-sidebar' ) : ?>
	
		<div class="row">
			<div class="col-sm-12 content">
				
				<div class="latest-blog-wrapper">
					<div class="latest-blog isotope isotope js-isotope row" data-isotope-options='{ "layoutMode": "fitRows", "itemSelector": ".post" }'>
						<?php 
							if ( $block_query->have_posts() ) : while ( $block_query->have_posts() ) : $block_query->the_post();
								
								/**
								 * Get blog posts by blog layout.
								 */
								get_template_part('loop/content-post', 'grid-no-sidebar');
							
							endwhile;	
							else : 
								
								/**
								 * Display no posts message if none are found.
								 */
								get_template_part('loop/content','none');
								
							endif;
						?>
					</div>
				</div>
				
				<?php
					/**
					* Post pagination, use ebor_pagination() first and fall back to default
					*/
					if( 'yes' == $pagination )
						echo function_exists('ebor_pagination') ? ebor_pagination($block_query->max_num_pages) : posts_nav_link();
						
					wp_reset_query();
				?>
				
			</div>
		</div>
		
	<?php endif; ?>
			
<?php	
	$output = ob_get_contents();
	ob_end_clean();
	
	return $output;
}
add_shortcode( 'keepsake_blog', 'ebor_blog_shortcode' );

/**
 * The VC Functions
 */
function ebor_blog_shortcode_vc() {
	
	$blog_types = array_flip(ebor_get_blog_layouts());
	
	vc_map( 
		array(
			"icon" => 'keepsake-vc-block',
			"name" => __("Blog Feeds", 'keepsake'),
			"base" => "keepsake_blog",
			"category" => __('Keepsake WP Theme', 'keepsake'),
			'description' => 'Show blog posts with layout options.',
			"params" => array(
				array(
					"type" => "textfield",
					"heading" => __("Show How Many Posts?", 'keepsake'),
					"param_name" => "pppage",
					"value" => '8'
				),
				array(
					"type" => "dropdown",
					"heading" => __("Display type", 'keepsake'),
					"param_name" => "type",
					"value" => $blog_types
				),
				array(
					"type" => "dropdown",
					"heading" => __("Show Pagination?", 'keepsake'),
					"param_name" => "pagination",
					"value" => array(
						'Yes' => 'yes',
						'No' => 'no'
					),
				),
			)
		) 
	);
	
}
add_action( 'vc_before_init', 'ebor_blog_shortcode_vc');