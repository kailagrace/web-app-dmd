<div class="portfolio full-portfolio showcase-wrapper ebor-ajax-wrapper">

	<div class="container inner bp0">
		<?php get_template_part('inc/content-portfolio','filters'); ?>
	</div>
	
	<div class="divide15"></div>
	
	<div class="isotope items">
		<div class="grid-sizer"></div>
		<?php 
			if ( have_posts() ) : while ( have_posts() ) : the_post();
				
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
		?>
	</div>
	
</div>