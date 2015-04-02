<?php 

if(!( function_exists('ebor_egf_force_styles') )){ 
	function ebor_egf_force_styles( $force_styles ) {
	    return true;
	}
	add_filter( 'tt_font_force_styles', 'ebor_egf_force_styles' );
}

/**
 * Add a clearfix to the end of the_content()
 */
if(!( function_exists('ebor_add_clearfix') )){ 
	function ebor_add_clearfix( $content ) { 
		if( is_single() )
	   		$content = $content .= '<div class="clearfix"></div>';
	    return $content;
	}
	add_filter( 'the_content', 'ebor_add_clearfix' ); 
}

if(!( function_exists('ebor_excerpt_more') )){
	function ebor_excerpt_more( $more ) {
		return '...';
	}
	add_filter('excerpt_more', 'ebor_excerpt_more');
}

if(!( function_exists('ebor_excerpt_length') )){
	function ebor_excerpt_length( $length ) {
		return 21;
	}
	add_filter( 'excerpt_length', 'ebor_excerpt_length', 999 );
}

/**
 * Remove leading whitespace from the_excerpt
 */
if(!( function_exists('ebor_ltrim_excerpt') )){
	function ebor_ltrim_excerpt( $excerpt ) {
	    return preg_replace( '~^(\s*(?:&nbsp;)?)*~i', '', $excerpt );
	}
	add_filter( 'get_the_excerpt', 'ebor_ltrim_excerpt' );
}

/**
 * Filter the tag cloud appearance to match Tucson styling
 */
if(!( function_exists('ebor_tag_cloud') )){
	function ebor_tag_cloud($tag_string){
		$tag_string = preg_replace("/style='font-size:.+pt;'/", '', $tag_string);
		return $tag_string;
	}
	add_filter('wp_generate_tag_cloud', 'ebor_tag_cloud',10,3);
}

/**
 * Add additional settings to gallery shortcode
 */
if(!( function_exists('ebor_add_gallery_settings') )){ 
	function ebor_add_gallery_settings(){
	?>
	
		<script type="text/html" id="tmpl-keepsake-gallery-setting">
			<h3>Keepsake Theme Gallery Settings</h3>
			<label class="setting">
				<span><?php _e('Gallery Layout', 'keepsake'); ?></span>
				<select data-setting="layout">
					<option value="default">Default Layout</option>
					<option value="slider">Keepsake Slider</option>        
					<option value="lightbox">Keepsake Lightbox Gallery</option>        
					<option value="feed">Keepsake Gallery Feed</option>  
				</select>
			</label>
		</script>
	
		<script>
			jQuery(document).ready(function(){
				_.extend(wp.media.gallery.defaults, { layout: 'default' });
				
				wp.media.view.Settings.Gallery = wp.media.view.Settings.Gallery.extend({
					template: function(view){
					  return wp.media.template('gallery-settings')(view)
					       + wp.media.template('keepsake-gallery-setting')(view);
					}
				});
			});
		</script>
	  
	<?php
	}
	add_action('print_media_templates', 'ebor_add_gallery_settings');
}


/**
 * Custom gallery shortcode
 *
 * Filters the standard WordPress gallery shortcode.
 *
 * @since 1.0.0
 */
