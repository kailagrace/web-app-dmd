<?php 

/**
 * Build theme options
 * Uses the Ebor_Options class found in the ebor-framework plugin
 * Panels are WP 4.0+!!!
 * 
 * @since 1.0.0
 * @author tommusrhodus
 */
if( class_exists('Ebor_Options') ){
	$ebor_options = new Ebor_Options;
	
	/**
	 * Variables
	 */
	$theme = wp_get_theme();
	$theme_name = $theme->get( 'Name' );
	$social_options = ebor_get_social_icons();
	$footer_default = 'Copyright 2014 TommusRhodus';
	$portfolio_layouts = ebor_get_portfolio_layouts();
	$blog_layouts = ebor_get_blog_layouts();
	
	/**
	 * Panels
	 * 
	 * add_panel($name, $priority, $description)
	 * 
	 * @since 1.0.0
	 * @author tommusrhodus
	 */
	$ebor_options->add_panel( $theme_name . ': Demo Data', 5, '');
	$ebor_options->add_panel( $theme_name . ': Styling Settings', 205, 'All of the controls in this section directly relate to the styling page of ' . $theme_name);
	$ebor_options->add_panel( $theme_name . ': Header Settings', 215, 'All of the controls in this section directly relate to the header and logos of ' . $theme_name);
	$ebor_options->add_panel( $theme_name . ': Blog Settings', 225, 'All of the controls in this section directly relate to the control of blog items within ' . $theme_name);
	$ebor_options->add_panel( $theme_name . ': Portfolio Settings', 230, 'All of the controls in this section directly relate to the control of portfolio items within ' . $theme_name);
	$ebor_options->add_panel( $theme_name . ': Footer Settings', 290, 'All of the controls in this section directly relate to the control of the footer within ' . $theme_name);
	
	/**
	 * Sections
	 * 
	 * add_section($name, $title, $priority, $panel, $description)
	 * 
	 * @since 1.0.0
	 * @author tommusrhodus
	 */
	//Demo Data
	$ebor_options->add_section('demo_data_section', 'Import Demo Data', 10, $theme_name . ': Demo Data', '<strong>Please read this before importing demo data via this control:</strong><br /><br />The demo data this will install includes images from my demo site with <strong>heavy blurring applied</strong> this is due to licensing restrictions. Simply replace these images with your own.<br /><br />Note that this process can take up to 15mins on slower servers, go make a cup of tea. If you havn\'t had a notification in 30mins, use the fallback method outlined in the written documentation.<br /><br />');
	
	//Styling Sections
	$ebor_options->add_section('site_section', 'Site Layout', 1, $theme_name . ': Styling Settings');
	$ebor_options->add_section('favicon_section', 'Favicons', 30, $theme_name . ': Styling Settings');
	$ebor_options->add_section('custom_css_section', 'Custom CSS', 40, $theme_name . ': Styling Settings');
	
	//Blog Sections
	$ebor_options->add_section('blog_settings', 'Blog Settings', 1, $theme_name . ': Blog Settings');
	$ebor_options->add_section('blog_text_section', 'Blog Texts', 5, $theme_name . ': Blog Settings');
	$ebor_options->add_section('blog_layout_section', 'Blog Layout', 10, $theme_name . ': Blog Settings');
	
	//Portfolio Sections
	$ebor_options->add_section('portfolio_text_section', 'Portfolio Texts', 5, $theme_name . ': Portfolio Settings');
	$ebor_options->add_section('portfolio_layout_section', 'Portfolio Layout', 10, $theme_name . ': Portfolio Settings');
	
	//Header Settings
	$ebor_options->add_section('logo_settings_section', 'Logo Settings', 10, $theme_name . ': Header Settings');
	$ebor_options->add_section('header_icons_section', 'Icon Settings', 15, $theme_name . ': Header Settings');
	$ebor_options->add_section('footer_social_settings_section', 'Footer Icons Settings', 40, $theme_name . ': Footer Settings', '');
	
	//Footer Settings
	$ebor_options->add_section('footer_layout_section', 'Footer Layout', 5, $theme_name . ': Footer Settings', 'This setting controls the theme footer site-wide. If you need to you can override this setting on specific posts and pages from within that posts edit screen.');
	$ebor_options->add_section('subfooter_settings_section', 'Sub-Footer Settings', 30, $theme_name . ': Footer Settings');
	$ebor_options->add_section('footer_social_settings_section', 'Footer Icons Settings', 40, $theme_name . ': Footer Settings', 'These social icons are only shown in certain footer layouts.');
	$ebor_options->add_section('cta_footer_settings_section', 'Call To Action Footer Layout Settings', 50, $theme_name . ': Footer Settings', 'These settings are for the Call To Action footer layout, this footer style also uses a navigation menu that can be set to the "footer" menu location in "appearance" -> "menus".');
	$ebor_options->add_section('social_footer_settings_section', 'Centered Social Footer Layout Settings', 60, $theme_name . ': Footer Settings', 'These settings are for the Centered Social Footer layout, this footer style also uses the footer social icons settings');
	
	/**
	 * Settings (The Actual Options)
	 * Repeated settings are stepped using a for() loop and counter
	 * 
	 * add_setting($type, $option, $title, $section, $default, $priority, $select_options)
	 * 
	 * @since 1.0.0
	 * @author tommusrhodus
	 */
	//Favicons
	$ebor_options->add_setting('image', 'custom_favicon', 'Custom Favicon Upload (Use .png)', 'favicon_section', '', 10);
	$ebor_options->add_setting('image', 'mobile_favicon', 'Mobile Favicon Upload (Use .png)', 'favicon_section', '', 15);
	$ebor_options->add_setting('image', '72_favicon', '72x72px Favicon Upload (Use .png)', 'favicon_section', '', 20);
	$ebor_options->add_setting('image', '114_favicon', '114x114px Favicon Upload (Use .png)', 'favicon_section', '', 25);
	$ebor_options->add_setting('image', '144_favicon', '144x144px Favicon Upload (Use .png)', 'favicon_section', '', 30);
	
	//Demo Data
	$ebor_options->add_setting('demo_import', 'demo_import', 'Import Demo Data', 'demo_data_section', '', 10);
	
	//Colour Options
	$ebor_options->add_setting('color', 'color_dark_wrapper', 'Background Colour (Dark)', 'colors', '#f1f4f5', 11);
	$ebor_options->add_setting('color', 'color_footer', 'Background Colour (Black)', 'colors', '#2d2d30', 12);
	$ebor_options->add_setting('color', 'color_highlight', 'Highlight Colour', 'colors', '#ef5f60', 13);
	$ebor_options->add_setting('color', 'color_highlight_hover', 'Highlight Hover Colour', 'colors', '#e05152', 14);
	$ebor_options->add_setting('color', 'color_text', 'Text Colour', 'colors', '#707070', 15);
	$ebor_options->add_setting('color', 'color_headings', 'Headings Colour', 'colors', '#4d4d4d', 20);
	$ebor_options->add_setting('color', 'color_meta', 'Meta Colour', 'colors', '#b3b3b3', 20);
	
	//Styling Options
	$ebor_options->add_setting('textarea', 'custom_css', 'Custom CSS', 'custom_css_section', '', 30);
	
	//Blog Options
	$ebor_options->add_setting('select', 'blog_layout', 'Blog Index Layout', 'blog_layout_section', 'classic', 10, $blog_layouts);

	
	//Portfolio options
	$ebor_options->add_setting('select', 'portfolio_layout', 'Portfolio Layout', 'portfolio_layout_section', 'showcase-ajax', 10, $portfolio_layouts);
	$ebor_options->add_setting('select', 'portfolio_filters', 'Portfolio Archives: Show Filters?', 'portfolio_layout_section', 'yes', 20, array('yes' => 'Yes', 'no' => 'No'));
	$ebor_options->add_setting('input', 'portfolio_title', 'Portfolio Archives: Title', 'portfolio_text_section', 'Our Portfolio', 20);
	
	//Logo Options
	$ebor_options->add_setting('image', 'custom_logo', 'Logo', 'logo_settings_section', EBOR_THEME_DIRECTORY . 'style/images/logo.png', 5);
	$ebor_options->add_setting('image', 'custom_logo_retina', 'Retina Logo', 'logo_settings_section', EBOR_THEME_DIRECTORY . 'style/images/logo@2x.png', 10);
	$ebor_options->add_setting('range', 'logo_height', 'Logo Height (44 Default)', 'logo_settings_section', '44', 15, array('min' => '0', 'max' => '120', 'step' => '1'));
	
	//Header Icons
	$ebor_options->add_setting('select', 'share_icon', 'Show sharing button?', 'header_icons_section', 'yes', 10, array('yes' => 'Yes', 'no' => 'No'));
	$ebor_options->add_setting('select', 'cart_icon', 'Show cart button?', 'header_icons_section', 'yes', 15, array('yes' => 'Yes', 'no' => 'No'));
	
	//footer Icons
	for( $i = 1; $i < 7; $i++ ){
		$ebor_options->add_setting('select', 'footer_social_icon_' . $i, 'footer Social Icon ' . $i, 'footer_social_settings_section', 'pinterest', 20 + $i + $i, $social_options);
		$ebor_options->add_setting('input', 'footer_social_url_' . $i, 'footer Social URL ' . $i, 'footer_social_settings_section', '', 21 + $i + $i);
	}
	
	//Footer Options
	$ebor_options->add_setting('textarea', 'copyright', 'Copyright Message', 'subfooter_settings_section', $footer_default, 20);
	
	//background image
	$ebor_options->add_setting('image', 'body_background', 'Body Wrapper Background', 'background_image', '', 20);
}