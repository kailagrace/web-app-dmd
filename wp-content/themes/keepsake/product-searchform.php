<form class="searchform" method="get" id="searchform" action="<?php echo esc_url(home_url('/')); ?>">
	<label><i class="icon-search"></i></label>
	<input type="text" id="s2" name="s" value="<?php esc_attr_e('Search something','keepsake'); ?>" onfocus="this.value=''" onblur="this.value='<?php esc_attr_e('Search something','keepsake'); ?>'" />
	<input type="hidden" name="post_type" value="product" />
	<button type="submit" class="btn"><?php _e('Find','keepsake'); ?></button>
</form>