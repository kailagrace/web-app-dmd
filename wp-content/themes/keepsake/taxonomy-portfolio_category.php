<?php 

get_header(); 

$term = get_queried_object();
echo ebor_page_title( $term->name, $term->description );

get_template_part('loop/loop-portfolio', get_option('portfolio_layout','showcase-ajax'));

get_footer();