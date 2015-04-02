<?php $protocols = array(  'http', 'https', 'ftp', 'ftps', 'mailto', 'news', 'irc', 'gopher', 'nntp', 'feed', 'telnet', 'skype' ); ?>

<footer class="footer black-wrapper">
	
	<?php if( is_active_sidebar('footer1') ) : ?>
		<div class="container inner footer-row">
		  <div class="row">
		  	
		  	<?php 
		  		/**
		  		 * Get footer widgets depending on active columns
		  		 */
		  		get_template_part('inc/content','footer-widgets'); 
		  	?>
		    
		  </div><!-- /.row --> 
		</div><!-- .container -->
	<?php endif; ?>
	
	<div class="container inner text-center subfooter">
	
		<div class="copyright">
			<?php echo wpautop(htmlspecialchars_decode(get_option('copyright', 'Configure this message in "appearance" => "customize"'))); ?>
		</div>
		<div class="divide20"></div>
		
		<ul class="social">
			<?php
				for( $i = 1; $i < 7; $i++ ){
					if( get_option("footer_social_url_$i") ) {
						echo '<li>
							      <a href="' . esc_url(get_option("footer_social_url_$i"), $protocols) . '" target="_blank">
								      <i class="icon-s-' . get_option("footer_social_icon_$i") . '"></i>
							      </a>
							  </li>';
					}
				} 
			?>
		</ul>
	
	</div>
	
</footer>

</div>

<?php wp_footer(); ?>
</body>
</html>