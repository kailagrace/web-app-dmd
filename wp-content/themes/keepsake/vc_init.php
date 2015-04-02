<?php 

/**
 * Force Visual Composer to initialize as "built into the theme". This will hide certain tabs under the Settings->Visual Composer page
 */
if( function_exists('vc_set_as_theme') ){
	function ebor_vcSetAsTheme() {
		vc_set_as_theme();
	}
	add_action( 'vc_before_init', 'ebor_vcSetAsTheme' );
}

/**
 * Add additional functions to certain blocks.
 * vc_map runs before custom post types and taxonomies are created, so this function is used
 * to add custom taxonomy selectors to VC blocks, a little annoying, but works perfectly.
 */
if(!( function_exists('ebor_vc_add_att') )){
	function ebor_vc_add_attr(){
		/**
		 * Add background atrributes to VC Rows
		 */
		$attributes = array(
			'type' => 'dropdown',
			'heading' => "Background Style",
			'param_name' => 'background_style',
			'value' => array_flip(array(
				'standard' => 'Standard Settings',
				'dark' => 'Standard Settings (Dark Background)',
				'thin' => 'Thin Width Section',
				'full' => 'Full Width Section',
			)),
			'description' => "Choose Layout Style For This Row"
		);
		vc_add_param('vc_row', $attributes);
		
		/**
		 * Add team category selectors
		 */
		$team_args = array(
			'orderby'                  => 'name',
			'hide_empty'               => 0,
			'hierarchical'             => 1,
			'taxonomy'                 => 'team_category'
		);
		$team_cats = get_categories( $team_args );
		$final_team_cats = array( 'Show all categories' => 'all' );
		
		foreach( $team_cats as $cat ){
			$final_team_cats[$cat->name] = $cat->term_id;
		}
		
		$attributes = array(
			'type' => 'dropdown',
			'heading' => "Show Specific Team Category?",
			'param_name' => 'filter',
			'value' => $final_team_cats
		);
		vc_add_param('keepsake_team', $attributes);
		
		/**
		 * Add portfolio category selectors
		 */
		$portfolio_args = array(
			'orderby'                  => 'name',
			'hide_empty'               => 0,
			'hierarchical'             => 1,
			'taxonomy'                 => 'portfolio_category'
		);
		$portfolio_cats = get_categories( $portfolio_args );
		$final_portfolio_cats = array( 'Show all categories' => 'all' );
		
		foreach( $portfolio_cats as $cat ){
			$final_portfolio_cats[$cat->name] = $cat->term_id;
		}
		
		$attributes = array(
			'type' => 'dropdown',
			'heading' => "Show Specific Portfolio Category?",
			'param_name' => 'filter',
			'value' => $final_portfolio_cats
		);
		vc_add_param('keepsake_portfolio', $attributes);
	}
	add_action('init', 'ebor_vc_add_attr', 999);
}

/**
 * Redirect page template if vc_row shortcode is found in the page.
 * This lets us use a dedicated page template for Visual Composer pages
 * without the need for on page checks, or custom page templates.
 * 
 * It's buyer-proof basically.
 */
if(!( function_exists('ebor_vc_page_template') )){
	function ebor_vc_page_template( $template ){
		global $post;
		
		if(!( isset($post->post_content) ) || is_search())
			return $template;
			
		if( has_shortcode($post->post_content, 'vc_row') ){
			$new_template = locate_template( array( 'page_visual_composer.php' ) );
			if (!( '' == $new_template )){
				return $new_template;
			}
		}
		return $template;
	}
	add_filter( 'template_include', 'ebor_vc_page_template', 99 );
}

/**
 * Page builder blocks below here
 * Whoop-dee-doo
 */
if(!( function_exists('ebor_page_header_shortcode') ))
	require_once('vc_blocks/vc_page_header_block.php');
	
if(!( function_exists('ebor_icon_block_shortcode') ))
	require_once('vc_blocks/vc_icon_block.php');
	
if(!( function_exists('ebor_slider_pro_shortcode') ))
	require_once('vc_blocks/vc_slider_pro_block.php');
	
if(!( function_exists('ebor_pricing_table_shortcode') ))
	require_once('vc_blocks/vc_pricing_table_block.php');
	
if(!( function_exists('ebor_testimonial_shortcode') ))
	require_once('vc_blocks/vc_testimonial_block.php');
	
if(!( function_exists('ebor_blog_shortcode') ))
	require_once('vc_blocks/vc_blog_block.php');
	
if(!( function_exists('ebor_portfolio_shortcode') ))
	require_once('vc_blocks/vc_portfolio_block.php');
	
