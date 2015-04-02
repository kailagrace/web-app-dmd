<?php
	$thumbnail = has_post_thumbnail();
	$class = ($thumbnail) ? 'col-sm-8': 'col-sm-12';
?>

<div id="post-<?php the_ID(); ?>" <?php post_class('row'); ?>>
	
	<?php if( $thumbnail ) : ?>
		<div class="col-sm-4">
			<figure>
				<a href="<?php the_permalink(); ?>">
					<div class="text-overlay">
						<div class="info"><span><?php _e('Read More','keepsake'); ?></span></div>
					</div>
					<?php the_post_thumbnail('square'); ?>
				</a>
			</figure>
		</div>
	<?php endif; ?>

	<div class="<?php echo $class; ?> post-content">
		<?php
			get_template_part('inc/content','meta-small');
			the_title('<h2 class="post-title"><a href="'. get_permalink() .'">', '</a></h2>');
			the_excerpt();
		?>
	</div>
	
</div>