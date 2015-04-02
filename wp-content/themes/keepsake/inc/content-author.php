<?php 
	global $post;
	$icons = get_user_meta( $post->post_author, '_ebor_user_social_icons', true ); 
	$protocols = array(  'http', 'https', 'ftp', 'ftps', 'mailto', 'news', 'irc', 'gopher', 'nntp', 'feed', 'telnet', 'skype' );
?>

<div class="about-author dark-wrapper">

	<div class="author-image">
		<?php echo get_avatar( get_the_author_meta('email'), 120 ); ?>
	</div>
	
	<div class="author-details">
		<h3><?php echo get_option('author_details_title','About the author'); ?></h3>
		<?php 
			echo sprintf(wpautop( '<span class="fn">%s</span>: %s' ), get_the_author(), get_the_author_meta('description')); 
			
			if( is_array($icons) ){
				echo '<ul class="social">';
				foreach( $icons as $key => $icon ){
					if(!( isset( $icon['_ebor_social_icon_url'] ) ))
						continue;
						
					echo '<li><a href="'. esc_url($icon['_ebor_social_icon_url'], $protocols) .'"><i class="icon-s-'. $icon['_ebor_social_icon'] .'"></i></a></li>';
				}
				echo '</ul>';
			}
		?>
	</div>
	
	<div class="clearfix"></div>

</div>