if(!( function_exists('ebor_tabs_shortcode') ))
	require_once('vc_blocks/vc_tabs_block.php');
	
if(!( function_exists('ebor_toggles_shortcode') ))
	require_once('vc_blocks/vc_toggles_block.php');
	
if(!( function_exists('ebor_team_shortcode') ))
	require_once('vc_blocks/vc_team_block.php');
	
if(!( function_exists('ebor_skill_bar_shortcode') ))
	require_once('vc_blocks/vc_skill_bar_block.php');
	
if(!( function_exists('ebor_alert_shortcode') ))
	require_once('vc_blocks/vc_alert_block.php');
	
if(!( function_exists('ebor_code_shortcode') ))
	require_once('vc_blocks/vc_code_block.php');
	
if(!( function_exists('ebor_map_shortcode') ))
	require_once('vc_blocks/vc_map_block.php');
	
	
/**
 * VC Templates below here.
 */
if(!( function_exists('ebor_home_one_template') )){
	function ebor_home_one_template($data){
	    $template               = array();
	    $template['name']       = 'Keepsake - Home Layout 1';
	    $template['image_path'] = EBOR_THEME_DIRECTORY . 'style/images/landing_page.png';
	    $template['custom_class'] = 'custom_template_for_vc_custom_template';
	    $template['content']    = <<<CONTENT
            [vc_row background_style="dark"][vc_column width="1/1"][keepsake_page_header title="We're Keepsake, a digital &amp; branding agency" subtitle="Specializing in web design, poster, motion video, based in London. We love to turn ideas into beautiful things."][/vc_column][/vc_row][vc_row][vc_column width="1/1"][keepsake_portfolio pppage="12" type="lightbox" pagination="yes" filter="all" title="Our Most Awesome Works" filters="yes"][vc_empty_space height="70px"][vc_column_text]
            <p class="lead" style="text-align: center;">Would you like to work with us?</p>
            <p style="text-align: center;">[button link="#" color="red"]<i class="icon-paper-plane"></i> Contact Us[/button]</p>
            [/vc_column_text][/vc_column][/vc_row][vc_row background_style="pad-top"][vc_column width="1/1"][vc_empty_space height="70px"][vc_column_text]
            <h3 class="section-title">WHAT DO WE DO</h3>
            Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.[/vc_column_text][/vc_column][/vc_row][vc_row background_style="pad-no"][vc_column width="1/4"][keepsake_icon_block title="Web Design" image="151" image_retina="152" alt="Alternate Text for Image"]
            <h4 style="text-align: center;">Web Design</h4>
            <p style="text-align: center;">Donec elit non mi porta gravida eureget metus. Aenean eu leo quam. Pellentesque ornare sem por quam venenatis vestibulum.</p>
            [/keepsake_icon_block][/vc_column][vc_column width="1/4"][keepsake_icon_block title="Web Design" image="137" image_retina="138" alt="Alternate Text for Image"]
            <h4 style="text-align: center;">Motion Video</h4>
            <p style="text-align: center;">Donec elit non mi porta gravida eureget metus. Aenean eu leo quam. Pellentesque ornare sem por quam venenatis vestibulum.</p>
            [/keepsake_icon_block][/vc_column][vc_column width="1/4"][keepsake_icon_block title="Web Design" image="117" image_retina="118" alt="Alternate Text for Image"]
            <h4 style="text-align: center;">Print Design</h4>
            <p style="text-align: center;">Donec elit non mi porta gravida eureget metus. Aenean eu leo quam. Pellentesque ornare sem por quam venenatis vestibulum.</p>
            [/keepsake_icon_block][/vc_column][vc_column width="1/4"][keepsake_icon_block title="Web Design" image="83" image_retina="84" alt="Alternate Text for Image"]
            <h4 style="text-align: center;">Illustration</h4>
            <p style="text-align: center;">Donec elit non mi porta gravida eureget metus. Aenean eu leo quam. Pellentesque ornare sem por quam venenatis vestibulum.</p>
            [/keepsake_icon_block][/vc_column][/vc_row][vc_row background_style="pad-no"][vc_column width="1/1"][vc_empty_space height="100px"][vc_column_text]
            <h3 class="section-title">FROM OUR JOURNAL</h3>
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla.[/vc_column_text][keepsake_blog pppage="4" type="preview-no-sidebar" pagination="no"][/vc_column][/vc_row]
CONTENT;
	    array_unshift($data, $template);
	    return $data;
	}
	add_filter( 'vc_load_default_templates', 'ebor_home_one_template' );
}

