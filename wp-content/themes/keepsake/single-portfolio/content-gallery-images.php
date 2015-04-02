<?php 
	global $post;
	$header_images = get_post_meta($post->ID, '_ebor_gallery_images', 1); 
	
	if( is_array($header_images) ) :
?>
	
	<ul class="basic-gallery text-center">
		<?php 
			foreach( $header_images as $id => $content ){
				echo '<li>'. wp_get_attachment_image($id, 'large') .'</li> ';
			}
		?>
	</ul>

<?php endif;