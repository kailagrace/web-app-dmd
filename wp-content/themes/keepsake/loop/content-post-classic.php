<?php 
	global $more;
	$more = 0;
?>

<div id="post-<?php the_ID(); ?>" <?php post_class('post'); ?>>
	<?php 
		get_template_part('inc/content','meta');
		the_title('<h2 class="post-title"><a href="'. get_permalink() .'">', '</a></h2>'); 
	?>
	<div class="post-content">
		<?php 
			if( 'page' == get_post_type() ){
				the_excerpt();
			} else {
				the_content();
			} 
		?>
	</div>
</div>