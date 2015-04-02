<?php
	get_header();
	echo ebor_page_title( __('Whoops, 404', 'keepsake') );
?>
  
	<div class="container inner">
		<?php get_template_part('loop/content','none'); ?>
	</div>

<?php get_footer();