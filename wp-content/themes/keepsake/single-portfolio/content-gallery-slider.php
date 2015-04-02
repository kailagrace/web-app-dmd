<?php 
	global $post;
	$header_images = get_post_meta($post->ID, '_ebor_gallery_images', 1); 
	
	if( is_array($header_images) ) :
?>

<div class="slider-pro portfolio-slider">
	<div class="sp-slides">
		
		<?php 
			foreach( $header_images as $id => $content ){
				$image = wp_get_attachment_image_src($id,'full');
				
				if(!( isset($image[0]) ))
					continue;
				
				echo '<div class="sp-slide"> 
						<img class="sp-image" src="'. EBOR_THEME_DIRECTORY .'style/images/blank.gif" data-src="'. esc_url($image[0]) .'" alt="'. esc_attr(get_the_title()) .'" /> 
					  </div>';
			}
		?>
		
	</div>
</div>

<?php endif;