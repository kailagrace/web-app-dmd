<?php $additional = get_post_meta( $post->ID, '_ebor_meta_repeat_group', true ); ?>

<div class="row">

	<div class="col-sm-9">
		<?php 
			the_content(); 
			wp_link_pages();
		?>
	</div>

	<div class="col-sm-3 lp30">
		<ul class="item-details">
			<?php
				if( ebor_the_terms('portfolio_category', ', ', 'name') ){
					echo '<li><h4>'.__('Categories','keepsake').'</h4> '.ebor_the_terms('portfolio_category', ', ', 'name').'</li>';
				}
				if( $additional ){
					foreach( $additional as $index => $item ){
						echo '<li><h4>';
						if( isset ( $item['_ebor_the_additional_title'] ) )
							echo $item['_ebor_the_additional_title'];
						echo '</h4> ';
						if( isset ( $item['_ebor_the_additional_detail'] ) )
							echo $item['_ebor_the_additional_detail'];
						echo '</li>';
					}
				}
			?>
		</ul>
	</div>
	
</div>