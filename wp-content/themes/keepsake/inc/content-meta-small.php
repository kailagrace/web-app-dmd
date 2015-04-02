<div class="meta">

	<span class="date">
		<?php the_time( get_option('date_format') ); ?>
	</span> 
	
	<?php if( comments_open() ) : ?> 
		<span class="comments">
			<a href="<?php comments_link(); ?>"><?php comments_number( '0','1','%' ); ?> <i class="icon-chat-1"></i></a>
		</span>
	<?php endif; ?>

</div>