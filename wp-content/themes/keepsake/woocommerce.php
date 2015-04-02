<?php
	get_header();
	
	$title = get_the_title();
	if( is_post_type_archive('product') )
		$title = 'Shop';
	
	echo ebor_page_title( $title );
?>
	
	<div class="container inner post-content">
		<div class="row">
		
			<div class="col-sm-8">
				<?php woocommerce_content(); ?>
			</div>
			
			<?php get_sidebar('shop'); ?>
			
		</div>
	</div>

<?php get_footer();