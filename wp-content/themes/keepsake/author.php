<?php 
get_header(); 
$author = get_user_by( 'slug', get_query_var( 'author_name' ) );
echo ebor_page_title( __('Posts by: ','keepsake') . $author->display_name, $author->description );
get_template_part('loop/loop-blog', get_option('blog_layout', 'classic'));
get_footer();