if(!( function_exists('ebor_home_two_template') )){
	function ebor_home_two_template($data){
	    $template               = array();
	    $template['name']       = 'Keepsake - Home Layout 2';
	    $template['image_path'] = EBOR_THEME_DIRECTORY . 'style/images/landing_page.png';
	    $template['custom_class'] = 'custom_template_for_vc_custom_template';
	    $template['content']    = <<<CONTENT
            [vc_row background_style="dark"][vc_column width="1/1"][keepsake_page_header title="We're Keepsake, a digital &amp; branding agency" subtitle="Specializing in web design, poster, motion video, based in London. We love to turn ideas into beautiful things."][/vc_column][/vc_row][vc_row background_style="full"][vc_column width="1/1"][keepsake_portfolio pppage="15" type="showcase-ajax" filters="yes" filter="all" title="Our Most Awesome Works"][/vc_column][/vc_row][vc_row background_style="pad-top"][vc_column width="1/1"][vc_column_text]
            <h3 class="section-title">WHAT DO WE DO</h3>
            Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.[/vc_column_text][/vc_column][/vc_row][vc_row background_style="pad-no"][vc_column width="1/4"][keepsake_icon_block title="Web Design" image="151" image_retina="152" alt="Alternate Text for Image"]
            <h4 style="text-align: center;">Web Design</h4>
            <p style="text-align: center;">Donec elit non mi porta gravida eureget metus. Aenean eu leo quam. Pellentesque ornare sem por quam venenatis vestibulum.</p>
            [/keepsake_icon_block][/vc_column][vc_column width="1/4"][keepsake_icon_block title="Web Design" image="137" image_retina="138" alt="Alternate Text for Image"]
            <h4 style="text-align: center;">Motion Video</h4>
            <p style="text-align: center;">Donec elit non mi porta gravida eureget metus. Aenean eu leo quam. Pellentesque ornare sem por quam venenatis vestibulum.</p>
            [/keepsake_icon_block][/vc_column][vc_column width="1/4"][keepsake_icon_block title="Web Design" image="117" image_retina="118" alt="Alternate Text for Image"]
            <h4 style="text-align: center;">Print Design</h4>
            <p style="text-align: center;">Donec elit non mi porta gravida eureget metus. Aenean eu leo quam. Pellentesque ornare sem por quam venenatis vestibulum.</p>
            [/keepsake_icon_block][/vc_column][vc_column width="1/4"][keepsake_icon_block title="Web Design" image="83" image_retina="84" alt="Alternate Text for Image"]
            <h4 style="text-align: center;">Illustration</h4>
            <p style="text-align: center;">Donec elit non mi porta gravida eureget metus. Aenean eu leo quam. Pellentesque ornare sem por quam venenatis vestibulum.</p>
            [/keepsake_icon_block][/vc_column][/vc_row]
CONTENT;
	    array_unshift($data, $template);
	    return $data;
	}
	add_filter( 'vc_load_default_templates', 'ebor_home_two_template' );
}

