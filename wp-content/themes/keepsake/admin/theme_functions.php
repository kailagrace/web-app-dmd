<?php 

/**
 * Add Shop Link to Menu
 */
if(!( function_exists('ebor_sharing_icon') )){
	function ebor_sharing_icon($items, $args) {
		if( 'primary' == $args->theme_location && 'yes' == get_option('share_icon', 'yes') ){
			global $post;
			
			if( isset($post) ){
				$url[] = '';
				$url = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full');
			}
			
			ob_start();
		?>
			
				<li class="dropdown social-dropdown pull-right ebor-social-li">
					<div class="share btn btn-default dropdown-toggle" data-toggle="dropdown"><i class="icon-heart-1"></i></div>
					<ul class="button-group dropdown-menu dropdown-menu-right share-links">
						<li><a target="_blank" href="http://www.facebook.com/share.php?u=<?php the_permalink(); ?>" onClick="return ebor_fb_like()" class="btn"><i class="icon-s-facebook"></i></a></li>
						<li><a target="_blank" href="https://twitter.com/share?url=<?php the_permalink(); ?>" onClick="return ebor_tweet()" class="btn"><i class="icon-s-twitter"></i></a></li>
						<li><a target="_blank" href="http://pinterest.com/pin/create/button/?url=<?php the_permalink(); ?>" onClick="return ebor_fb_pin()" class="btn"><i class="icon-s-pinterest"></i></a></li>
					</ul>
				</li>
				
				<script type="text/javascript">
					function ebor_fb_like() {
						window.open('http://www.facebook.com/sharer.php?u=<?php the_permalink(); ?>&t=<?php echo sanitize_title(get_the_title()); ?>','sharer','toolbar=0,status=0,width=626,height=436');
						return false;
					}
					function ebor_tweet() {
						window.open('https://twitter.com/share?url=<?php the_permalink(); ?>&t=<?php echo sanitize_title(get_the_title()); ?>','sharer','toolbar=0,status=0,width=626,height=436');
						return false;
					}
					function ebor_pin() {
						window.open('http://pinterest.com/pin/create/button/?url=<?php the_permalink(); ?>&media=<?php echo esc_url($url[0]); ?>&description=<?php echo sanitize_title(get_the_title()); ?>','sharer','toolbar=0,status=0,width=626,height=436');
						return false;
					}
				</script>
				
		<?php
			$output = ob_get_contents();
			ob_end_clean();
			
			$items .= $output;
		}
		return $items;
	}
	add_filter( 'wp_nav_menu_items', 'ebor_sharing_icon', 20,2 );
}

if(!( function_exists('ebor_page_title') )){
	function ebor_page_title( $title = false, $subtitle = false, $wrapper = true ){
		if( $wrapper ){
			if( $subtitle ){
				return '<div class="dark-wrapper intro"><div class="container inner"><h1>'. $title .'</h1><p>'. $subtitle .'</p></div></div>';
			} else {
				return '<div class="dark-wrapper page-title"><div class="container inner"><h1>'. $title .'</h1></div></div>';	
			}
		} else {
			if( $subtitle ){
				return '<div class="intro"><h1>'. $title .'</h1><p>'. $subtitle .'</p></div>';
			} else {
				return '<div class="page-title"><h1>'. $title .'</h1></div>';	
			}	
		}
	}
}

/**
 * Array of blog layouts
 */
if(!( function_exists('ebor_get_blog_layouts') )){
	function ebor_get_blog_layouts(){
		return array_flip(array(
			'Preview Feed' => 'preview',
			'Preview Feed No Sidebar' => 'preview-no-sidebar',
			'Classic Feed' => 'classic',
			'Classic Feed No Sidebar' => 'classic-no-sidebar',
			'2 Column Grid (With Sidebar)' => 'grid',
			'3 Column Grid (No Sidebar)' => 'grid-no-sidebar'
		));	
	}
}

if(!( function_exists('ebor_get_portfolio_layouts') )){
	function ebor_get_portfolio_layouts(){
		return array_flip(array(
			'Classic Lightbox' => 'lightbox',
			'Classic AJAX' => 'ajax',
			'Classic Permalink' => 'permalink',
			'Classic 3Column Lightbox' => 'col3-lightbox',
			'Classic 3Column AJAX' => 'col3-ajax',
			'Classic 3Column Permalink' => 'col3-permalink',
			'Showcase Lightbox' => 'showcase-lightbox',
			'Showcase AJAX' => 'showcase-ajax',
			'Showcase Permalink' => 'showcase-permalink',
		));	
	}
}

/**
 * HEX to RGB Converter
 *
 * Converts a HEX input to an RGB array.
 * @param $hex - the inputted HEX code, can be full or shorthand, #ffffff or #fff
 * @since 1.0.0
 * @return string
 * @author tommusrhodus
 */
if(!( function_exists('ebor_hex2rgb') )){
	function ebor_hex2rgb($hex) {
	   $hex = str_replace("#", "", $hex);
	
	   if(strlen($hex) == 3) {
	      $r = hexdec(substr($hex,0,1).substr($hex,0,1));
	      $g = hexdec(substr($hex,1,1).substr($hex,1,1));
	      $b = hexdec(substr($hex,2,1).substr($hex,2,1));
	   } else {
	      $r = hexdec(substr($hex,0,2));
	      $g = hexdec(substr($hex,2,2));
	      $b = hexdec(substr($hex,4,2));
	   }
	   $rgb = array($r, $g, $b);
	   return implode(",", $rgb); // returns the rgb values separated by commas
	   return $rgb; // returns an array with the rgb values
	}
}

if(!(function_exists( 'ebor_adjust_brightness' ))){
	function ebor_adjust_brightness($hex, $steps) {
	    // Steps should be between -255 and 255. Negative = darker, positive = lighter
	    $steps = max(-255, min(255, $steps));
	
	    // Format the hex color string
	    $hex = str_replace('#', '', $hex);
	    if (strlen($hex) == 3) {
	        $hex = str_repeat(substr($hex,0,1), 2).str_repeat(substr($hex,1,1), 2).str_repeat(substr($hex,2,1), 2);
	    }
	
	    // Get decimal values
	    $r = hexdec(substr($hex,0,2));
	    $g = hexdec(substr($hex,2,2));
	    $b = hexdec(substr($hex,4,2));
	
	    // Adjust number of steps and keep it inside 0 to 255
	    $r = max(0,min(255,$r + $steps));
	    $g = max(0,min(255,$g + $steps));  
	    $b = max(0,min(255,$b + $steps));
	
	    $r_hex = str_pad(dechex($r), 2, '0', STR_PAD_LEFT);
	    $g_hex = str_pad(dechex($g), 2, '0', STR_PAD_LEFT);
	    $b_hex = str_pad(dechex($b), 2, '0', STR_PAD_LEFT);
	
	    return '#'.$r_hex.$g_hex.$b_hex;
	}
}

/**
 * Portfolio Unlimited
 * Uses pre_get_posts to provide unlimited portfolio posts when viewing the /portfolio/ archive
 * @since 1.0.0
 */
if(!(function_exists( 'ebor_portfolio_unlimited' ))){
	function ebor_portfolio_unlimited( $query ) {
	    if ( 
	    	is_post_type_archive('portfolio') && !( is_admin() ) && $query->is_main_query() ||
	    	is_tax('portfolio_category') && !( is_admin() ) && $query->is_main_query()
	    ) {
	        $query->set( 'posts_per_page', '-1' );
	    }    
	    return;
	}
	add_action( 'pre_get_posts', 'ebor_portfolio_unlimited' );
}

/**
 * Init theme options
 * Certain theme options need to be written to the database as soon as the theme is installed.
 * This is either for the enqueues in ebor-framework, or to override the default image sizes in WooCommerce.
 * Either way this function is only called when the theme is first activated, de-activating and re-activating the theme will result in these options returning to defaults.
 * 
 * @since 1.0.0
 * @author tommusrhodus
 */
if(!( function_exists('ebor_init_theme_options') )){
	/**
	 * Hook in on activation
	 */
	global $pagenow;
	
	/**
	 * Define image sizes
	 */
	function ebor_init_theme_options() {
	  	$catalog = array(
			'width' 	=> '440',	// px
			'height'	=> '295',	// px
			'crop'		=> 1 		// true
		);
	
		$single = array(
			'width' 	=> '600',	// px
			'height'	=> '600',	// px
			'crop'		=> 1 		// true
		);
	
		$thumbnail = array(
			'width' 	=> '113',	// px
			'height'	=> '113',	// px
			'crop'		=> 1 		// false
		);
	
		// Image sizes
		update_option( 'shop_catalog_image_size', $catalog ); 		// Product category thumbs
		update_option( 'shop_single_image_size', $single ); 		// Single product image
		update_option( 'shop_thumbnail_image_size', $thumbnail ); 	// Image gallery thumbs
		
		//Ebor Framework
		$framework_args = array(
			'pivot_shortcodes'      => '0',
			'pivot_widgets'         => '0',
			'portfolio_post_type'   => '1',
			'team_post_type'        => '1',
			'client_post_type'      => '1',
			'testimonial_post_type' => '0',
			'mega_menu'             => '0',
			'aq_resizer'            => '1',
			'page_builder'          => '0',
			'likes'                 => '0',
			'options'               => '1',
			'metaboxes'             => '1',
			'elemis_widgets'        => '0',
			'elemis_shortcodes'     => '1',
			'keepsake_widgets'      => '1'
		);
		update_option('ebor_framework_options', $framework_args);
	}
	
	/**
	 * Only call this action when we first activate the theme.
	 */
	if ( is_admin() && isset( $_GET['activated'] ) && $pagenow == 'themes.php' ){
		add_action( 'init', 'ebor_init_theme_options', 1 );
	}
}

/**
 * Register Menu Locations For The Theme
 * 
 * @since 1.0.0
 * @author tommusrhodus
 */
