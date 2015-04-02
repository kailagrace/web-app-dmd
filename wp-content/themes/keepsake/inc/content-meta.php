<div class="meta">

	<span class="date">
		<?php the_time( get_option('date_format') ); ?>
	</span> 
	
	<?php if( has_category() ) : ?>
		<span class="categories">
			<?php the_category(', '); ?>
		</span>
	<?php endif; ?>
	
	<?php if( comments_open() ) : ?> 
		<span class="comments">
			<a href="<?php comments_link(); ?>"><?php comments_number( __('0 Comments','keepsake'), __('1 Comment','keepsake'), __('% Comments','keepsake') ); ?> <i class="icon-chat-1"></i></a>
		</span>
	<?php endif; ?>

</div>