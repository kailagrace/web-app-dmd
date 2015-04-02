<div class="container inner">
	<div class="portfolio classic-masonry">
	
		<?php get_template_part('inc/content-portfolio','filters'); ?>
		
		<div class="divide15"></div>
		
		<div class="isotope items">
			<?php 
				if ( have_posts() ) : while ( have_posts() ) : the_post();
					
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
			?>
		</div>
		
	</div>
</div>