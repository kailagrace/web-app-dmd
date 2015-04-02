<?php
	$thumbnail = has_post_thumbnail();
?>

<div id="post-<?php the_ID(); ?>" <?php post_class('post col-sm-12 col-md-6'); ?>>
	
	<?php if( $thumbnail ) : ?>
		<figure>
			<a href="<?php the_permalink(); ?>">
				<div class="text-overlay">
					<div class="info"><span><?php _e('Read More','keepsake'); ?></span></div>
				</div>
				<?php the_post_thumbnail('grid'); ?>
			</a>
		</figure>
	<?php endif; ?>
	
	<div class="post-content tp20 bp20">
		<?php
			the_title('<h3 class="post-title"><a href="'. get_permalink() .'">', '</a></h3>');
			get_template_part('inc/content','meta-small');
			the_excerpt();
		?>
	</div>
	
</div>