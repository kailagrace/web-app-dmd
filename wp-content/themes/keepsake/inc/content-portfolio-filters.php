<?php 
	if( $title = get_option('portfolio_title','Our Awesomest Works') )
		echo '<h3 class="section-title pull-left">'. $title .'</h3>';
		 
	if( 'yes' == get_option('portfolio_filters','yes') && !( is_tax() ) ){
		$cats = get_categories('taxonomy=portfolio_category');
		echo ebor_portfolio_filters($cats); 
	}
?>
<div class="clearfix"></div>