if(!( function_exists('ebor_register_nav_menus') )){
	function ebor_register_nav_menus() {
		register_nav_menus( 
			array(
				'primary' => __( 'Standard Navigation', 'keepsake' )
			) 
		);
	}
	add_action( 'init', 'ebor_register_nav_menus' );
}

if(!( function_exists('ebor_register_sidebars') )){
	function ebor_register_sidebars() {
	
		register_sidebar( 
			array(
				'id' => 'primary',
				'name' => __( 'Blog Sidebar', 'keepsake' ),
				'description' => __( 'Widgets to be displayed in the blog sidebar.', 'keepsake' ),
				'before_widget' => '<div id="%1$s" class="sidebox widget %2$s">',
				'after_widget' => '</div>',
				'before_title' => '<h3 class="widget-title section-title">',
				'after_title' => '</h3>'
			) 
		);
		register_sidebar(
			array(
				'id' => 'page',
				'name' => __( 'Page With Sidebar, Sidebar', 'keepsake' ),
				'description' => __( 'Widgets to be displayed in the page with sidebar, sidebar.', 'keepsake' ),
				'before_widget' => '<div id="%1$s" class="sidebox widget %2$s">',
				'after_widget' => '</div>',
				'before_title' => '<h3 class="widget-title section-title">',
				'after_title' => '</h3>'
			)
		);
		register_sidebar(
			array(
				'id' => 'shop',
				'name' => __( 'Shop Sidebar', 'keepsake' ),
				'description' => __( 'Widgets to be displayed in the shop sidebar.', 'keepsake' ),
				'before_widget' => '<div id="%1$s" class="sidebox widget %2$s">',
				'after_widget' => '</div>',
				'before_title' => '<h3 class="widget-title section-title">',
				'after_title' => '</h3>'
			)
		);
		
		register_sidebar(
			array(
				'id' => 'footer1',
				'name' => __( 'Footer Column 1', 'keepsake' ),
				'description' => __( 'If this is set, your footer will be 1 column', 'keepsake' ),
				'before_widget' => '<div id="%1$s" class="sidebox widget clearfix %2$s">',
				'after_widget' => '</div>',
				'before_title' => '<h3 class="widget-title section-title">',
				'after_title' => '</h3>'
			)
		);
		
		register_sidebar(
			array(
				'id' => 'footer2',
				'name' => __( 'Footer Column 2', 'keepsake' ),
				'description' => __( 'If this & column 1 are set, your footer will be 2 columns.', 'keepsake' ),
				'before_widget' => '<div id="%1$s" class="sidebox widget clearfix %2$s">',
				'after_widget' => '</div>',
				'before_title' => '<h3 class="widget-title section-title">',
				'after_title' => '</h3>'
			)
		);
		
		
		register_sidebar(
			array(
				'id' => 'footer3',
				'name' => __( 'Footer Column 3', 'keepsake' ),
				'description' => __( 'If this & column 1 & column 2 are set, your footer will be 3 columns.', 'keepsake' ),
				'before_widget' => '<div id="%1$s" class="sidebox widget clearfix %2$s">',
				'after_widget' => '</div>',
				'before_title' => '<h3 class="widget-title section-title">',
				'after_title' => '</h3>'
			)
		);
		
		register_sidebar(
			array(
				'id' => 'footer4',
				'name' => __( 'Footer Column 4', 'keepsake' ),
				'description' => __( 'If this & column 1 & column 2 & column 3 are set, your footer will be 4 columns.', 'keepsake' ),
				'before_widget' => '<div id="%1$s" class="sidebox widget clearfix %2$s">',
				'after_widget' => '</div>',
				'before_title' => '<h3 class="widget-title section-title">',
				'after_title' => '</h3>'
			)
		);
		
	}
	add_action( 'widgets_init', 'ebor_register_sidebars' );
}
 
/**
 * Ebor Load Scripts
 * Properly Enqueues Scripts & Styles for the theme
 * @since version 1.0
 * @author TommusRhodus
 */ 
if(!( function_exists('ebor_load_scripts') )){
	function ebor_load_scripts() {
			
		//Enqueue Styles
		wp_enqueue_style( 'ebor-bootstrap', EBOR_THEME_DIRECTORY . 'style/css/bootstrap.min.css' );
		wp_enqueue_style( 'ebor-plugins', EBOR_THEME_DIRECTORY . 'style/css/plugins.css' );
		
		if (class_exists('Woocommerce'))
			wp_enqueue_style( 'ebor-woocommerce', EBOR_THEME_DIRECTORY . 'style/css/woocommerce.css' );
			
		wp_enqueue_style( 'ebor-style', get_stylesheet_uri() );
		wp_enqueue_style( 'ebor-fonts', EBOR_THEME_DIRECTORY . 'style/type/fonts.css' );
		
		//Enqueue Scripts
		if ( is_ssl() ) {
		    wp_enqueue_script('ebor-googlemapsapi', 'https://maps-api-ssl.google.com/maps/api/js?sensor=false&v=3.exp', array( 'jquery' ), false, true);
		} else {
		    wp_enqueue_script('ebor-googlemapsapi', 'http://maps.googleapis.com/maps/api/js?sensor=false&v=3.exp', array( 'jquery' ), false, true);
		}
		wp_enqueue_script( 'ebor-bootstrap', EBOR_THEME_DIRECTORY . 'style/js/bootstrap.min.js', array('jquery'), false, true  );
		wp_enqueue_script( 'ebor-plugins', EBOR_THEME_DIRECTORY . 'style/js/plugins.js', array('jquery'), false, true  );
		wp_enqueue_script( 'ebor-scripts', EBOR_THEME_DIRECTORY . 'style/js/scripts.js', array('jquery'), false, true  );
		
		//Enqueue Comments
		if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
			wp_enqueue_script( 'comment-reply' );
		}
		
		/**
		 * Variables
		 */
		$logo_height = get_option('logo_height','44');
		$highlight = get_option('color_highlight', '#ef5f60');
		$highlight_hover = get_option('color_highlight_hover', '#e05152');
		$highlight_rgb = ebor_hex2rgb($highlight);
		$black_wrapper = get_option('color_footer','#2d2d30');
		$dark_wrapper = get_option('color_dark_wrapper','#f1f4f5');
		$darker_wrapper = ebor_adjust_brightness($dark_wrapper, '-6');
		$meta = get_option('color_meta','#b3b3b3');
		$headings = get_option('color_headings','#4d4d4d');
		$body = get_option('color_text','#707070');
		
		//Styles From Theme Options
		$custom_styles = '
			.spinner,
			.grid-loader,
			#fancybox-loading div {
			    border-left: 3px solid rgba('. $highlight_rgb.',.15);
			    border-right: 3px solid rgba('. $highlight_rgb.',.15);
			    border-bottom: 3px solid rgba('. $highlight_rgb.',.15);
			    border-top: 3px solid rgba('. $highlight_rgb.',.8);
			}
			figure a .text-overlay,
			.icon-overlay a .icn-more,
			.woocommerce .widget_price_filter .price_slider_wrapper .ui-widget-content, .woocommerce-page .widget_price_filter .price_slider_wrapper .ui-widget-content {
			    background: rgba('. $highlight_rgb.', 0.96);
			}
			.btn,
			.btn-submit,
			input[type="submit"],
			.woocommerce .button,
			.added_to_cart,
			.woocommerce .widget_price_filter .ui-slider-horizontal .ui-slider-range, .woocommerce-page .widget_price_filter .ui-slider-horizontal .ui-slider-range,
			.share-links li a span {
			    background: '. $highlight .';
			}
			.btn:hover,
			.btn:focus,
			.btn:active,
			.btn.active,
			.pagination ul > li > a:hover,
			.pagination ul > li > a:focus,
			.pagination ul > .active > a,
			.pagination ul > .active > span,
			.open >.dropdown-toggle.btn-default,
			input[type="submit"]:hover,
			.woocommerce .button:hover,
			.added_to_cart:hover,
			.woocommerce .widget_price_filter .ui-slider .ui-slider-handle, .woocommerce-page .widget_price_filter .ui-slider .ui-slider-handle,
			.share-links li a span:hover {
			    background: '. $highlight_hover .';
			}
			a,
			a.nocolor:hover,
			.colored,
			.post-title a:hover,
			.section-title:after,
			.section-title.text-center:before,
			.black-wrapper a:hover,
			ul.circled li:before,
			aside .widget ul li:before,
			.woocommerce-tabs ul.tabs li.active {
			    color: '. $highlight .';
			}
			.nav > li > a:hover {
			    background: none;
			    color: '. $highlight .';
			}
			.nav > li.current > a {
			    background: none;
			    color: '. $highlight .';
			}
			.navbar .dropdown-menu li a:hover,
			.navbar .dropdown-menu li a.active,
			.navbar .nav .open > a,
			.navbar .nav .open > a:hover,
			.navbar .nav .open > a:focus,
			.navbar .dropdown-menu > li > a:hover,
			.navbar .dropdown-menu > li > a:focus,
			.navbar .dropdown-submenu:hover > a,
			.navbar .dropdown-submenu:focus > a,
			.navbar .dropdown-menu > .active > a,
			.navbar .dropdown-menu > .active > a:hover,
			.navbar .dropdown-menu > .active > a:focus,
			.button-group.dropdown-menu button.is-checked {
			    color: '. $highlight .';
			}
			.button-group.dropdown-menu button:hover {
			    color: '. $highlight .' !important;
			}
			.sp-arrow:hover,
			.sp-button:hover,
			.sp-selected-button {
				background: '. $highlight .';
			}
			.sp-selected-thumbnail {
				border-bottom: 3px solid '. $highlight .';
			}
			.meta a:hover {
			    color: '. $highlight .'
			}
			.sidebox a:hover {
			    color: '. $highlight .' !important
			}
			.tagcloud a:hover {
			    background: '. $highlight .';
			}
			#comments .info h2 a:hover {
			    color: '. $highlight .'
			}
			#comments a.reply-link:hover {
			    color: '. $highlight .'
			}
			.tooltip-inner {
			    background-color: '. $highlight .';
			}
			.tooltip.top .tooltip-arrow,
			.tooltip.top-left .tooltip-arrow,
			.tooltip.top-right .tooltip-arrow {
			    border-top-color: '. $highlight .'
			}
			.tooltip.right .tooltip-arrow {
			    border-right-color: '. $highlight .'
			}
			.tooltip.left .tooltip-arrow {
			    border-left-color: '. $highlight .'
			}
			.tooltip.bottom .tooltip-arrow,
			.tooltip.bottom-left .tooltip-arrow,
			.tooltip.bottom-right .tooltip-arrow {
			    border-bottom-color: '. $highlight .'
			}
			.tabs-top .tab a:hover,
			.tabs-top .tab.active a,
			.panel-title > a:hover,
			.panel-active a,
			.progress.plain .bar,
			span.onsale {
			    background: '. $highlight .';
			}
			.progress-list li em,
			.pricing.plan h4 span {
			    color: '. $highlight .';
			}
			.fancybox-close:hover,
			.fancybox-prev span:hover,
			.fancybox-next span:hover {
			    background: '. $highlight .' !important;
			}
			h1, h2, h3, h4, h5, h6,
			h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
				color: #4d4d4d;	
			}
			h1 a:hover, h2 a:hover, h3 a:hover, h4 a:hover, h5 a:hover, h6 a:hover {
				color: '. $highlight .';	
			}
			
			.navbar-brand img {
				height: '. $logo_height .'px;	
			}
			.navbar .btn.responsive-menu {
			    margin: '. (($logo_height / 2) + 22) .'px 0 !important;
			}
			.navbar-nav {
				margin: '. (($logo_height / 2) + 36) .'px 0 '. (($logo_height / 2) + 18) .'px;
			}
			
			.black-wrapper {
				background: '. $black_wrapper .';
			}
			
			.dark-wrapper,
			blockquote,
			.testimonials blockquote p,
			.icon-wrapper,
			.tagcloud a,
			.comment-wrapper,
			.tabs-top .tab a,
			.panel-heading .panel-title,
			select,
			textarea,
			input[type="text"],
			input[type="password"],
			input[type="datetime"],
			input[type="datetime-local"],
			input[type="date"],
			input[type="month"],
			input[type="time"],
			input[type="week"],
			input[type="number"],
			input[type="email"],
			input[type="url"],
			input[type="search"],
			input[type="tel"],
			input[type="color"],
			.uneditable-input,
			.progress.plain,
			.pricing.plan,
			.woocommerce-tabs .panel,
			.woocommerce-tabs .active a {
			    background: '. $dark_wrapper .';
			}
			
			textarea:focus,
			input[type="text"]:focus,
			input[type="password"]:focus,
			input[type="datetime"]:focus,
			input[type="datetime-local"]:focus,
			input[type="date"]:focus,
			input[type="month"]:focus,
			input[type="time"]:focus,
			input[type="week"]:focus,
			input[type="number"]:focus,
			input[type="email"]:focus,
			input[type="url"]:focus,
			input[type="search"]:focus,
			input[type="tel"]:focus,
			input[type="color"]:focus,
			.uneditable-input:focus,
			.services-1.col-wrapper:hover .icon-wrapper {
			    background: '. $darker_wrapper .';
			}
			.testimonials blockquote p:after {
			    border-color: '. $darker_wrapper .' transparent;
			}
			
			.navbar.fixed {
				background-color: rgba('. ebor_hex2rgb($dark_wrapper) .',0.93);
			}
			
			#preloader {
				background: #'. get_background_color() .';	
			}
			
			.navbar .dropdown-menu.share-links.ebor-cart.dropdown-menu-right::before { 
				border-bottom: 5px solid '. $highlight .';
			}
			
			.meta,
			.meta a,
			.sidebox .post-list .meta em,
			.sidebox .post-list .meta em a,
			#comments a.reply-link {
				color: '. $meta .';	
			}
			
			h1,
			h2,
			h3,
			h4,
			h5,
			h6,
			.lead,
			.post-title a,
			blockquote small,
			.navbar-nav > li > a,
			.slider-pro h4,
			ul.chat li strong,
			aside .sidebox .post-list h5,
			aside .sidebox .post-list h5 a,
			.sidebox .tagcloud a,
			#comments .info h2 a,
			.tabs-top .tab a,
			.panel-heading .panel-title,
			.panel-title > a,
			.pricing.plan h3,
			.fancybox-title h2,
			.fancybox-title h3 {
				color: '. $headings .';	
			}
			
			body,
			a.nocolor,
			.slider-pro p,
			.sidebox a,
			textarea:focus,
			input[type="text"]:focus,
			input[type="password"]:focus,
			input[type="datetime"]:focus,
			input[type="datetime-local"]:focus,
			input[type="date"]:focus,
			input[type="month"]:focus,
			input[type="time"]:focus,
			input[type="week"]:focus,
			input[type="number"]:focus,
			input[type="email"]:focus,
			input[type="url"]:focus,
			input[type="search"]:focus,
			input[type="tel"]:focus,
			input[type="color"]:focus,
			.uneditable-input:focus,
			.fancybox-title,
			.fancybox-error,
			.fancybox-skin,
			.retina-icons-code code {
				color: '. $body .';	
			}
		';
		wp_add_inline_style( 'ebor-style', $custom_styles );
		
		//Add custom CSS ability
		wp_add_inline_style( 'ebor-style', get_option('custom_css') );
	}
	add_action('wp_enqueue_scripts', 'ebor_load_scripts', 110);
}

