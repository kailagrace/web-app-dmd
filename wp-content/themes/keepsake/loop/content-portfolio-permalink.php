<div id="portfolio-<?php the_ID(); ?>" class="item current-in-view <?php echo ebor_the_terms('portfolio_category', ' ', 'slug'); ?>">
	<figure>
		<a href="<?php the_permalink(); ?>">
			<?php 
				the_title('<div class="text-overlay"><div class="info"><span>', '</span></div></div>');
				the_post_thumbnail('grid'); 
			?>
		</a>
	</figure>
</div>