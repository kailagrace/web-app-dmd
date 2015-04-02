<?php 
get_header(); 
echo ebor_page_title( get_option('portfolio_title','Our Portfolio') );
get_template_part('loop/loop-portfolio', get_option('portfolio_layout','showcase-ajax'));
get_footer();