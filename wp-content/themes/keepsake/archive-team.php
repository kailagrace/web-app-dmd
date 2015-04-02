<?php 
	get_header(); 
	echo ebor_page_title( get_option('team_title','Our Team') );
	get_template_part('loop/loop','team');
	get_footer();