if(!( function_exists('ebor_home_three_template') )){
	function ebor_home_three_template($data){
	    $template               = array();
	    $template['name']       = 'Keepsake - Home Layout 3';
	    $template['image_path'] = EBOR_THEME_DIRECTORY . 'style/images/landing_page.png';
	    $template['custom_class'] = 'custom_template_for_vc_custom_template';
	    $template['content']    = <<<CONTENT
            [vc_row background_style="dark"][vc_column width="1/1"][keepsake_page_header title="We're Keepsake, a digital &amp; branding agency" subtitle="Specializing in web design, poster, motion video, based in London. We love to turn ideas into beautiful things."][/vc_column][/vc_row][vc_row background_style="pad-top"][vc_column width="1/1"][keepsake_slider_pro][keepsake_slider_pro_content image="170" title="Pellentesque ornare sem lacinia" subtitle="Aenean eu leo quam consectetur urna mollis" alt="Alt Text" location="leftBottom"][keepsake_slider_pro_content image="171" alt="Alt Text" location="leftBottom"][keepsake_slider_pro_content image="172" title="Pellentesque ornare sem lacinia" subtitle="Aenean eu leo quam consectetur urna mollis" alt="Alt Text" location="bottomRight"][keepsake_slider_pro_content image="173" title="Pellentesque ornare sem lacinia" subtitle="Aenean eu leo quam consectetur urna mollis" alt="Alt Text" location="topLeft"][keepsake_slider_pro_content image="174" alt="Alt Text" location="leftBottom"][keepsake_slider_pro_content image="175" title="Pellentesque ornare sem lacinia" subtitle="Aenean eu leo quam consectetur urna mollis" alt="Alt Text" location="topRight"][keepsake_slider_pro_content image="176" alt="Alt Text" location="leftBottom"][keepsake_slider_pro_content image="177" title="Pellentesque ornare sem lacinia" subtitle="Aenean eu leo quam consectetur urna mollis" alt="Alt Text" location="bottomCenter"][keepsake_slider_pro_content image="178" alt="Alt Text" location="leftBottom"][keepsake_slider_pro_content image="179" alt="Alt Text" location="leftBottom"][keepsake_slider_pro_content image="180" alt="Alt Text" location="leftBottom"][keepsake_slider_pro_content image="181" alt="Alt Text" location="leftBottom"][/keepsake_slider_pro][vc_empty_space height="100px"][/vc_column][/vc_row][vc_row background_style="pad-no"][vc_column width="1/4"][keepsake_icon_block title="Web Design" image="151" image_retina="152" alt="Alternate Text for Image"]
            <h4 style="text-align: center;">Web Design</h4>
            <p style="text-align: center;">Donec elit non mi porta gravida eureget metus. Aenean eu leo quam. Pellentesque ornare sem por quam venenatis vestibulum.</p>
            [/keepsake_icon_block][/vc_column][vc_column width="1/4"][keepsake_icon_block title="Web Design" image="137" image_retina="138" alt="Alternate Text for Image"]
            <h4 style="text-align: center;">Motion Video</h4>
            <p style="text-align: center;">Donec elit non mi porta gravida eureget metus. Aenean eu leo quam. Pellentesque ornare sem por quam venenatis vestibulum.</p>
            [/keepsake_icon_block][/vc_column][vc_column width="1/4"][keepsake_icon_block title="Web Design" image="117" image_retina="118" alt="Alternate Text for Image"]
            <h4 style="text-align: center;">Print Design</h4>
            <p style="text-align: center;">Donec elit non mi porta gravida eureget metus. Aenean eu leo quam. Pellentesque ornare sem por quam venenatis vestibulum.</p>
            [/keepsake_icon_block][/vc_column][vc_column width="1/4"][keepsake_icon_block title="Web Design" image="83" image_retina="84" alt="Alternate Text for Image"]
            <h4 style="text-align: center;">Illustration</h4>
            <p style="text-align: center;">Donec elit non mi porta gravida eureget metus. Aenean eu leo quam. Pellentesque ornare sem por quam venenatis vestibulum.</p>
            [/keepsake_icon_block][/vc_column][/vc_row][vc_row background_style="pad-bottom"][vc_column width="1/1"][vc_empty_space height="100px"][vc_column_text]
            <h3 class="section-title">FROM OUR JOURNAL</h3>
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla.[/vc_column_text][keepsake_blog pppage="4" type="preview-no-sidebar" pagination="no"][/vc_column][/vc_row]
CONTENT;
	    array_unshift($data, $template);
	    return $data;
	}
	add_filter( 'vc_load_default_templates', 'ebor_home_three_template' );
}

