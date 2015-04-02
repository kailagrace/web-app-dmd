<?php 
	global $post;
	$icons = get_post_meta( $post->ID, '_ebor_team_social_icons', true );
	$protocols = array(  'http', 'https', 'ftp', 'ftps', 'mailto', 'news', 'irc', 'gopher', 'nntp', 'feed', 'telnet', 'skype' );
?>

<?php if( is_array($icons) ) : ?>
	<ul class="social">
		<?php 
			foreach( $icons as $key => $icon ){
				if(!( isset( $icon['_ebor_social_icon_url'] ) ))
					continue;
					
				echo '<li><a href="'. esc_url($icon['_ebor_social_icon_url'], $protocols) .'" target="_blank"><i class="icon-s-'. esc_attr($icon['_ebor_social_icon']) .'"></i></a></li>';
			}
		?>
	</ul>
<?php endif;