if(!( function_exists('ebor_post_gallery') )){
	function ebor_post_gallery( $output, $attr) {
		
		global $post, $wp_locale;
	
	    static $instance = 0;
	    $instance++;
	
	    // We're trusting author input, so let's at least make sure it looks like a valid orderby statement
	    if ( isset( $attr['orderby'] ) ) {
	        $attr['orderby'] = sanitize_sql_orderby( $attr['orderby'] );
	        if ( !$attr['orderby'] )
	            unset( $attr['orderby'] );
	    }
	
	    extract(shortcode_atts(array(
	        'order'      => 'ASC',
	        'orderby'    => 'menu_order ID',
	        'id'         => $post->ID,
	        'itemtag'    => 'div',
	        'icontag'    => 'dt',
	        'captiontag' => 'dd',
	        'columns'    => 3,
	        'size'       => 'large',
	        'include'    => '',
	        'exclude'    => '',
	        'layout'     => ''
	    ), $attr));
	
	    $id = intval($id);
	    if ( 'RAND' == $order )
	        $orderby = 'none';
	
	    if ( !empty($include) ) {
	        $include = preg_replace( '/[^0-9,]+/', '', $include );
	        $_attachments = get_posts( array('include' => $include, 'post_status' => 'inherit', 'post_type' => 'attachment', 'post_mime_type' => 'image', 'order' => $order, 'orderby' => $orderby) );
	
	        $attachments = array();
	        foreach ( $_attachments as $key => $val ) {
	            $attachments[$val->ID] = $_attachments[$key];
	        }
	    } elseif ( !empty($exclude) ) {
	        $exclude = preg_replace( '/[^0-9,]+/', '', $exclude );
	        $attachments = get_children( array('post_parent' => $id, 'exclude' => $exclude, 'post_status' => 'inherit', 'post_type' => 'attachment', 'post_mime_type' => 'image', 'order' => $order, 'orderby' => $orderby) );
	    } else {
	        $attachments = get_children( array('post_parent' => $id, 'post_status' => 'inherit', 'post_type' => 'attachment', 'post_mime_type' => 'image', 'order' => $order, 'orderby' => $orderby) );
	    }
	
	    if ( empty($attachments) )
	        return '';
	
	    if ( is_feed() ) {
	        $output = "\n";
	        foreach ( $attachments as $att_id => $attachment )
	            $output .= wp_get_attachment_link($att_id, $size, true) . "\n";
	        return $output;
	    }
	    
	    /**
	     * Return Lightbox Layout
	     */
	    if( $layout == 'lightbox' ){
		    if( $columns == 1 ){
		    	$columns = 12;
		    } elseif( $columns == 2 ){
		    	$columns = 6;
		    } elseif( $columns == 3 ){
		    	$columns = 4;
		    } elseif( $columns == 4 ){
		    	$columns = 3;
		    } elseif( $columns == 5 || $columns == 6 ){
		    	$columns = 2;
		    } else {
		    	$columns = 1;
		    }
		
		    $unique = wp_rand(0,10000);
		    
		    $output = "<div class='row ebor-blog-gallery' id='gallery" . $unique ."'>";
		
		    foreach ( $attachments as $id => $attachment ) {
		        $link = isset($attr['link']) && 'file' == $attr['link'] ? wp_get_attachment_url($id, 'full', false, false) : wp_get_attachment_url($id, 'full', true, false);
		
		        $output .= "<{$itemtag} class='item col-sm-$columns'>";
		        
		        $output .= '<figure>
		        				<a href="'. $link .'" class="fancybox-media" data-rel="portfolio">
		        					<div class="text-overlay">
		          						<div class="info"><span>'. get_option('blog_view_larger','View Larger') .'</span></div>
		        					</div>
		        					' . wp_get_attachment_image($id, $size) . '
		        				</a>
		        			</figure>';
		        
		        $output .= "</{$itemtag}>";
		    }
		    
		    $output .= '
		    <script type="text/javascript">jQuery(window).load(function () {
		        var $container = jQuery("#gallery'. $unique .'");
		            $container.isotope({
		                itemSelector: ".item"
		            });
		    
		        jQuery(window).on("resize", function () {
		            jQuery("#gallery'. $unique .'").isotope("layout")
		        });
		    });
		    </script>';
		
		    $output .= "</div>\n";
		    return $output;
	    }
	    
	    /**
	     * Return Slider Layout
	     */
	    if( $layout == 'slider' ){
	    	$output = '<div class="slider-pro blog-slider"><div class="sp-slides">';
	    		foreach ( $attachments as $id => $attachment ) {
	    			$image = wp_get_attachment_image_src($id, 'large');
	    			if(!( isset($image[0]) ))
	    				$image[0] = false;
	    		    $output .= '<div class="sp-slide"><img class="sp-image" src="'. EBOR_THEME_DIRECTORY .'style/images/blank.gif" data-src="'. esc_url($image[0]) .'" alt="'. get_the_title() .'" /></div>';
	    		} 
	    	$output .= '</div></div>';
	    	return $output;
	    }
	    
	    /**
	     * Return Feed Layout
	     */
	    if( $layout == 'feed' ){
	    	$i = 0;
	    	foreach ( $attachments as $id => $attachment ) {
	    		$details = get_post($id);
	    		$i++;
	    		if(!( $i % 2 == 0 )){
					$output .= '<div class="row">
									<div class="col-sm-8">
										<figure>
											' . wp_get_attachment_image($id, 'full') . '
										</figure>
									</div>
									<div class="col-sm-4">
										<h3>'. $details->post_title .'</h3>
										'. wpautop(do_shortcode(htmlspecialchars_decode($details->post_content))).'
									</div>
								</div>
								<div class="divide80"></div>';
	    		} else {
	    			$output .= '<div class="row">
	    							<div class="col-sm-4">
	    								<h3>'. $details->post_title .'</h3>
	    								'. wpautop(do_shortcode(htmlspecialchars_decode($details->post_content))).'
	    							</div>
	    							<div class="col-sm-8">
	    								<figure>
	    									' . wp_get_attachment_image($id, 'full') . '
	    								</figure>
	    							</div>
	    						</div>
	    						<div class="divide80"></div>';
	    		}
	    	}
	    	return $output;
	    }
	    
	}
	add_filter( 'post_gallery', 'ebor_post_gallery', 10, 2 );
}