<?php 

global $post;
$videos = get_post_meta( $post->ID, '_ebor_videos', true );

foreach( $videos as $key => $video ){
	echo wp_oembed_get(esc_url($video['_ebor_the_oembed']));
}