if(!( function_exists('ebor_services_template') )){
	function ebor_services_template($data){
	    $template               = array();
	    $template['name']       = 'Keepsake - Services Page';
	    $template['image_path'] = EBOR_THEME_DIRECTORY . 'style/images/landing_page.png';
	    $template['custom_class'] = 'custom_template_for_vc_custom_template';
	    $template['content']    = <<<CONTENT
            [vc_row background_style="dark"][vc_column width="1/1"][keepsake_page_header title="Services"][/vc_column][/vc_row][vc_row background_style="pad-top"][vc_column width="1/1"][vc_column_text]
            <h3 class="section-title">WHAT DO WE DO</h3>
            Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.[/vc_column_text][/vc_column][/vc_row][vc_row background_style="pad-no"][vc_column width="1/4"][keepsake_icon_block title="Web Design" image="151" image_retina="152" alt="Alternate Text for Image"]
            <h4 style="text-align: center;">Web Design</h4>
            <p style="text-align: center;">Donec elit non mi porta gravida eureget metus. Aenean eu leo quam. Pellentesque ornare sem por quam venenatis vestibulum.</p>
            [/keepsake_icon_block][/vc_column][vc_column width="1/4"][keepsake_icon_block title="Web Design" image="137" image_retina="138" alt="Alternate Text for Image"]
            <h4 style="text-align: center;">Motion Video</h4>
            <p style="text-align: center;">Donec elit non mi porta gravida eureget metus. Aenean eu leo quam. Pellentesque ornare sem por quam venenatis vestibulum.</p>
            [/keepsake_icon_block][/vc_column][vc_column width="1/4"][keepsake_icon_block title="Web Design" image="117" image_retina="118" alt="Alternate Text for Image"]
            <h4 style="text-align: center;">Print Design</h4>
            <p style="text-align: center;">Donec elit non mi porta gravida eureget metus. Aenean eu leo quam. Pellentesque ornare sem por quam venenatis vestibulum.</p>
            [/keepsake_icon_block][/vc_column][vc_column width="1/4"][keepsake_icon_block title="Web Design" image="83" image_retina="84" alt="Alternate Text for Image"]
            <h4 style="text-align: center;">Illustration</h4>
            <p style="text-align: center;">Donec elit non mi porta gravida eureget metus. Aenean eu leo quam. Pellentesque ornare sem por quam venenatis vestibulum.</p>
            [/keepsake_icon_block][/vc_column][/vc_row][vc_row background_style="pad-no"][vc_column width="1/1"][vc_empty_space height="100px"][vc_column_text]
            <h3 class="section-title">Testimonials</h3>
            [/vc_column_text][/vc_column][/vc_row][vc_row background_style="pad-no"][vc_column width="1/2"][keepsake_testimonial_block title="Alison McBrian"]Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus.[/keepsake_testimonial_block][keepsake_testimonial_block title="Connor Gibson"]Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus.[/keepsake_testimonial_block][/vc_column][vc_column width="1/2"][keepsake_testimonial_block title="Jack Welch"]Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus.[/keepsake_testimonial_block][keepsake_testimonial_block title="Nikolas Brooten"]Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus.[/keepsake_testimonial_block][/vc_column][/vc_row][vc_row background_style="pad-no"][vc_column width="1/1"][vc_empty_space height="100px"][vc_column_text]
            <h3 class="section-title">Our Prices</h3>
            Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna.[/vc_column_text][/vc_column][/vc_row][vc_row background_style="pad-bottom"][vc_column width="1/4"][keepsake_pricing_table title="Bronze" currency="$" amount="3" button_text="Select Plan" button_url="#" text="3 Days,2GB Storage,25 Users,Unlimited Pages,Enhanced Security,3 E-mail Addresses"][/vc_column][vc_column width="1/4"][keepsake_pricing_table title="Silver" currency="$" amount="5" button_text="Select Plan" button_url="#" text="3 Days,2GB Storage,25 Users,Unlimited Pages,Enhanced Security,3 E-mail Addresses"][/vc_column][vc_column width="1/4"][keepsake_pricing_table title="Gold" currency="$" amount="10" button_text="Select Plan" button_url="#" text="3 Days,2GB Storage,25 Users,Unlimited Pages,Enhanced Security,3 E-mail Addresses"][/vc_column][vc_column width="1/4"][keepsake_pricing_table title="Platinum" currency="$" amount="20" button_text="Select Plan" button_url="#" text="3 Days,2GB Storage,25 Users,Unlimited Pages,Enhanced Security,3 E-mail Addresses"][/vc_column][/vc_row]
CONTENT;
	    array_unshift($data, $template);
	    return $data;
	}
	add_filter( 'vc_load_default_templates', 'ebor_services_template' );
}

if(!( function_exists('ebor_contact_template') )){
	function ebor_contact_template($data){
	    $template               = array();
	    $template['name']       = 'Keepsake - Contact Page';
	    $template['image_path'] = EBOR_THEME_DIRECTORY . 'style/images/landing_page.png';
	    $template['custom_class'] = 'custom_template_for_vc_custom_template';
	    $template['content']    = <<<CONTENT
            [vc_row background_style="dark"][vc_column width="1/1"][keepsake_page_header title="Get in touch"][/vc_column][/vc_row][vc_row background_style="full"][vc_column width="1/1"][keepsake_map_block height="400" address="York, England" image="313"][/vc_column][/vc_row][vc_row background_style="thin"][vc_column width="1/3"][keepsake_icon_block image="153" image_retina="154" alt="Icon Alt Text"]
            <p style="text-align: center;">Moon Street Light Avenue
            14/05 Jupiter, JP 80630</p>
            [/keepsake_icon_block][/vc_column][vc_column width="1/3"][keepsake_icon_block image="109" image_retina="110" alt="Icon Alt Text"]
            <p style="text-align: center;">00 (123) 456 78 90
            00 (987) 654 32 10</p>
            [/keepsake_icon_block][/vc_column][vc_column width="1/3"][keepsake_icon_block image="107" image_retina="108" alt="Icon Alt Text"]
            <p style="text-align: center;">manager@email.com
            asistant@email.com</p>
            [/keepsake_icon_block][/vc_column][/vc_row][vc_row background_style="thin"][vc_column width="1/1"][vc_empty_space height="70px"][vc_column_text]
            <h3 class="section-title text-center" style="text-align: center;">Get In Touch</h3>
            <p style="text-align: center;">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            [/vc_column_text][contact-form-7 id="4"][/vc_column][/vc_row]
CONTENT;
	    array_unshift($data, $template);
	    return $data;
	}
	add_filter( 'vc_load_default_templates', 'ebor_contact_template' );
}