/**
 * Ebor Load Admin Scripts
 * Properly Enqueues Scripts & Styles for the theme
 * 
 * @since version 1.0
 * @author TommusRhodus
 */
if(!( function_exists('ebor_admin_load_scripts') )){
	function ebor_admin_load_scripts(){
		wp_enqueue_style( 'ebor-theme-admin-css', EBOR_THEME_DIRECTORY . 'admin/ebor-theme-admin.css' );
		wp_enqueue_script( 'ebor-theme-admin-js', EBOR_THEME_DIRECTORY . 'admin/ebor-theme-admin.js', array('jquery'), false, true  );
		wp_enqueue_style( 'ebor-fontello', EBOR_THEME_DIRECTORY . 'style/type/fonts.css' );
	}
	add_action('admin_enqueue_scripts', 'ebor_admin_load_scripts', 200);
}

/**
 * Register the required plugins for this theme.
 * 
 * @since 1.0.0
 * @author tommusrhodus
 */
if(!( function_exists('ebor_register_required_plugins') )){
	function ebor_register_required_plugins() {
		$plugins = array(
			array(
			    'name'      => 'Contact Form 7',
			    'slug'      => 'contact-form-7',
			    'required'  => false,
			    'version' 	=> '3.7.2'
			),
			array(
			    'name'      => 'Manual Image Crop',
			    'slug'      => 'manual-image-crop',
			    'required'  => false,
			    'version' 	=> '1.05'
			),
			array(
			    'name'      => 'WooCommerce',
			    'slug'      => 'woocommerce',
			    'required'  => false,
			    'version' 	=> '2.0.0'
			),
			array(
				'name'     				=> 'Ebor Framework',
				'slug'     				=> 'Ebor-Framework-master',
				'source'   				=> 'https://github.com/tommusrhodus/ebor-framework/archive/master.zip',
				'required' 				=> true,
				'version' 				=> '1.0.0',
				'external_url' 			=> 'https://github.com/tommusrhodus/ebor-framework/archive/master.zip',
			),
			array(
				'name'     				=> 'Visual Composer',
				'slug'     				=> 'js_composer',
				'source'   				=> 'http://www.madeinebor.com/plugin-downloads/js_composer.zip',
				'required' 				=> true,
				'external_url' 			=> 'http://www.madeinebor.com/plugin-downloads/js_composer.zip',
			),
		);
		$config = array(
			'is_automatic' => true,
		);
		tgmpa( $plugins, $config );
	}
	add_action( 'tgmpa_register', 'ebor_register_required_plugins' );
}

/**
 * Custom Comment Markup for Pivot
 * 
 * @since 1.0.0
 * @author tommusrhodus
 */
if(!( function_exists('ebor_custom_comment') )){
	function ebor_custom_comment($comment, $args, $depth) { 
		$GLOBALS['comment'] = $comment; 
	?>
		<li <?php comment_class(); ?> id="comment-<?php comment_ID() ?>">
		  <div class="comment-wrapper">
		    <div class="user"><?php echo get_avatar( $comment->comment_author_email, 70 ); ?></div>
		    <div class="message">
		      <div class="arrow-box">
		        <div class="info">
		          <?php printf('<h2>%s</h2>', get_comment_author_link()); ?>
		          <div class="meta">
		          	<span class="date"><?php echo get_comment_date(); ?></span>
		          	<span class="reply"><?php comment_reply_link(array_merge( $args, array('depth' => $depth, 'max_depth' => $args['max_depth']))); ?></span>
		          </div>
		        </div>
		        <?php echo wpautop( htmlspecialchars_decode( get_comment_text() ) ); ?>
		        <?php if ($comment->comment_approved == '0') : ?>
		        <p><em><?php _e('Your comment is awaiting moderation.', 'keepsake') ?></em></p>
		        <?php endif; ?>
		      </div>
		    </div>
		  </div>
		</li>
	
	<?php }
}

