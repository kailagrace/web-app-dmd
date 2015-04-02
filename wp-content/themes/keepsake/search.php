<?php 
	get_header(); 
	
	global $wp_query;
	$total_results = $wp_query->found_posts;
	( $total_results == '1' ) ? $items = __(' Item','keepsake') : $items = __(' Items','keepsake'); 
	
	echo ebor_page_title( get_search_query(), __('Found ' ,'keepsake') . $total_results . $items );
	get_template_part('loop/loop-blog', get_option('blog_layout','classic'));
	get_footer();