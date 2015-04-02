<div class="container inner">
	<div class="row">
		<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-12 content">
			
			<div class="blog-posts classic-blog classic-blog-index">
				<?php 
					if ( have_posts() ) : while ( have_posts() ) : the_post();
						
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
				echo function_exists('ebor_pagination') ? ebor_pagination() : posts_nav_link();
			?>
			
		</div>
	</div>
</div>
