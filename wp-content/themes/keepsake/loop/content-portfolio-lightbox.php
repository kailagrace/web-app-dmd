<?php
	/**
	 * This loop is used to create items for the portfolio archives and also the homepage template.
	 * Any custom functions prefaced with ebor_ are found in /ebor_framework/theme_functions.php
	 * First let's declare $post so that we can easily grab everthing needed.
	 */
	 global $post;
	 
	 /**
	  * Next, we need to grab the featured image URL of this post, so that we can trim it to the correct size for the chosen size of this post.
	  */
	 $url = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full');
	 
	 /**
	  * Leave this portfolio item out if we didn't find a featured image.
	  */
	 if(!( $url[0] ))
	 	return false;
	 
	 $attachments = get_post_meta($post->ID, '_ebor_gallery_images', 1);
	 $the_id = esc_attr(get_the_ID());
	 $fancybody = get_the_excerpt();
	 $the_title = get_the_title();
	 
	 $one = false;
	 if ( is_array( $attachments ) ){
	 	$count = count($attachments) + 1;
	 	$one = ': 1' . __(' of ', 'keepsake') . $count;
	 }
	 
	 $videos = get_post_meta( $post->ID, '_ebor_videos', true );
	 if( is_array( $videos ) && isset( $videos[0]['_ebor_the_oembed'] ) && !( false == $videos[0]['_ebor_the_oembed'] ) && !( '' == $videos[0]['_ebor_the_oembed'] ) ){
	 	$url[0] = esc_url($videos[0]['_ebor_the_oembed']);	
	 }
?>

<div id="portfolio-<?php the_ID(); ?>" class="item current-in-view <?php echo ebor_the_terms('portfolio_category', ' ', 'slug'); ?>">
	
	<div id="title-<?php the_ID(); ?>" class="info hidden">
		<?php the_title('<h3>', $one . '</h3>'); ?>
		<div class="fancybody">
			<?php echo get_the_excerpt(); ?>
		</div>
	</div>
	
	<figure>
		<a href="<?php echo esc_url($url[0]); ?>" class="fancybox-media" data-rel="grid-portfolio" data-title-id="title-<?php echo $the_id; ?>">
			<?php 
				the_title('<div class="text-overlay"><div class="info"><span>', '</span></div></div>');
				the_post_thumbnail('grid'); 
			?>
		</a>
		<?php
			/**
			* If we found items, output the gallery.
			* $before and $after change depending on the gallery chosen.
			*/
			if ( is_array( $attachments ) ){
					$i = 1;
					foreach( $attachments as $id => $content ){
						$i++;
						$url = wp_get_attachment_image_src( $id, 'full' );
						$one = ': ' . $i . __(' of ', 'keepsake') . $count;
						echo '<a href="'. $url[0] .'" class="fancybox-media" data-rel="grid-portfolio" data-title-id="title-'. $the_id . $i .'" style="display:none;"></a>';
						?>
							<div id="title-<?php the_ID(); echo $i; ?>" class="info hidden">
								<h3><?php echo $the_title . $one; ?></h3>
								<div class="fancybody">
									<?php echo $fancybody; ?>
								</div>
							</div>
						<?php
					}
			
			}
		?>
	</figure>
	
</div>