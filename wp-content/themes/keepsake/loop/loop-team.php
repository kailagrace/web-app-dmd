<div class="container inner">
	<div class="row team text-center">
		<?php 
			global $wp_query;
			if ( have_posts() ) : while ( have_posts() ) : the_post();
				
				get_template_part('loop/content','team');
				
				if( ($wp_query->current_post + 1) % 3 == 0)
					echo '<div class="divide20 clear"></div>';
				
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