if(!( function_exists('ebor_about_template') )){
	function ebor_about_template($data){
	    $template               = array();
	    $template['name']       = 'Keepsake - About Page';
	    $template['image_path'] = EBOR_THEME_DIRECTORY . 'style/images/landing_page.png';
	    $template['custom_class'] = 'custom_template_for_vc_custom_template';
	    $template['content']    = <<<CONTENT
            [vc_row background_style="dark"][vc_column width="1/1"][keepsake_page_header title="About"][/vc_column][/vc_row][vc_row][vc_column width="1/1"][vc_column_text]
            <h3 class="section-title">Meet The Team</h3>
            [/vc_column_text][keepsake_team pppage="3" filter="all"][vc_empty_space height="100px"][/vc_column][/vc_row][vc_row][vc_column width="2/3"][vc_column_text]
            <h3 class="section-title">Our Work Place</h3>
            Vestibulum ligut praesent commodo cursus magna, consectetur et. Cum socis natoque penatibus et magnis dis tellus parturient pharetra montes. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat.[/vc_column_text][/vc_column][vc_column width="1/3"][vc_single_image image="267" border_color="grey" img_link_target="_self" img_size="full"][/vc_column][/vc_row][vc_row][vc_column width="1/1"][vc_empty_space height="70px"][/vc_column][/vc_row][vc_row][vc_column width="1/2"][vc_column_text]
            <h3 class="section-title">Our Skills</h3>
            Duis non lectus sit amet est imperdiet cursus elementum vitae eros. Etiam adipiscingmorbi vitae magna tellus, ac mattis urna phasellus rhoncus.[/vc_column_text][keepsake_skill_bar_block title="HTML/CSS" amount="90"][keepsake_skill_bar_block title="jQuery" amount="80"][keepsake_skill_bar_block title="WordPress" amount="100"][keepsake_skill_bar_block title="Washing Dishes" amount="50"][/vc_column][vc_column width="1/2"][keepsake_tabs title="Why choose us?"][keepsake_tabs_content title="This is"]Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            
            Donec sed odio dui. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas faucibus mollis interdum.
            <ul class="circled">
            	<li>Mauris lacinia dui non metus dignissim venenatis.</li>
            	<li>Etiam elit tellus, condimentum tempor lobortis non.</li>
            	<li>Aliquam pharetra vestibulum arcu, eget iaculis.</li>
            </ul>
            [/keepsake_tabs_content][keepsake_tabs_content title="Tabbed"]Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum.[/keepsake_tabs_content][keepsake_tabs_content title="Content"]Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur.
            
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.[/keepsake_tabs_content][keepsake_tabs_content title="Example"]Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
            
            Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui.[/keepsake_tabs_content][/keepsake_tabs][/vc_column][/vc_row]
CONTENT;
	    array_unshift($data, $template);
	    return $data;
	}
	add_filter( 'vc_load_default_templates', 'ebor_about_template' );
}

