<?php 
	get_header(); 
	echo ebor_page_title( get_option('blog_title','Our Journal') );
	get_template_part('loop/loop-blog', get_option('blog_layout', 'classic'));
	get_footer();