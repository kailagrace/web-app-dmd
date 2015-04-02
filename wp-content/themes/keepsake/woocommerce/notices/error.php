<?php if ( ! $messages ) return; ?>

<div class="alert alert-error">
	<ul>
		<?php foreach ( $messages as $message ) : ?>
			<li><?php echo wp_kses_post( $message ); ?></li>
		<?php endforeach; ?>
	</ul>
</div>