<?php 
	$custom_comment_form = array( 
		'fields' => apply_filters( 'comment_form_default_fields', array(
		    'author' => '<div class="name-field">
		    			 <label><i class="icon-user"></i></label>
		    			 <input type="text" id="author" name="author" placeholder="' . __('Name *','keepsake') . '" value="' . esc_attr( $commenter['comment_author'] ) . '" />
		    			 </div>',
		    'email'  => '<div class="email-field">
		    			 <label><i class="icon-mail-alt"></i></label>
		    			 <input name="email" type="text" id="email" placeholder="' . __('Email *','keepsake') . '" value="' . esc_attr(  $commenter['comment_author_email'] ) . '" />
		    			 </div>',
		    'url'    => '<div class="website-field">
		    			 <label><i class="icon-globe"></i></label>
		    			 <input name="url" type="text" id="url" placeholder="' . __('Website','keepsake') . '" value="' . esc_attr(  $commenter['comment_author_url'] ) . '" />
		    			 </div>') 
		),
		'comment_field' => '<div class="message-field">
							<textarea name="comment" placeholder="' . __('Enter your comment here...','keepsake') . '" id="comment" aria-required="true"></textarea>
							</div>',
		'logged_in_as' => '<p class="logged-in-as">' . sprintf( __( 'Logged in as <a href="%1$s">%2$s</a> <a href="%3$s">Log out?</a>','keepsake' ), admin_url( 'profile.php' ), $user_identity, wp_logout_url( apply_filters( 'the_permalink', get_permalink() ) ) ) . '</p>',
		'cancel_reply_link' => __( 'Cancel' , 'keepsake' ),
		'comment_notes_before' => '',
		'comment_notes_after' => '',
		'label_submit' => __( 'Submit' , 'keepsake' )
	);
?>

<div class="divide100"></div>

<div id="comments">
	<h3><?php comments_number( __('0 Comments','keepsake'), __('1 Comment','keepsake'), __('% Comments','keepsake') ); ?></h3>
	<?php 
		if( have_comments() ){
			echo '<ul id="singlecomments" class="commentlist">';
				wp_list_comments('type=comment&callback=ebor_custom_comment');
			echo '</ul>';
			paginate_comments_links();
		}
	?>
</div><!-- /#comments -->

<div class="divide100"></div>

<div class="comment-form-wrapper">
	<h3><?php echo get_option('comments_title','Would you like to share your thoughts?'); ?></h3>
	<?php 
		echo wpautop(get_option('comments_subtitle', 'Your email address will not be published. Required fields are marked *'));
		comment_form($custom_comment_form); 
	?>
</div><!-- /.comment-form-wrapper --> 