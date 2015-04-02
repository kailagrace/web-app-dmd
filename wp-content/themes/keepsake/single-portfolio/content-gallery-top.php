<?php
	/**
	 * Grab the gallery meta
	 */
	$gallery = esc_html(get_post_meta($post->ID, '_ebor_gallery_type', 1));
	if( '' == $gallery || false == $gallery || !(isset($gallery)) )
		$gallery = 'slider';
		
	get_template_part('single-portfolio/content-gallery', $gallery);
?>
<div class="divide30"></div>