if(!( function_exists('ebor_pagination') )){
	function ebor_pagination($pages = '', $range = 2){
		$showitems = ($range * 2)+1;
		
		global $paged;
		if(empty($paged)) $paged = 1;
		
		if($pages == ''){
			global $wp_query;
			$pages = $wp_query->max_num_pages;
				if(!$pages) {
					$pages = 1;
				}
		}
		
		$output = '';
		
		if(1 != $pages){
			$output .= "<div class='pagination'><ul>";
			if($paged > 2 && $paged > $range+1 && $showitems < $pages) $output .= "<li><a class='btn' href='".get_pagenum_link(1)."'>". __('First', 'keepsake') ."</a></li> ";
			
			for ($i=1; $i <= $pages; $i++){
				if (1 != $pages &&( !($i >= $paged+$range+1 || $i <= $paged-$range-1) || $pages <= $showitems )){
					$output .= ($paged == $i)? "<li class='active'><a class='btn' href='".get_pagenum_link($i)."'>".$i."</a></li> ":"<li><a class='btn' href='".get_pagenum_link($i)."'>".$i."</a></li> ";
				}
			}
		
			if ($paged < $pages-1 &&  $paged+$range-1 < $pages && $showitems < $pages) $output .= "<li><a class='btn' href='".get_pagenum_link($pages)."'>". __('Last', 'keepsake') ."</a></li> ";
			$output.= "</ul></div>";
		}
		
		return $output;
	}
}

if(!( function_exists('ebor_portfolio_filters') )){
	function ebor_portfolio_filters($cats){
		$output = '<div class="dropdown pull-right">
		<div class="btn btn-default dropdown-toggle" data-toggle="dropdown">'. __('Filter Portfolio','keepsake') .'</div>
		<div id="filters" class="button-group dropdown-menu dropdown-menu-right">
		<button class="button is-checked" data-filter="*">'. __('All','keepsake') .'</button>';
		
		if(is_array($cats)){
			foreach($cats as $cat){
				$output .= '<button class="button" data-filter=".'. $cat->slug .'">'. $cat->name .'</button>';
			}
		}
		
		$output .= '</div></div>';
		return $output;	
	}
}

/**
 * Add additional styling options to TinyMCE
 * 
 * @since 1.0.0
 * @author tommusrhodus
 */
if(!( function_exists('ebor_mce_buttons_2') )){
	function ebor_mce_buttons_2( $buttons ) {
	    array_unshift( $buttons, 'styleselect' );
	    return $buttons;
	}
	add_filter( 'mce_buttons_2', 'ebor_mce_buttons_2' );
}

/**
 * Add additional styling options to TinyMCE
 * 
 * @since 1.0.0
 * @author tommusrhodus
 */
if(!( function_exists('ebor_mce_before_init') )){
	function ebor_mce_before_init( $settings ) {
	    $style_formats = array(
	    	array(
	    		'title' => 'H3 Section Title',
	    		'selector' => 'h3',
	    		'classes' => 'section-title',
	    	),
	    	array(
	    		'title' => 'H3 Section Title Centered',
	    		'selector' => 'h3',
	    		'classes' => 'section-title text-center',
	    	),
	    	array(
	    		'title' => 'Subheading Paragraph',
	    		'selector' => 'p',
	    		'classes' => 'lead',
	    	),
	    );
	    $settings['style_formats'] = json_encode( $style_formats );
	    return $settings;
	}
	add_filter( 'tiny_mce_before_init', 'ebor_mce_before_init' );
}

if(!( function_exists('ebor_get_social_icons') )){
	function ebor_get_social_icons(){
		return array(
			'pinterest'=> 'Pinterest',
			'rss'=> 'RSS',
			'facebook'=> 'Facebook',
			'twitter'=> 'Twitter',
			'flickr'=> 'Flickr',
			'dribbble'=> 'Dribbble',
			'behance'=> 'Behance',
			'linkedin'=> 'LinkedIn',
			'vimeo'=> 'Vimeo',
			'youtube'=> 'Youtube',
			'skype'=> 'Skype',
			'tumblr'=> 'Tumblr',
			'delicious'=> 'Delicious',
			'500px'=> '500px',
			'grooveshark'=> 'Grooveshark',
			'forrst'=> 'Forrst',
			'digg'=> 'Digg',
			'blogger'=> 'Blogger',
			'klout'=> 'Klout',
			'dropbox'=> 'Dropbox',
			'github'=> 'Github',
			'songkick'=> 'Singkick',
			'posterous'=> 'Posterous',
			'appnet'=> 'Appnet',
			'gplus'=> 'Google Plus',
			'stumbleupon'=> 'Stumbleupon',
			'lastfm'=> 'LastFM',
			'spotify'=> 'Spotify',
			'instagram'=> 'Instagram',
			'evernote'=> 'Evernote',
			'paypal'=> 'Paypal',
			'picasa'=> 'Picasa',
			'soundcloud'=> 'Soundcloud'
		);
	}
}

