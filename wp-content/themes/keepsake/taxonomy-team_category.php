<?php 
	get_header(); 
	
	$term = get_queried_object();
	echo ebor_page_title( $term->name, $term->description );
	
	get_template_part('loop/loop','team');
	
	get_footer();