<?php
global $post, $product, $woocommerce;

$attachment_ids = $product->get_gallery_attachment_ids();

if ( $attachment_ids ) {
	?>
	<div class="thumbnails"><?php

		$loop = 0;
		$columns = apply_filters( 'woocommerce_product_thumbnails_columns', 3 );

		foreach ( $attachment_ids as $attachment_id ) {

			$classes = array( 'zoom' );

			if ( $loop == 0 || $loop % $columns == 0 )
				$classes[] = 'first';

			if ( ( $loop + 1 ) % $columns == 0 )
				$classes[] = 'last';

			$image_link = wp_get_attachment_url( $attachment_id );

			if ( ! $image_link )
				continue;
			
			$details = get_option('shop_thumbnail_image_size');
			$url = wp_get_attachment_image_src( $attachment_id, 'full');
			$resized_image = aq_resize($url[0], $details['width'], $details['height'], $details['crop']);
			
			if(!( $resized_image ))
				$resized_image = $url[0];
				
			$image = '<img src="'.$resized_image.'" alt="'. get_the_title() .'" />';
			$image_class = esc_attr( implode( ' ', $classes ) );
			$image_title = esc_attr( get_the_title( $attachment_id ) );

			echo apply_filters( 'woocommerce_single_product_image_thumbnail_html', sprintf( '<a href="%s" class="%s fancybox-media"  rel="'.get_the_ID().'">%s</a>', $image_link, $image_class, $image ), $attachment_id, $post->ID, $image_class );

			$loop++;
		}

	?></div>
	<?php
}