if(!( function_exists('ebor_get_icons') )){
	function ebor_get_icons(){
		return array(
			'none' => 'none',
			'icon-plus' => 'plus',
			'icon-plus-1' => 'plus-1',
			'icon-minus' => 'minus',
			'icon-minus-1' => 'minus-1',
			'icon-info' => 'info',
			'icon-left-thin' => 'left-thin',
			'icon-left-1' => 'left-1',
			'icon-up-thin' => 'up-thin',
			'icon-up-1' => 'up-1',
			'icon-right-thin' => 'right-thin',
			'icon-right-1' => 'right-1',
			'icon-down-thin' => 'down-thin',
			'icon-down-1' => 'down-1',
			'icon-level-up' => 'level-up',
			'icon-level-down' => 'level-down',
			'icon-switch' => 'switch',
			'icon-infinity' => 'infinity',
			'icon-plus-squared' => 'plus-squared',
			'icon-minus-squared' => 'minus-squared',
			'icon-home' => 'home',
			'icon-home-1' => 'home-1',
			'icon-keyboard' => 'keyboard',
			'icon-erase' => 'erase',
			'icon-pause' => 'pause',
			'icon-pause-1' => 'pause-1',
			'icon-fast-forward' => 'fast-forward',
			'icon-fast-fw' => 'fast-fw',
			'icon-fast-backward' => 'fast-backward',
			'icon-fast-bw' => 'fast-bw',
			'icon-to-end' => 'to-end',
			'icon-to-end-1' => 'to-end-1',
			'icon-to-start' => 'to-start',
			'icon-to-start-1' => 'to-start-1',
			'icon-hourglass' => 'hourglass',
			'icon-stop' => 'stop',
			'icon-stop-1' => 'stop-1',
			'icon-up-dir' => 'up-dir',
			'icon-up-dir-1' => 'up-dir-1',
			'icon-play' => 'play',
			'icon-play-1' => 'play-1',
			'icon-right-dir' => 'right-dir',
			'icon-right-dir-1' => 'right-dir-1',
			'icon-down-dir' => 'down-dir',
			'icon-down-dir-1' => 'down-dir-1',
			'icon-left-dir' => 'left-dir',
			'icon-left-dir-1' => 'left-dir-1',
			'icon-adjust' => 'adjust',
			'icon-cloud' => 'cloud',
			'icon-cloud-1' => 'cloud-1',
			'icon-umbrella' => 'umbrella',
			'icon-star' => 'star',
			'icon-star-1' => 'star-1',
			'icon-star-empty' => 'star-empty',
			'icon-star-empty-1' => 'star-empty-1',
			'icon-check-1' => 'check-1',
			'icon-cup' => 'cup',
			'icon-left-hand' => 'left-hand',
			'icon-up-hand' => 'up-hand',
			'icon-right-hand' => 'right-hand',
			'icon-down-hand' => 'down-hand',
			'icon-menu' => 'menu',
			'icon-th-list' => 'th-list',
			'icon-moon' => 'moon',
			'icon-heart-empty' => 'heart-empty',
			'icon-heart-empty-1' => 'heart-empty-1',
			'icon-heart' => 'heart',
			'icon-heart-1' => 'heart-1',
			'icon-note' => 'note',
			'icon-note-beamed' => 'note-beamed',
			'icon-music-1' => 'music-1',
			'icon-layout' => 'layout',
			'icon-th' => 'th',
			'icon-flag' => 'flag',
			'icon-flag-1' => 'flag-1',
			'icon-tools' => 'tools',
			'icon-cog' => 'cog',
			'icon-cog-1' => 'cog-1',
			'icon-attention' => 'attention',
			'icon-attention-1' => 'attention-1',
			'icon-flash' => 'flash',
			'icon-flash-1' => 'flash-1',
			'icon-record' => 'record',
			'icon-cloud-thunder' => 'cloud-thunder',
			'icon-cog-alt' => 'cog-alt',
			'icon-scissors' => 'scissors',
			'icon-tape' => 'tape',
			'icon-flight' => 'flight',
			'icon-flight-1' => 'flight-1',
			'icon-mail' => 'mail',
			'icon-mail-1' => 'mail-1',
			'icon-edit' => 'edit',
			'icon-pencil' => 'pencil',
			'icon-pencil-1' => 'pencil-1',
			'icon-feather' => 'feather',
			'icon-check' => 'check',
			'icon-ok' => 'ok',
			'icon-ok-circle' => 'ok-circle',
			'icon-cancel' => 'cancel',
			'icon-cancel-1' => 'cancel-1',
			'icon-cancel-circled' => 'cancel-circled',
			'icon-cancel-circle' => 'cancel-circle',
			'icon-asterisk' => 'asterisk',
			'icon-cancel-squared' => 'cancel-squared',
			'icon-help' => 'help',
			'icon-attention-circle' => 'attention-circle',
			'icon-quote' => 'quote',
			'icon-plus-circled' => 'plus-circled',
			'icon-plus-circle' => 'plus-circle',
			'icon-minus-circled' => 'minus-circled',
			'icon-minus-circle' => 'minus-circle',
			'icon-right' => 'right',
			'icon-direction' => 'direction',
			'icon-forward' => 'forward',
			'icon-forward-1' => 'forward-1',
			'icon-ccw' => 'ccw',
			'icon-cw' => 'cw',
			'icon-cw-1' => 'cw-1',
			'icon-left' => 'left',
			'icon-up' => 'up',
			'icon-down' => 'down',
			'icon-resize-vertical' => 'resize-vertical',
			'icon-resize-horizontal' => 'resize-horizontal',
			'icon-eject' => 'eject',
			'icon-list-add' => 'list-add',
			'icon-list' => 'list',
			'icon-left-bold' => 'left-bold',
			'icon-right-bold' => 'right-bold',
			'icon-up-bold' => 'up-bold',
			'icon-down-bold' => 'down-bold',
			'icon-user-add' => 'user-add',
			'icon-star-half' => 'star-half',
			'icon-ok-circle2' => 'ok-circle2',
			'icon-cancel-circle2' => 'cancel-circle2',
			'icon-help-circled' => 'help-circled',
			'icon-help-circle' => 'help-circle',
			'icon-info-circled' => 'info-circled',
			'icon-info-circle' => 'info-circle',
			'icon-th-large' => 'th-large',
			'icon-eye' => 'eye',
			'icon-eye-1' => 'eye-1',
			'icon-eye-off' => 'eye-off',
			'icon-tag' => 'tag',
			'icon-tag-1' => 'tag-1',
			'icon-tags' => 'tags',
			'icon-camera-alt' => 'camera-alt',
			'icon-upload-cloud' => 'upload-cloud',
			'icon-reply' => 'reply',
			'icon-reply-all' => 'reply-all',
			'icon-code' => 'code',
			'icon-export' => 'export',
			'icon-export-1' => 'export-1',
			'icon-print' => 'print',
			'icon-print-1' => 'print-1',
			'icon-retweet' => 'retweet',
			'icon-retweet-1' => 'retweet-1',
			'icon-comment' => 'comment',
			'icon-comment-1' => 'comment-1',
			'icon-chat' => 'chat',
			'icon-chat-1' => 'chat-1',
			'icon-vcard' => 'vcard',
			'icon-address' => 'address',
			'icon-location' => 'location',
			'icon-location-1' => 'location-1',
			'icon-map' => 'map',
			'icon-compass' => 'compass',
			'icon-trash' => 'trash',
			'icon-trash-1' => 'trash-1',
			'icon-doc' => 'doc',
			'icon-doc-text-inv' => 'doc-text-inv',
			'icon-docs' => 'docs',
			'icon-doc-landscape' => 'doc-landscape',
			'icon-archive' => 'archive',
			'icon-rss' => 'rss',
			'icon-share' => 'share',
			'icon-basket' => 'basket',
			'icon-basket-1' => 'basket-1',
			'icon-shareable' => 'shareable',
			'icon-login' => 'login',
			'icon-login-1' => 'login-1',
			'icon-logout' => 'logout',
			'icon-logout-1' => 'logout-1',
			'icon-volume' => 'volume',
			'icon-resize-full' => 'resize-full',
			'icon-resize-full-1' => 'resize-full-1',
			'icon-resize-small' => 'resize-small',
			'icon-resize-small-1' => 'resize-small-1',
			'icon-popup' => 'popup',
			'icon-publish' => 'publish',
			'icon-window' => 'window',
			'icon-arrow-combo' => 'arrow-combo',
			'icon-zoom-in' => 'zoom-in',
			'icon-chart-pie' => 'chart-pie',
			'icon-zoom-out' => 'zoom-out',
			'icon-language' => 'language',
			'icon-air' => 'air',
			'icon-database' => 'database',
			'icon-drive' => 'drive',
			'icon-bucket' => 'bucket',
			'icon-thermometer' => 'thermometer',
			'icon-down-circled' => 'down-circled',
			'icon-down-circle2' => 'down-circle2',
			'icon-left-circled' => 'left-circled',
			'icon-right-circled' => 'right-circled',
			'icon-up-circled' => 'up-circled',
			'icon-up-circle2' => 'up-circle2',
			'icon-down-open' => 'down-open',
			'icon-down-open-1' => 'down-open-1',
			'icon-left-open' => 'left-open',
			'icon-left-open-1' => 'left-open-1',
			'icon-right-open' => 'right-open',
			'icon-right-open-1' => 'right-open-1',
			'icon-up-open' => 'up-open',
			'icon-up-open-1' => 'up-open-1',
			'icon-down-open-mini' => 'down-open-mini',
			'icon-arrows-cw' => 'arrows-cw',
			'icon-left-open-mini' => 'left-open-mini',
			'icon-play-circle2' => 'play-circle2',
			'icon-right-open-mini' => 'right-open-mini',
			'icon-to-end-alt' => 'to-end-alt',
			'icon-up-open-mini' => 'up-open-mini',
			'icon-to-start-alt' => 'to-start-alt',
			'icon-down-open-big' => 'down-open-big',
			'icon-left-open-big' => 'left-open-big',
			'icon-right-open-big' => 'right-open-big',
			'icon-up-open-big' => 'up-open-big',
			'icon-progress-0' => 'progress-0',
			'icon-progress-1' => 'progress-1',
			'icon-progress-2' => 'progress-2',
			'icon-progress-3' => 'progress-3',
			'icon-back-in-time' => 'back-in-time',
			'icon-network' => 'network',
			'icon-inbox' => 'inbox',
			'icon-inbox-1' => 'inbox-1',
			'icon-install' => 'install',
			'icon-font' => 'font',
			'icon-bold' => 'bold',
			'icon-italic' => 'italic',
			'icon-text-height' => 'text-height',
			'icon-text-width' => 'text-width',
			'icon-align-left' => 'align-left',
			'icon-align-center' => 'align-center',
			'icon-align-right' => 'align-right',
			'icon-align-justify' => 'align-justify',
			'icon-list-1' => 'list-1',
			'icon-indent-left' => 'indent-left',
			'icon-indent-right' => 'indent-right',
			'icon-lifebuoy' => 'lifebuoy',
			'icon-mouse' => 'mouse',
			'icon-dot' => 'dot',
			'icon-dot-2' => 'dot-2',
			'icon-dot-3' => 'dot-3',
			'icon-suitcase' => 'suitcase',
			'icon-off' => 'off',
			'icon-road' => 'road',
			'icon-flow-cascade' => 'flow-cascade',
			'icon-list-alt' => 'list-alt',
			'icon-flow-branch' => 'flow-branch',
			'icon-qrcode' => 'qrcode',
			'icon-flow-tree' => 'flow-tree',
			'icon-barcode' => 'barcode',
			'icon-flow-line' => 'flow-line',
			'icon-ajust' => 'ajust',
			'icon-tint' => 'tint',
			'icon-brush' => 'brush',
			'icon-paper-plane' => 'paper-plane',
			'icon-magnet' => 'magnet',
			'icon-magnet-1' => 'magnet-1',
			'icon-gauge' => 'gauge',
			'icon-traffic-cone' => 'traffic-cone',
			'icon-cc' => 'cc',
			'icon-cc-by' => 'cc-by',
			'icon-cc-nc' => 'cc-nc',
			'icon-cc-nc-eu' => 'cc-nc-eu',
			'icon-cc-nc-jp' => 'cc-nc-jp',
			'icon-cc-sa' => 'cc-sa',
			'icon-cc-nd' => 'cc-nd',
			'icon-cc-pd' => 'cc-pd',
			'icon-cc-zero' => 'cc-zero',
			'icon-cc-share' => 'cc-share',
			'icon-cc-remix' => 'cc-remix',
			'icon-move' => 'move',
			'icon-link-ext' => 'link-ext',
			'icon-check-empty' => 'check-empty',
			'icon-bookmark-empty' => 'bookmark-empty',
			'icon-phone-squared' => 'phone-squared',
			'icon-twitter' => 'twitter',
			'icon-facebook' => 'facebook',
			'icon-github' => 'github',
			'icon-rss-1' => 'rss-1',
			'icon-hdd' => 'hdd',
			'icon-certificate' => 'certificate',
			'icon-left-circled-1' => 'left-circled-1',
			'icon-right-circled-1' => 'right-circled-1',
			'icon-up-circled-1' => 'up-circled-1',
			'icon-down-circled-1' => 'down-circled-1',
			'icon-tasks' => 'tasks',
			'icon-filter' => 'filter',
			'icon-resize-full-alt' => 'resize-full-alt',
			'icon-beaker' => 'beaker',
			'icon-docs-1' => 'docs-1',
			'icon-blank' => 'blank',
			'icon-menu-1' => 'menu-1',
			'icon-list-bullet' => 'list-bullet',
			'icon-list-numbered' => 'list-numbered',
			'icon-strike' => 'strike',
			'icon-underline' => 'underline',
			'icon-table' => 'table',
			'icon-magic' => 'magic',
			'icon-pinterest-circled-1' => 'pinterest-circled-1',
			'icon-pinterest-squared' => 'pinterest-squared',
			'icon-gplus-squared' => 'gplus-squared',
			'icon-gplus' => 'gplus',
			'icon-money' => 'money',
			'icon-columns' => 'columns',
			'icon-sort' => 'sort',
			'icon-sort-down' => 'sort-down',
			'icon-sort-up' => 'sort-up',
			'icon-mail-alt' => 'mail-alt',
			'icon-linkedin' => 'linkedin',
			'icon-gauge-1' => 'gauge-1',
			'icon-comment-empty' => 'comment-empty',
			'icon-chat-empty' => 'chat-empty',
			'icon-sitemap' => 'sitemap',
			'icon-paste' => 'paste',
			'icon-user-md' => 'user-md',
			'icon-s-github' => 's-github',
			'icon-github-squared' => 'github-squared',
			'icon-github-circled' => 'github-circled',
			'icon-s-flickr' => 's-flickr',
			'icon-twitter-squared' => 'twitter-squared',
			'icon-s-vimeo' => 's-vimeo',
			'icon-vimeo-circled' => 'vimeo-circled',
			'icon-facebook-squared-1' => 'facebook-squared-1',
			'icon-s-twitter' => 's-twitter',
			'icon-twitter-circled' => 'twitter-circled',
			'icon-s-facebook' => 's-facebook',
			'icon-linkedin-squared' => 'linkedin-squared',
			'icon-facebook-circled' => 'facebook-circled',
			'icon-s-gplus' => 's-gplus',
			'icon-gplus-circled' => 'gplus-circled',
			'icon-s-pinterest' => 's-pinterest',
			'icon-pinterest-circled' => 'pinterest-circled',
			'icon-s-tumblr' => 's-tumblr',
			'icon-tumblr-circled' => 'tumblr-circled',
			'icon-s-linkedin' => 's-linkedin',
			'icon-linkedin-circled' => 'linkedin-circled',
			'icon-s-dribbble' => 's-dribbble',
			'icon-dribbble-circled' => 'dribbble-circled',
			'icon-s-stumbleupon' => 's-stumbleupon',
			'icon-stumbleupon-circled' => 'stumbleupon-circled',
			'icon-s-lastfm' => 's-lastfm',
			'icon-lastfm-circled' => 'lastfm-circled',
			'icon-rdio' => 'rdio',
			'icon-rdio-circled' => 'rdio-circled',
			'icon-spotify' => 'spotify',
			'icon-s-spotify-circled' => 's-spotify-circled',
			'icon-qq' => 'qq',
			'icon-s-instagrem' => 's-instagrem',
			'icon-dropbox' => 'dropbox',
			'icon-s-evernote' => 's-evernote',
			'icon-flattr' => 'flattr',
			'icon-s-skype' => 's-skype',
			'icon-skype-circled' => 'skype-circled',
			'icon-renren' => 'renren',
			'icon-sina-weibo' => 'sina-weibo',
			'icon-s-paypal' => 's-paypal',
			'icon-s-picasa' => 's-picasa',
			'icon-s-soundcloud' => 's-soundcloud',
			'icon-s-behance' => 's-behance',
			'icon-google-circles' => 'google-circles',
			'icon-vkontakte' => 'vkontakte',
			'icon-smashing' => 'smashing',
			'icon-db-shape' => 'db-shape',
			'icon-sweden' => 'sweden',
			'icon-logo-db' => 'logo-db',
			'icon-picture' => 'picture',
			'icon-picture-1' => 'picture-1',
			'icon-globe' => 'globe',
			'icon-globe-1' => 'globe-1',
			'icon-leaf-1' => 'leaf-1',
			'icon-lemon' => 'lemon',
			'icon-glass' => 'glass',
			'icon-gift' => 'gift',
			'icon-graduation-cap' => 'graduation-cap',
			'icon-mic' => 'mic',
			'icon-videocam' => 'videocam',
			'icon-headphones' => 'headphones',
			'icon-palette' => 'palette',
			'icon-ticket' => 'ticket',
			'icon-video' => 'video',
			'icon-video-1' => 'video-1',
			'icon-target' => 'target',
			'icon-target-1' => 'target-1',
			'icon-music' => 'music',
			'icon-trophy' => 'trophy',
			'icon-award' => 'award',
			'icon-thumbs-up' => 'thumbs-up',
			'icon-thumbs-up-1' => 'thumbs-up-1',
			'icon-thumbs-down' => 'thumbs-down',
			'icon-thumbs-down-1' => 'thumbs-down-1',
			'icon-bag' => 'bag',
			'icon-user' => 'user',
			'icon-user-1' => 'user-1',
			'icon-users' => 'users',
			'icon-users-1' => 'users-1',
			'icon-lamp' => 'lamp',
			'icon-alert' => 'alert',
			'icon-water' => 'water',
			'icon-droplet' => 'droplet',
			'icon-credit-card' => 'credit-card',
			'icon-credit-card-1' => 'credit-card-1',
			'icon-monitor' => 'monitor',
			'icon-briefcase' => 'briefcase',
			'icon-briefcase-1' => 'briefcase-1',
			'icon-floppy' => 'floppy',
			'icon-floppy-1' => 'floppy-1',
			'icon-cd' => 'cd',
			'icon-folder' => 'folder',
			'icon-folder-1' => 'folder-1',
			'icon-folder-open' => 'folder-open',
			'icon-doc-text' => 'doc-text',
			'icon-doc-1' => 'doc-1',
			'icon-calendar' => 'calendar',
			'icon-calendar-1' => 'calendar-1',
			'icon-chart-line' => 'chart-line',
			'icon-chart-bar' => 'chart-bar',
			'icon-chart-bar-1' => 'chart-bar-1',
			'icon-clipboard' => 'clipboard',
			'icon-pin' => 'pin',
			'icon-attach' => 'attach',
			'icon-attach-1' => 'attach-1',
			'icon-bookmarks' => 'bookmarks',
			'icon-book' => 'book',
			'icon-book-1' => 'book-1',
			'icon-book-open' => 'book-open',
			'icon-phone' => 'phone',
			'icon-phone-1' => 'phone-1',
			'icon-megaphone' => 'megaphone',
			'icon-megaphone-1' => 'megaphone-1',
			'icon-upload' => 'upload',
			'icon-upload-1' => 'upload-1',
			'icon-download' => 'download',
			'icon-download-1' => 'download-1',
			'icon-box' => 'box',
			'icon-newspaper' => 'newspaper',
			'icon-mobile' => 'mobile',
			'icon-signal' => 'signal',
			'icon-signal-1' => 'signal-1',
			'icon-camera' => 'camera',
			'icon-camera-1' => 'camera-1',
			'icon-shuffle' => 'shuffle',
			'icon-shuffle-1' => 'shuffle-1',
			'icon-loop' => 'loop',
			'icon-arrows-ccw' => 'arrows-ccw',
			'icon-light-down' => 'light-down',
			'icon-light-up' => 'light-up',
			'icon-mute' => 'mute',
			'icon-volume-off' => 'volume-off',
			'icon-volume-down' => 'volume-down',
			'icon-sound' => 'sound',
			'icon-volume-up' => 'volume-up',
			'icon-battery' => 'battery',
			'icon-search' => 'search',
			'icon-search-1' => 'search-1',
			'icon-key' => 'key',
			'icon-key-1' => 'key-1',
			'icon-lock' => 'lock',
			'icon-lock-1' => 'lock-1',
			'icon-lock-open' => 'lock-open',
			'icon-lock-open-1' => 'lock-open-1',
			'icon-bell' => 'bell',
			'icon-bell-1' => 'bell-1',
			'icon-bookmark' => 'bookmark',
			'icon-bookmark-1' => 'bookmark-1',
			'icon-link' => 'link',
			'icon-link-1' => 'link-1',
			'icon-back' => 'back',
			'icon-fire' => 'fire',
			'icon-flashlight' => 'flashlight',
			'icon-wrench' => 'wrench',
			'icon-hammer' => 'hammer',
			'icon-chart-area' => 'chart-area',
			'icon-clock' => 'clock',
			'icon-clock-1' => 'clock-1',
			'icon-rocket' => 'rocket',
			'icon-truck' => 'truck',
			'icon-block' => 'block',
			'icon-block-1' => 'block-1',
			'icon-s-rss' => 's-rss',
			'icon-s-twitter' => 's-twitter',
			'icon-s-facebook' => 's-facebook',
			'icon-s-dribbble' => 's-dribbble',
			'icon-s-pinterest' => 's-pinterest',
			'icon-s-flickr' => 's-flickr',
			'icon-s-vimeo' => 's-vimeo',
			'icon-s-youtube' => 's-youtube',
			'icon-s-skype' => 's-skype',
			'icon-s-tumblr' => 's-tumblr',
			'icon-s-linkedin' => 's-linkedin',
			'icon-s-behance' => 's-behance',
			'icon-s-github' => 's-github',
			'icon-s-delicious' => 's-delicious',
			'icon-s-500px' => 's-500px',
			'icon-s-grooveshark' => 's-grooveshark',
			'icon-s-forrst' => 's-forrst',
			'icon-s-digg' => 's-digg',
			'icon-s-blogger' => 's-blogger',
			'icon-s-klout' => 's-klout',
			'icon-s-dropbox' => 's-dropbox',
			'icon-s-songkick' => 's-songkick',
			'icon-s-posterous' => 's-posterous',
			'icon-s-appnet' => 's-appnet',
			'icon-s-github' => 's-github',
			'icon-s-gplus' => 's-gplus',
			'icon-s-stumbleupon' => 's-stumbleupon',
			'icon-s-lastfm' => 's-lastfm',
			'icon-s-spotify' => 's-spotify',
			'icon-s-instagram' => 's-instagram',
			'icon-s-evernote' => 's-evernote',
			'icon-s-paypal' => 's-paypal',
			'icon-s-picasa' => 's-picasa',
			'icon-s-soundcloud' => 's-soundcloud',
			'budicon-pie-chart' => 'pie-chart',
			'budicon-coffee' => 'coffee',
			'budicon-location-1' => 'location-1',
			'budicon-cocktail' => 'cocktail',
			'budicon-noodle' => 'noodle',
			'budicon-drop' => 'drop',
			'budicon-book' => 'book',
			'budicon-leaf' => 'leaf',
			'budicon-fork-knife' => 'fork-knife',
			'budicon-fire' => 'fire',
			'budicon-meal' => 'meal',
			'budicon-fridge' => 'fridge',
			'budicon-microwave' => 'microwave',
			'budicon-shop' => 'shop',
			'budicon-receipt' => 'receipt',
			'budicon-receipt-1' => 'receipt-1',
			'budicon-diamond' => 'diamond',
			'budicon-tie' => 'tie',
			'budicon-cash-dollar' => 'cash-dollar',
			'budicon-cash-euro' => 'cash-euro',
			'budicon-cash-pound' => 'cash-pound',
			'budicon-cash-yen' => 'cash-yen',
			'budicon-pants' => 'pants',
			'budicon-tshirt' => 'tshirt',
			'budicon-bag' => 'bag',
			'budicon-shirt' => 'shirt',
			'budicon-tag' => 'tag',
			'budicon-wallet' => 'wallet',
			'budicon-coins' => 'coins',
			'budicon-cash' => 'cash',
			'budicon-pack' => 'pack',
			'budicon-gift' => 'gift',
			'budicon-shopping-bag' => 'shopping-bag',
			'budicon-shopping-cart' => 'shopping-cart',
			'budicon-shopping-cart-1' => 'shopping-cart-1',
			'budicon-sun' => 'sun',
			'budicon-cloud' => 'cloud',
			'budicon-album' => 'album',
			'budicon-note-1' => 'note-1',
			'budicon-note' => 'note',
			'budicon-repeat' => 'repeat',
			'budicon-list' => 'list',
			'budicon-eject' => 'eject',
			'budicon-forward' => 'forward',
			'budicon-backward' => 'backward',
			'budicon-stop' => 'stop',
			'budicon-pause' => 'pause',
			'budicon-pause-1' => 'pause-1',
			'budicon-play' => 'play',
			'budicon-equalizer' => 'equalizer',
			'budicon-volume' => 'volume',
			'budicon-volume-1' => 'volume-1',
			'budicon-volume-2' => 'volume-2',
			'budicon-speaker' => 'speaker',
			'budicon-speaker-1' => 'speaker-1',
			'budicon-mic' => 'mic',
			'budicon-radio' => 'radio',
			'budicon-calculator' => 'calculator',
			'budicon-binoculars' => 'binoculars',
			'budicon-scissors' => 'scissors',
			'budicon-hammer' => 'hammer',
			'budicon-compass' => 'compass',
			'budicon-ruler' => 'ruler',
			'budicon-headphones' => 'headphones',
			'budicon-umbrella' => 'umbrella',
			'budicon-tv-1' => 'tv-1',
			'budicon-video' => 'video',
			'budicon-gameboy' => 'gameboy',
			'budicon-joystick' => 'joystick',
			'budicon-mouse' => 'mouse',
			'budicon-monitor' => 'monitor',
			'budicon-mobile' => 'mobile',
			'budicon-disk' => 'disk',
			'budicon-search' => 'search',
			'budicon-camera' => 'camera',
			'budicon-camera-2' => 'camera-2',
			'budicon-camera-1' => 'camera-1',
			'budicon-magnet' => 'magnet',
			'budicon-magic-wand' => 'magic-wand',
			'budicon-redo' => 'redo',
			'budicon-undo' => 'undo',
			'budicon-brush' => 'brush',
			'budicon-bookmark' => 'bookmark',
			'budicon-trash' => 'trash',
			'budicon-trash-1' => 'trash-1',
			'budicon-pencil-1' => 'pencil-1',
			'budicon-pencil-2' => 'pencil-2',
			'budicon-pencil-3' => 'pencil-3',
			'budicon-pencil-4' => 'pencil-4',
			'budicon-book-1' => 'book-1',
			'budicon-lock' => 'lock',
			'budicon-authors' => 'authors',
			'budicon-author' => 'author',
			'budicon-setting' => 'setting',
			'budicon-wrench' => 'wrench',
			'budicon-share' => 'share',
			'budicon-code' => 'code',
			'budicon-link' => 'link',
			'budicon-link-1' => 'link-1',
			'budicon-alert' => 'alert',
			'budicon-download' => 'download',
			'budicon-upload' => 'upload',
			'budicon-server' => 'server',
			'budicon-webcam' => 'webcam',
			'budicon-graph' => 'graph',
			'budicon-rss' => 'rss',
			'budicon-statistic' => 'statistic',
			'budicon-browser-2' => 'browser-2',
			'budicon-browser-3' => 'browser-3',
			'budicon-browser-4' => 'browser-4',
			'budicon-browser-5' => 'browser-5',
			'budicon-browser' => 'browser',
			'budicon-network' => 'network',
			'budicon-cone' => 'cone',
			'budicon-location' => 'location',
			'budicon-grid' => 'grid',
			'budicon-cancel-2' => 'cancel-2',
			'budicon-check-2' => 'check-2',
			'budicon-minus-2' => 'minus-2',
			'budicon-plus-2' => 'plus-2',
			'budicon-layout' => 'layout',
			'budicon-grid-1' => 'grid-1',
			'budicon-layout-1' => 'layout-1',
			'budicon-layout-2' => 'layout-2',
			'budicon-layout-3' => 'layout-3',
			'budicon-layout-4' => 'layout-4',
			'budicon-layout-5' => 'layout-5',
			'budicon-layout-6' => 'layout-6',
			'budicon-layout-7' => 'layout-7',
			'budicon-layout-8' => 'layout-8',
			'budicon-layout-9' => 'layout-9',
			'budicon-layout-10' => 'layout-10',
			'budicon-cancel' => 'cancel',
			'budicon-check-1' => 'check-1',
			'budicon-plus-1' => 'plus-1',
			'budicon-minus-1' => 'minus-1',
			'budicon-enlarge' => 'enlarge',
			'budicon-fullscreen' => 'fullscreen',
			'budicon-fullscreen-2' => 'fullscreen-2',
			'budicon-fullscreen-1' => 'fullscreen-1',
			'budicon-enlarge-1' => 'enlarge-1',
			'budicon-list-1' => 'list-1',
			'budicon-arrow-diagonal' => 'arrow-diagonal',
			'budicon-arrow-diagonal-1' => 'arrow-diagonal-1',
			'budicon-arrow-vertical' => 'arrow-vertical',
			'budicon-arrow-horizontal' => 'arrow-horizontal',
			'budicon-date' => 'date',
			'budicon-power' => 'power',
			'budicon-cloud-upload' => 'cloud-upload',
			'budicon-cloud-download' => 'cloud-download',
			'budicon-glass' => 'glass',
			'budicon-home' => 'home',
			'budicon-download-1' => 'download-1',
			'budicon-upload-1' => 'upload-1',
			'budicon-window' => 'window',
			'budicon-fullscreen-3' => 'fullscreen-3',
			'budicon-arrow' => 'arrow',
			'budicon-arrow-1' => 'arrow-1',
			'budicon-arrow-2' => 'arrow-2',
			'budicon-arrow-3' => 'arrow-3',
			'budicon-arrow-down' => 'arrow-down',
			'budicon-arrow-right' => 'arrow-right',
			'budicon-arrow-up' => 'arrow-up',
			'budicon-arrow-left' => 'arrow-left',
			'budicon-target' => 'target',
			'budicon-target-1' => 'target-1',
			'budicon-star' => 'star',
			'budicon-heart' => 'heart',
			'budicon-check' => 'check',
			'budicon-cancel-1' => 'cancel-1',
			'budicon-minus' => 'minus',
			'budicon-plus' => 'plus',
			'budicon-crop' => 'crop',
			'budicon-bell' => 'bell',
			'budicon-search-1' => 'search-1',
			'budicon-search-2' => 'search-2',
			'budicon-search-5' => 'search-5',
			'budicon-search-4' => 'search-4',
			'budicon-search-3' => 'search-3',
			'budicon-clock' => 'clock',
			'budicon-dashboard' => 'dashboard',
			'budicon-check-3' => 'check-3',
			'budicon-cancel-3' => 'cancel-3',
			'budicon-minus-3' => 'minus-3',
			'budicon-plus-3' => 'plus-3',
			'budicon-support' => 'support',
			'budicon-arrow-left-bottom' => 'arrow-left-bottom',
			'budicon-arrow-right-bottom' => 'arrow-right-bottom',
			'budicon-arrow-right-top' => 'arrow-right-top',
			'budicon-arrow-left-top' => 'arrow-left-top',
			'budicon-arrow-down-1' => 'arrow-down-1',
			'budicon-arrow-right-1' => 'arrow-right-1',
			'budicon-arrow-up-1' => 'arrow-up-1',
			'budicon-arrow-left-1' => 'arrow-left-1',
			'budicon-link-external' => 'link-external',
			'budicon-link-incoming' => 'link-incoming',
			'budicon-aid-kit' => 'aid-kit',
			'budicon-lab' => 'lab',
			'budicon-flag' => 'flag',
			'budicon-award' => 'award',
			'budicon-award-1' => 'award-1',
			'budicon-award-2' => 'award-2',
			'budicon-timer' => 'timer',
			'budicon-tv' => 'tv',
			'budicon-mic-1' => 'mic-1',
			'budicon-bicycle' => 'bicycle',
			'budicon-bus' => 'bus',
			'budicon-car' => 'car',
			'budicon-direction' => 'direction',
			'budicon-leaf-1' => 'leaf-1',
			'budicon-bulb' => 'bulb',
			'budicon-tree' => 'tree',
			'budicon-home-1' => 'home-1',
			'budicon-pin' => 'pin',
			'budicon-clock-1' => 'clock-1',
			'budicon-date-2' => 'date-2',
			'budicon-timer-1' => 'timer-1',
			'budicon-clock-2' => 'clock-2',
			'budicon-time' => 'time',
			'budicon-clock-3' => 'clock-3',
			'budicon-date-1' => 'date-1',
			'budicon-map' => 'map',
			'budicon-pin-1' => 'pin-1',
			'budicon-compass-1' => 'compass-1',
			'budicon-crown' => 'crown',
			'budicon-pointer' => 'pointer',
			'budicon-pointer-1' => 'pointer-1',
			'budicon-pointer-2' => 'pointer-2',
			'budicon-puzzle' => 'puzzle',
			'budicon-gender-female' => 'gender-female',
			'budicon-gender-male' => 'gender-male',
			'budicon-globe' => 'globe',
			'budicon-cube' => 'cube',
			'budicon-book-2' => 'book-2',
			'budicon-notebook' => 'notebook',
			'budicon-image' => 'image',
			'budicon-image-1' => 'image-1',
			'budicon-image-2' => 'image-2',
			'budicon-image-3' => 'image-3',
			'budicon-camera-3' => 'camera-3',
			'budicon-camera-4' => 'camera-4',
			'budicon-video-1' => 'video-1',
			'budicon-briefcase' => 'briefcase',
			'budicon-briefcase-1' => 'briefcase-1',
			'budicon-document' => 'document',
			'budicon-document-1' => 'document-1',
			'budicon-document-2' => 'document-2',
			'budicon-document-3' => 'document-3',
			'budicon-paper' => 'paper',
			'budicon-note-2' => 'note-2',
			'budicon-note-3' => 'note-3',
			'budicon-note-5' => 'note-5',
			'budicon-attachment' => 'attachment',
			'budicon-note-4' => 'note-4',
			'budicon-note-6' => 'note-6',
			'budicon-note-7' => 'note-7',
			'budicon-note-8' => 'note-8',
			'budicon-list-2' => 'list-2',
			'budicon-presentation' => 'presentation',
			'budicon-presentation-1' => 'presentation-1',
			'budicon-pie-cart' => 'pie-cart',
			'budicon-document-4' => 'document-4',
			'budicon-book-3' => 'book-3',
			'budicon-note-9' => 'note-9',
			'budicon-note-10' => 'note-10',
			'budicon-radion' => 'radion',
			'budicon-box' => 'box',
			'budicon-video-2' => 'video-2',
			'budicon-glasses' => 'glasses',
			'budicon-box-1' => 'box-1',
			'budicon-printer' => 'printer',
			'budicon-printer-1' => 'printer-1',
			'budicon-pin-2' => 'pin-2',
			'budicon-pin-3' => 'pin-3',
			'budicon-folder' => 'folder',
			'budicon-book-4' => 'book-4',
			'budicon-cancel-4' => 'cancel-4',
			'budicon-check-4' => 'check-4',
			'budicon-minus-4' => 'minus-4',
			'budicon-plus-4' => 'plus-4',
			'budicon-equal' => 'equal',
			'budicon-book-5' => 'book-5',
			'budicon-book-6' => 'book-6',
			'budicon-newspaper' => 'newspaper',
			'budicon-image-4' => 'image-4',
			'budicon-telephone' => 'telephone',
			'budicon-mic-2' => 'mic-2',
			'budicon-paper-plane' => 'paper-plane',
			'budicon-pen' => 'pen',
			'budicon-profile' => 'profile',
			'budicon-mail' => 'mail',
			'budicon-mail-1' => 'mail-1',
			'budicon-megaphone' => 'megaphone',
			'budicon-comment' => 'comment',
			'budicon-comment-1' => 'comment-1',
			'budicon-comment-2' => 'comment-2',
			'budicon-comment-3' => 'comment-3',
			'budicon-comment-4' => 'comment-4',
			'budicon-comment-5' => 'comment-5',
		);
	}
}

