<?php
	get_header();
	the_post();
	
	echo ebor_page_title( get_option('team_title','Our Team') );
	$job = esc_html(get_post_meta( $post->ID, '_ebor_the_job_title', true ));
?>
  
<div id="team-<?php the_ID(); ?>" class="container inner">
	<div class="row">
		
		<div class="col-sm-4">
			<?php the_post_thumbnail('full'); ?>
		</div>
		
		<div class="col-sm-8 content">
		
			<div class="blog-posts classic-blog single">
				<div <?php post_class(); ?>>
					
					<?php 
						the_title('<h1 class="post-title">', '</h1>');
						
						if( $job )
							echo '<div class="meta">'. $job .'</div>'; 
					?>
					
					<div class="post-content">
						<?php
							the_content();
							wp_link_pages();
							get_template_part('inc/content','social');
						?>
					</div>
					
				</div>
			</div>
		
		</div>
	
	</div>
</div>

<?php get_footer();