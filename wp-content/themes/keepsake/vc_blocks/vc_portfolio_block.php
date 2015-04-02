<?php 

/**
 * The Shortcode
 */
function ebor_portfolio_shortcode( $atts ) {
	extract( 
		shortcode_atts( 
			array(
				'type' => 'lightbox',
				'pppage' => '999',
				'filter' => 'all',
				'filters' => 'yes',
				'title' => ''
			), $atts 
		)
	);
	
	/**
	 * Initial query args
	 */
	$query_args = array(
		'post_type' => 'portfolio',
		'posts_per_page' => $pppage
	);
	
	if (!( $filter == 'all' )) {
		if( function_exists( 'icl_object_id' ) ){
			$filter = (int)icl_object_id( $filter, 'portfolio_category', true);
		}
		$query_args['tax_query'] = array(
			array(
				'taxonomy' => 'portfolio_category',
				'field' => 'id',
				'terms' => $filter
			)
		);
	}

	$block_query = new WP_Query( $query_args );
	
	ob_start();
?>

	<?php if( 'lightbox' == $type ) : ?>
		
		<div class="portfolio classic-masonry">
		
			<?php 
				if($title)
					echo '<h3 class="section-title pull-left">' . htmlspecialchars_decode($title) . '</h3>';
					
				if( 'yes' == $filters ){
					$cats = get_categories('taxonomy=portfolio_category');
					echo ebor_portfolio_filters($cats); 
				}
			?>
			<div class="clearfix"></div>
			
			<div class="divide15"></div>
			
			<div class="isotope items">
				<?php 
					if ( $block_query->have_posts() ) : while ( $block_query->have_posts() ) : $block_query->the_post();
						
						/**
						 * Get blog posts by blog layout.
						 */
						get_template_part('loop/content-portfolio', 'lightbox');
					
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
			
		</div>
		
	<?php elseif( 'ajax' == $type ) : ?>
	
		<div class="portfolio classic-masonry ebor-ajax-wrapper">
		
			<?php 
				if($title)
					echo '<h3 class="section-title pull-left">' . htmlspecialchars_decode($title) . '</h3>';
					
				if( 'yes' == $filters ){
					$cats = get_categories('taxonomy=portfolio_category');
					echo ebor_portfolio_filters($cats); 
				}
			?>
			<div class="clearfix"></div>
			
			<div class="divide15"></div>
			
			<div class="isotope items">
				<?php 
					if ( $block_query->have_posts() ) : while ( $block_query->have_posts() ) : $block_query->the_post();
						
						/**
						 * Get blog posts by blog layout.
						 */
						get_template_part('loop/content-portfolio', 'ajax');
					
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
			
		</div>
	
	<?php elseif( 'permalink' == $type ) : ?>
	
		<div class="portfolio classic-masonry">
		
			<?php 
				if($title)
					echo '<h3 class="section-title pull-left">' . htmlspecialchars_decode($title) . '</h3>';
					
				if( 'yes' == $filters ){
					$cats = get_categories('taxonomy=portfolio_category');
					echo ebor_portfolio_filters($cats); 
				}
			?>
			<div class="clearfix"></div>
			
			<div class="divide15"></div>
			
			<div class="isotope items">
				<?php 
					if ( $block_query->have_posts() ) : while ( $block_query->have_posts() ) : $block_query->the_post();
						
						/**
						 * Get blog posts by blog layout.
						 */
						get_template_part('loop/content-portfolio', 'permalink');
					
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
			
		</div>
		
	<?php elseif( 'col3-lightbox' == $type ) : ?>
		
		<div class="portfolio classic-masonry col3">
		
			<?php 
				if($title)
					echo '<h3 class="section-title pull-left">' . htmlspecialchars_decode($title) . '</h3>';
					
				if( 'yes' == $filters ){
					$cats = get_categories('taxonomy=portfolio_category');
					echo ebor_portfolio_filters($cats); 
				}
			?>
			<div class="clearfix"></div>
			
			<div class="divide15"></div>
			
			<div class="isotope items">
				<?php 
					if ( $block_query->have_posts() ) : while ( $block_query->have_posts() ) : $block_query->the_post();
						
						/**
						 * Get blog posts by blog layout.
						 */
						get_template_part('loop/content-portfolio', 'lightbox');
					
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
			
		</div>
		
	<?php elseif( 'col3-ajax' == $type ) : ?>
	
		<div class="portfolio classic-masonry col3 ebor-ajax-wrapper">
		
			<?php 
				if($title)
					echo '<h3 class="section-title pull-left">' . htmlspecialchars_decode($title) . '</h3>';
					
				if( 'yes' == $filters ){
					$cats = get_categories('taxonomy=portfolio_category');
					echo ebor_portfolio_filters($cats); 
				}
			?>
			<div class="clearfix"></div>
			
			<div class="divide15"></div>
			
			<div class="isotope items">
				<?php 
					if ( $block_query->have_posts() ) : while ( $block_query->have_posts() ) : $block_query->the_post();
						
						/**
						 * Get blog posts by blog layout.
						 */
						get_template_part('loop/content-portfolio', 'ajax');
					
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
			
		</div>
	
	<?php elseif( 'col3-permalink' == $type ) : ?>
	
		<div class="portfolio col3 classic-masonry">
		
			<?php 
				if($title)
					echo '<h3 class="section-title pull-left">' . htmlspecialchars_decode($title) . '</h3>';
					
				if( 'yes' == $filters ){
					$cats = get_categories('taxonomy=portfolio_category');
					echo ebor_portfolio_filters($cats); 
				}
			?>
			<div class="clearfix"></div>
			
			<div class="divide15"></div>
			
			<div class="isotope items">
				<?php 
					if ( $block_query->have_posts() ) : while ( $block_query->have_posts() ) : $block_query->the_post();
						
						/**
						 * Get blog posts by blog layout.
						 */
						get_template_part('loop/content-portfolio', 'permalink');
					
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
			
		</div>
	
	<?php elseif( 'showcase-lightbox' == $type ) : ?>
		
		<div class="portfolio full-portfolio showcase-wrapper">
		
			<div class="container inner bp0">
				<?php 
					if($title)
						echo '<h3 class="section-title pull-left">' . htmlspecialchars_decode($title) . '</h3>';
						
					if( 'yes' == $filters ){
						$cats = get_categories('taxonomy=portfolio_category');
						echo ebor_portfolio_filters($cats); 
					}
				?>
				<div class="clearfix"></div>
			</div>
			
			<div class="divide15"></div>
			
			<div class="isotope items">
				<div class="grid-sizer"></div>
				<?php 
					if ( $block_query->have_posts() ) : while ( $block_query->have_posts() ) : $block_query->the_post();
						
						/**
						 * Get blog posts by blog layout.
						 */
						get_template_part('loop/content-portfolio', 'lightbox');
					
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
			
		</div>
		
	<?php elseif( 'showcase-ajax' == $type ) : ?>
	
		<div class="portfolio full-portfolio showcase-wrapper ebor-ajax-wrapper">
		
			<div class="container inner bp0">
				<?php 
					if($title)
						echo '<h3 class="section-title pull-left">' . htmlspecialchars_decode($title) . '</h3>';
						
					if( 'yes' == $filters ){
						$cats = get_categories('taxonomy=portfolio_category');
						echo ebor_portfolio_filters($cats); 
					}
				?>
				<div class="clearfix"></div>
			</div>
			
			<div class="divide15"></div>
			
			<div class="isotope items">
				<div class="grid-sizer"></div>
				<?php 
					if ( $block_query->have_posts() ) : while ( $block_query->have_posts() ) : $block_query->the_post();
						
						/**
						 * Get blog posts by blog layout.
						 */
						get_template_part('loop/content-portfolio', 'ajax');
					
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
			
		</div>
	
	<?php elseif( 'showcase-permalink' == $type ) : ?>
	
		<div class="portfolio full-portfolio showcase-wrapper">
		
			<div class="container inner bp0">
				<?php 
					if($title)
						echo '<h3 class="section-title pull-left">' . htmlspecialchars_decode($title) . '</h3>';
						
					if( 'yes' == $filters ){
						$cats = get_categories('taxonomy=portfolio_category');
						echo ebor_portfolio_filters($cats); 
					}
				?>
				<div class="clearfix"></div>
			</div>
			
			<div class="divide15"></div>
			
			<div class="isotope items">
				<div class="grid-sizer"></div>
				<?php 
					if ( $block_query->have_posts() ) : while ( $block_query->have_posts() ) : $block_query->the_post();
						
						/**
						 * Get blog posts by blog layout.
						 */
						get_template_part('loop/content-portfolio', 'permalink');
					
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
			
		</div>
	
	<?php endif; ?>
			
<?php	
	$output = ob_get_contents();
	ob_end_clean();
	
	return $output;
}
add_shortcode( 'keepsake_portfolio', 'ebor_portfolio_shortcode' );

/**
 * The VC Functions
 */
function ebor_portfolio_shortcode_vc() {
	
	$types = array_flip(ebor_get_portfolio_layouts());
	
	vc_map( 
		array(
			"icon" => 'keepsake-vc-block',
			"name" => __("Portfolio Feeds", 'keepsake'),
			"base" => "keepsake_portfolio",
			"category" => __('Keepsake WP Theme', 'keepsake'),
			'description' => 'Show portfolio posts in the page.',
			"params" => array(
				array(
					"type" => "textfield",
					"heading" => __("Title", 'keepsake'),
					"param_name" => "title",
					'holder' => 'div'
				),
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
					"value" => $types
				),
				array(
					"type" => "dropdown",
					"heading" => __("Show Filters?", 'keepsake'),
					"param_name" => "filters",
					"value" => array(
						'Yes' => 'yes',
						'No' => 'no'
					),
				),
			)
		) 
	);
	
}
add_action( 'vc_before_init', 'ebor_portfolio_shortcode_vc');