/**
 * Bootstrap nav walker
 * 
 * @since 1.0.0
 * @author tommusrhodus
 */
if(!( class_exists('ebor_bootstrap_navwalker') )){
	class ebor_bootstrap_navwalker extends Walker_Nav_Menu {
	
		/**
		 * @see Walker::start_lvl()
		 * @since 3.0.0
		 *
		 * @param string $output Passed by reference. Used to append additional content.
		 * @param int $depth Depth of page. Used for padding.
		 */
		public function start_lvl( &$output, $depth = 0, $args = array() ) {
			$indent = str_repeat( "\t", $depth );
			$output .= "\n$indent<ul role=\"menu\" class=\" dropdown-menu\">\n";
		}
	
		/**
		 * @see Walker::start_el()
		 * @since 3.0.0
		 *
		 * @param string $output Passed by reference. Used to append additional content.
		 * @param object $item Menu item data object.
		 * @param int $depth Depth of menu item. Used for padding.
		 * @param int $current_page Menu item ID.
		 * @param object $args
		 */
		public function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
			$indent = ( $depth ) ? str_repeat( "\t", $depth ) : '';
	
			/**
			 * Dividers, Headers or Disabled
			 * =============================
			 * Determine whether the item is a Divider, Header, Disabled or regular
			 * menu item. To prevent errors we use the strcasecmp() function to so a
			 * comparison that is not case sensitive. The strcasecmp() function returns
			 * a 0 if the strings are equal.
			 */
			if ( strcasecmp( $item->attr_title, 'divider' ) == 0 && $depth === 1 ) {
				$output .= $indent . '<li role="presentation" class="divider">';
			} else if ( strcasecmp( $item->title, 'divider') == 0 && $depth === 1 ) {
				$output .= $indent . '<li role="presentation" class="divider">';
			} else if ( strcasecmp( $item->attr_title, 'dropdown-header') == 0 && $depth === 1 ) {
				$output .= $indent . '<li role="presentation" class="dropdown-header">' . esc_attr( $item->title );
			} else if ( strcasecmp($item->attr_title, 'disabled' ) == 0 ) {
				$output .= $indent . '<li role="presentation" class="disabled"><a href="#">' . esc_attr( $item->title ) . '</a>';
			} else {
	
				$class_names = $value = '';
	
				$classes = empty( $item->classes ) ? array() : (array) $item->classes;
				$classes[] = 'menu-item-' . $item->ID;
	
				$class_names = join( ' ', apply_filters( 'nav_menu_css_class', array_filter( $classes ), $item, $args ) );
	
				if ( $args->has_children && $depth == 0 ){
					$class_names .= ' dropdown';
				} elseif ( $args->has_children ){
					$class_names .= ' dropdown-submenu';
				}
	
				if ( in_array( 'current-menu-item', $classes ) )
					$class_names .= ' active';
	
				$class_names = $class_names ? ' class="' . esc_attr( $class_names ) . '"' : '';
	
				$id = apply_filters( 'nav_menu_item_id', 'menu-item-'. $item->ID, $item, $args );
				$id = $id ? ' id="' . esc_attr( $id ) . '"' : '';
	
				$output .= $indent . '<li' . $id . $value . $class_names .'>';
	
				$atts = array();
				$atts['target'] = ! empty( $item->target )	? $item->target	: '';
				$atts['rel']    = ! empty( $item->xfn )		? $item->xfn	: '';
	
				// If item has_children add atts to a.
				if ( $args->has_children && $depth === 0 ) {
					$atts['href'] = ! empty( $item->url ) ? $item->url : '';
					$atts['data-toggle']	= 'dropdown';
					$atts['class']			= 'dropdown-toggle js-activated';
				} else {
					$atts['href'] = ! empty( $item->url ) ? $item->url : '';
				}
	
				$atts = apply_filters( 'nav_menu_link_attributes', $atts, $item, $args );
	
				$attributes = '';
				foreach ( $atts as $attr => $value ) {
					if ( ! empty( $value ) ) {
						$value = ( 'href' === $attr ) ? esc_url( $value ) : esc_attr( $value );
						$attributes .= ' ' . $attr . '="' . $value . '"';
					}
				}
	
				$item_output = $args->before;
	
				/*
				 * Glyphicons
				 * ===========
				 * Since the the menu item is NOT a Divider or Header we check the see
				 * if there is a value in the attr_title property. If the attr_title
				 * property is NOT null we apply it as the class name for the glyphicon.
				 */
				if ( ! empty( $item->attr_title ) )
					$item_output .= '<a'. $attributes .'><span class="glyphicon ' . esc_attr( $item->attr_title ) . '"></span>&nbsp;';
				else
					$item_output .= '<a'. $attributes .'>';
	
				$item_output .= $args->link_before . apply_filters( 'the_title', $item->title, $item->ID ) . $args->link_after;
				$item_output .= ( $args->has_children && 0 === $depth ) ? '</a>' : '</a>';
				$item_output .= $args->after;
				
				/**
				 * Check if menu item object is a mega menu object.
				 * If it is, display the mega menu content.
				 * Otherwise render elements as normal
				 */
				if( $item->object == 'mega_menu' ) {
					$output .= '<div class="yamm-content row">' . do_shortcode(get_post_field('post_content', $item->object_id)) . '</div>';
				} else {
					$output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args );
				}
	
			}
		}
	
		/**
		 * Traverse elements to create list from elements.
		 *
		 * Display one element if the element doesn't have any children otherwise,
		 * display the element and its children. Will only traverse up to the max
		 * depth and no ignore elements under that depth.
		 *
		 * This method shouldn't be called directly, use the walk() method instead.
		 *
		 * @see Walker::start_el()
		 * @since 2.5.0
		 *
		 * @param object $element Data object
		 * @param array $children_elements List of elements to continue traversing.
		 * @param int $max_depth Max depth to traverse.
		 * @param int $depth Depth of current element.
		 * @param array $args
		 * @param string $output Passed by reference. Used to append additional content.
		 * @return null Null on failure with no changes to parameters.
		 */
		public function display_element( $element, &$children_elements, $max_depth, $depth, $args, &$output ) {
	        if ( ! $element )
	            return;
	
	        $id_field = $this->db_fields['id'];
	
	        // Display this element.
	        if ( is_object( $args[0] ) )
	           $args[0]->has_children = ! empty( $children_elements[ $element->$id_field ] );
	
	        parent::display_element( $element, $children_elements, $max_depth, $depth, $args, $output );
	    }
	
		/**
		 * Menu Fallback
		 * =============
		 * If this function is assigned to the wp_nav_menu's fallback_cb variable
		 * and a manu has not been assigned to the theme location in the WordPress
		 * menu manager the function with display nothing to a non-logged in user,
		 * and will add a link to the WordPress menu manager if logged in as an admin.
		 *
		 * @param array $args passed from the wp_nav_menu function.
		 *
		 */
		public static function fallback( $args ) {
			if ( current_user_can( 'manage_options' ) ) {
	
				extract( $args );
	
				$fb_output = null;
	
				if ( $container ) {
					$fb_output = '<' . $container;
	
					if ( $container_id )
						$fb_output .= ' id="' . $container_id . '"';
	
					if ( $container_class )
						$fb_output .= ' class="' . $container_class . '"';
	
					$fb_output .= '>';
				}
	
				$fb_output .= '<ul';
	
				if ( $menu_id )
					$fb_output .= ' id="' . $menu_id . '"';
	
				if ( $menu_class )
					$fb_output .= ' class="' . $menu_class . '"';
	
				$fb_output .= '>';
				$fb_output .= '<li><a href="' . admin_url( 'nav-menus.php' ) . '">Add a menu</a></li>';
				$fb_output .= '</ul>';
	
				if ( $container )
					$fb_output .= '</' . $container . '>';
	
				echo $fb_output;
			}
		}
	}
}