if(!( function_exists('ebor_elements_template') )){
	function ebor_elements_template($data){
	    $template               = array();
	    $template['name']       = 'Keepsake - Elements Page';
	    $template['image_path'] = EBOR_THEME_DIRECTORY . 'style/images/landing_page.png';
	    $template['custom_class'] = 'custom_template_for_vc_custom_template';
	    $template['content']    = <<<CONTENT
            [vc_row background_style="dark"][vc_column width="1/1"][keepsake_page_header title="Elements"][/vc_column][/vc_row][vc_row][vc_column width="1/2"][keepsake_tabs title="Tabs"][keepsake_tabs_content title="This is"]Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            
            Donec sed odio dui. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas faucibus mollis interdum.
            <ul class="circled">
            	<li>Mauris lacinia dui non metus dignissim venenatis.</li>
            	<li>Etiam elit tellus, condimentum tempor lobortis non.</li>
            	<li>Aliquam pharetra vestibulum arcu, eget iaculis.</li>
            </ul>
            [/keepsake_tabs_content][keepsake_tabs_content title="Tabbed"]Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum.[/keepsake_tabs_content][keepsake_tabs_content title="Content"]Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur.
            
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.[/keepsake_tabs_content][keepsake_tabs_content title="Example"]Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
            
            Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui.[/keepsake_tabs_content][/keepsake_tabs][/vc_column][vc_column width="1/2"][keepsake_toggles title="Toggles"][keepsake_toggles_content title="100% Responsive"]Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.[/keepsake_toggles_content][keepsake_toggles_content title="Clean &amp; Professional Design"]Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.[/keepsake_toggles_content][keepsake_toggles_content title="Toggle Group Item #3"]Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.[/keepsake_toggles_content][/keepsake_toggles][/vc_column][/vc_row][vc_row][vc_column width="1/1"][vc_column_text]
            
            <hr />
            
            <h3 class="section-title">Tooltips</h3>
            Sed posuere consectetur est at lobortis. [tooltip]Morbi leo risus[/tooltip], porta ac consectetur ac, vestibulum at eros. Nullam id dolor id nibh ultricies vehicula ut id elit. malesuada magna mollis euismod. Curabitur blandit tempus porttitor. [tooltip location="bottom" title="Tooltip on Bottom"]Morbi leo risus[/tooltip] Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. id nibh ultricies vehicula ut id elit. [tooltip location="right" title="Tooltip on Right"]Morbi leo risus[/tooltip] Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. a ante venenatis dapibus posuere velit aliquet. [tooltip location="left" title="Tooltip on Left"]Morbi leo risus[/tooltip] Curabitur blandit tempus porttitor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            
            <hr />
            
            [/vc_column_text][/vc_column][/vc_row][vc_row][vc_column width="1/2"][vc_column_text]
            <h3 class="section-title">Alerts</h3>
            [/vc_column_text][keepsake_alert_block type="warning"]<strong>Warning!</strong> Best check yo self, you're not looking too good.[/keepsake_alert_block][keepsake_alert_block type="danger"]<strong>Oh snap!</strong> Change a few things up and try submitting again.[/keepsake_alert_block][keepsake_alert_block type="success"]<strong>Well done!</strong> You successfully read this important alert message.[/keepsake_alert_block][keepsake_alert_block type="info"]<strong>Heads up!</strong> This alert needs your attention, but it's not super important.[/keepsake_alert_block][/vc_column][vc_column width="1/2"][vc_column_text]
            <h3 class="section-title">Alerts With Dismiss</h3>
            [/vc_column_text][keepsake_alert_block type="warningDismiss"]<strong>Warning!</strong> Best check yo self, you're not looking too good.[/keepsake_alert_block][keepsake_alert_block type="dangerDismiss"]<strong>Oh snap!</strong> Change a few things up and try submitting again.[/keepsake_alert_block][keepsake_alert_block type="successDismiss"]<strong>Well done!</strong> You successfully read this important alert message.[/keepsake_alert_block][keepsake_alert_block type="infoDismiss"]<strong>Heads up!</strong> This alert needs your attention, but it's not super important.[/keepsake_alert_block][/vc_column][/vc_row][vc_row][vc_column width="1/1"][vc_column_text]
            
            <hr />
            
            <h3 class="section-title">Buttons</h3>
            <a class="btn btn-red" href="#">Button</a> <a class="btn btn-pink" href="#">Button</a> <a class="btn btn-purple" href="#">Button</a> <a class="btn btn-blue" href="#">Button</a> <a class="btn btn-green" href="#">Button</a> <a class="btn btn-gray" href="#">Button</a> <a class="btn btn-brown" href="#">Button</a> <a class="btn btn-yellow" href="#">Button</a> <a class="btn btn-lime" href="#">Button</a>
            <div class="divide20"></div>
            <a class="btn btn-large btn-red" href="#">Button</a> <a class="btn btn-large btn-pink" href="#">Button</a> <a class="btn btn-large btn-purple" href="#">Button</a> <a class="btn btn-large btn-blue" href="#">Button</a> <a class="btn btn-large btn-green" href="#">Button</a> <a class="btn btn-large btn-gray" href="#">Button</a> <a class="btn btn-large btn-brown" href="#">Button</a> <a class="btn btn-large btn-yellow" href="#">Button</a> <a class="btn btn-large btn-lime" href="#">Button</a>
            
            <hr />
            
            [/vc_column_text][/vc_column][/vc_row][vc_row][vc_column width="1/1"][vc_column_text]
            <h3 class="section-title">Testimonials</h3>
            [/vc_column_text][/vc_column][/vc_row][vc_row][vc_column width="1/2"][keepsake_testimonial_block title="Alison McBrian"]Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus.[/keepsake_testimonial_block][/vc_column][vc_column width="1/2"][keepsake_testimonial_block title="Jack Welch"]Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus.[/keepsake_testimonial_block][/vc_column][/vc_row][vc_row][vc_column width="1/1"][vc_column_text]
            
            <hr />
            
            [/vc_column_text][/vc_column][/vc_row][vc_row][vc_column width="1/3"][vc_column_text]
            <h3 class="section-title">Unordered List</h3>
            <ul class="circled">
            	<li>Pellentesque non diam et tortor dignissim.</li>
            	<li>Neque sit amet mauris egestas quis mattis.</li>
            	<li>Cras justo odio, dapibus ac facilisis.</li>
            	<li>Curabitur viver justo sed scelerisque.</li>
            	<li>Aenean lacinia bibendum nulla sed consectetur.</li>
            	<li>Nullam quis risus eget urna mollis ornare.</li>
            </ul>
            [/vc_column_text][/vc_column][vc_column width="1/3"][vc_column_text]
            <h3 class="section-title">Unordered List</h3>
            <ul>
            	<li>Pellentesque non diam et tortor dignissim.</li>
            	<li>Neque sit amet mauris egestas quis mattis.</li>
            	<li>Cras justo odio, dapibus ac facilisis.</li>
            	<li>Curabitur viver justo sed scelerisque.</li>
            	<li>Aenean lacinia bibendum nulla sed consectetur.</li>
            	<li>Nullam quis risus eget urna mollis ornare.</li>
            </ul>
            [/vc_column_text][/vc_column][vc_column width="1/3"][vc_column_text]
            <h3 class="section-title">Ordered List</h3>
            <ol>
            	<li>Pellentesque non diam et tortor dignissim.</li>
            	<li>Neque sit amet mauris egestas quis mattis.</li>
            	<li>Curabitur viver justo sed scelerisque.</li>
            	<li>Condimentum aenean risus malesuada tortor.</li>
            	<li>Integer posuere erat a ante venenatis dapibus.</li>
            	<li>Aenean eu leo quam. Pellentesque ornare.</li>
            </ol>
            [/vc_column_text][/vc_column][/vc_row][vc_row][vc_column width="1/1"][vc_column_text]
            
            <hr />
            
            <h3 class="section-title">Blockquote</h3>
            [blockquote author="TommusRhodus"]Pellentesque non diam et tortor dignissim bibendum. Neque sit amet mauris egestas quis mattis velit fringilla. Curabitur viver justo sed scelerisque. Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.[/blockquote]
            
            <hr />
            
            [/vc_column_text][/vc_column][/vc_row][vc_row][vc_column width="1/1"][vc_column_text]
            <h3 class="section-title">Dropcap</h3>
            [dropcap]D[/dropcap]uis non lectus sit amet est imperdiet cursus elementum vitae eros. Cras quis odio in risus euismod suscipit. Fusce viverra ligula vel justo bibendum semper. Nulla facilisi. Donec interdum, enim in dignissim lacinia, lectus nisl viverra lorem, ac pulvinar nunc ante at neque. Proin et dui eros, at aliquet est. Pellentesque consectetur lectus quis enim mollis ut convallis urna malesuada. Sed tincidunt interdum sapien vel gravida. Nulla a tellus lectus, in aliquet tellus. Donec aliquam.
            
            <hr />
            
            [/vc_column_text][/vc_column][/vc_row][vc_row][vc_column width="2/3"][keepsake_code_block title="Code Display"]
            
            <form>
            <fieldset><legend>Legend</legend><label>Label name</label>
            <input type="text" placeholder="Type something…" />
            <span class="help-block">Example block-level help text here.</span>
            <label class="checkbox">
            <input type="checkbox" /> Check me out </label>
            <button class="btn" type="submit">Submit</button></fieldset>
            </form>[/keepsake_code_block][/vc_column][vc_column width="1/3"][vc_column_text]
            <h3 class="section-title">Misc Typography</h3>
            Lorem <sup>superscript</sup> dolor <sub>subscript</sub> amet
            <em>This is emphasised text</em>
            <strong>This is strong text</strong>
            <span class="lite">This is hightlight</span> <abbr title="This is an abbr - &lt;abbr&gt;&lt;/abbr&gt;">This is an abbr</abbr>
            <del>This is deleted text</del>
            <a href="http://themes.iki-bir.com/keepsake/elements.html#">This is a link</a>[/vc_column_text][/vc_column][/vc_row]
CONTENT;
	    array_unshift($data, $template);
	    return $data;
	}
	add_filter( 'vc_load_default_templates', 'ebor_elements_template' );
}