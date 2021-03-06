<div class="container inner">
	<div class="row">
		<div class="col-sm-12 content">
			
			<div class="latest-blog-wrapper">
				<div class="latest-blog isotope isotope js-isotope row" data-isotope-options='{ "layoutMode": "fitRows", "itemSelector": ".post" }'>
					<?php 
						if ( have_posts() ) : while ( have_posts() ) : the_post();
							
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
				echo function_exists('ebor_pagination') ? ebor_pagination() : posts_nav_link();
			?>
			
		</div>
	</div>
</div>