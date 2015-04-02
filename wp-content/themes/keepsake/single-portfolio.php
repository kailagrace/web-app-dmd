<?php
	get_header();
	the_post();
	
	/**
	 * Grab the layout meta
	 */
	$layout = esc_html(get_post_meta($post->ID, '_ebor_meta_layout', 1));
	if( '' == $layout || false == $layout || !(isset($layout)) )
		$layout = 'meta-right';
		
	/**
	 * Grab the gallery meta
	 */
	$gallery = esc_html(get_post_meta($post->ID, '_ebor_gallery_layout', 1));
	if( '' == $gallery || false == $gallery || !(isset($gallery)) )
		$gallery = 'top';
	
	echo ebor_page_title( get_option('portfolio_title','Our Portfolio') );
?>

<div class="primary">

	<div class="container inner">
	
		<div class="navigation"> 
			<a href="#" class="btn pull-left back"><?php _e('Back','keepsake'); ?></a>
			<a href="#" class="btn pull-right nav-next-item"><?php _e('Next','keepsake'); ?></a>
			<a href="#" class="btn pull-right nav-prev-item"><?php _e('Prev','keepsake'); ?></a>
		</div>
		
		<?php 
			if( 'top' == $gallery )
				get_template_part('single-portfolio/content-gallery','top');
				
			the_title('<h1 class="post-title">', '</h1>'); 
			get_template_part('single-portfolio/content', $layout);
			
			if( 'bottom' == $gallery )
				get_template_part('single-portfolio/content-gallery','bottom');
		?>
		
	</div>
	
	<?php 
		if( '1' == get_option('portfolio_share', '1') )
			get_template_part('single-portfolio/content','sharing'); 
	?>
	
</div>
  
<?php get_footer();