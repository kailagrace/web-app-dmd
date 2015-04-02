<?php 
	global $post;
	$job = esc_html(get_post_meta( $post->ID, '_ebor_the_job_title', true )); 
?>

<div class="col-sm-4">
	
	<?php if( has_post_thumbnail() ) : ?>
		<figure>
			<?php the_post_thumbnail('grid'); ?>
		</figure>
	<?php endif; ?>
	
	<div class="post-content text-center">
		<?php 
			the_title('<h3><a href="'. get_permalink() .'">', '</a></h3>');
			
			if( $job )
				echo '<div class="meta">'. $job .'</div>';
				
			the_excerpt(); 
			
			get_template_part('inc/content','social');
		?>
	</div>
	
</div>