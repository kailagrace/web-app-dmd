<?php if(!$messages) return; ?>

<?php foreach ( $messages as $message ) : ?>
	<div class="alert alert-info"><?php echo wp_kses_post( $message ); ?></div>
<?php endforeach; ?>