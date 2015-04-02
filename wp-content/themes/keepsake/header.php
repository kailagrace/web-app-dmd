<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<title><?php wp_title('| ', true, 'right'); ?></title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
	<?php wp_head(); ?>
</head>

<body <?php body_class('full-layout'); ?>>

<?php 
	get_template_part('inc/content','preloader');
	
	$default = get_option('custom_logo', EBOR_THEME_DIRECTORY . 'style/images/logo.png');
	$default_retina = get_option('custom_logo_retina', EBOR_THEME_DIRECTORY . 'style/images/logo@2x.png');
?>

<div class="body-wrapper">

<div class="navbar default">
	<div class="navbar-header">
		<div class="container">
		
			<div class="basic-wrapper"> 
				<a class="btn responsive-menu pull-right" data-toggle="collapse" data-target=".navbar-collapse"><i></i></a>
				<div class="navbar-brand">
					<a href="<?php echo esc_url(home_url('/')); ?>">
						<img 
							src="<?php echo esc_url($default); ?>" 
							alt="<?php echo esc_attr(get_option('custom_logo_alt_text')); ?>" 
							data-src="<?php echo esc_url($default); ?>" 
							data-ret="<?php echo esc_url($default_retina); ?>" 
							class="retina" 
						/>
					</a>
				</div>
			</div>
			
			<nav class="collapse navbar-collapse pull-right">
				<?php
					if ( has_nav_menu( 'primary' ) ){
					    wp_nav_menu( 
					    	array(
						        'theme_location'    => 'primary',
						        'depth'             => 3,
						        'container'         => false,
						        'container_class'   => false,
						        'menu_class'        => 'nav navbar-nav',
						        'menu_id'           => 'menu-standard-navigation',
						        'fallback_cb'       => 'wp_bootstrap_navwalker::fallback',
						        'walker'            => new ebor_bootstrap_navwalker()
					        )
					    );
						    
					} else {
						echo '<ul class="nav navbar-nav"><li><a href="'. admin_url('nav-menus.php') .'">Set up a navigation menu now</a></li></ul>';
					}
				?>
			</nav>
		
		</div>
	</div>
</div>
<div class="offset"></div>