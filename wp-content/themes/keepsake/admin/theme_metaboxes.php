<?php 

/**
 * Build theme metaboxes
 * Uses the cmb metaboxes class found in the ebor framework plugin
 * More details here: https://github.com/WebDevStudios/Custom-Metaboxes-and-Fields-for-WordPress
 * 
 * @since 1.0.0
 * @author tommusrhodus
 */
if(!( function_exists('ebor_custom_metaboxes') )){
	function ebor_custom_metaboxes( $meta_boxes ) {
		
		/**
		 * Setup variables
		 */
		$prefix = '_ebor_';
		$social_options = ebor_get_social_icons();
		
		/**
		 * Sidebar on/off
		 */
		$meta_boxes[] = array(
			'id' => 'post_metabox',
			'title' => __('The Post Additional Details', 'loom'),
			'object_types' => array('post'), // post type
			'context' => 'normal',
			'priority' => 'high',
			'show_names' => true, // Show field names on the left
			'fields' => array(
				array(
					'name' => __('Disable Post Sidebar','loom'),
					'desc' => __("Check to disable the sidebar on this post.", 'loom'),
					'id'   => $prefix . 'disable_sidebar',
					'type' => 'checkbox',
				),
			)
		);

		/**
		 * Portfolio Settings Metabox
		 */
		$meta_boxes[] = array(
			'id' => 'portfolio_meta_metabox',
			'title' => __('Additional Portfolio Settings', 'kubb'),
			'object_types' => array('portfolio'),
			'context' => 'normal',
			'priority' => 'high',
			'show_names' => true,
			'fields' => array(
				array(
					'name' => 'Layout For This Post',
					'id' => $prefix . 'meta_layout',
					'type' => 'select',
					'options' => array(
						array('name' => 'Content Left, Meta Right', 'value' => 'meta-right'),
						array('name' => 'Content Right, Meta Left', 'value' => 'meta-left'),
						array('name' => 'No Meta, Content Only', 'value' => 'meta-none'),
					),
					'std' => 'meta-right'
				),
				array(
				    'id'          => $prefix . 'meta_repeat_group',
				    'type'        => 'group',
				    'description' => __( 'Additional Meta Titles & Descriptions', 'finch' ),
				    'options'     => array(
				        'add_button'    => __( 'Add Another Entry', 'finch' ),
				        'remove_button' => __( 'Remove Entry', 'finch' ),
				        'sortable'      => true, // beta
				    ),
				    'fields'      => array(
						array(
							'name' => __('Additional Item Title', 'finch'),
							'desc' => __("Title of your Additional Meta", 'finch'),
							'id'   => $prefix . 'the_additional_title',
							'type' => 'textarea_code'
						),
						array(
							'name' => __('Additional Item Detail', 'finch'),
							'desc' => __("Detail of your Additional Meta", 'finch'),
							'id'   => $prefix . 'the_additional_detail',
							'type' => 'textarea_code'
						),
				    ),
				),
				array(
				    'id'          => $prefix . 'videos',
				    'type'        => 'group',
				    'description' => __( 'Videos For Video Feed Layout', 'finch' ),
				    'options'     => array(
				        'add_button'    => __( 'Add Another oEmbed', 'finch' ),
				        'remove_button' => __( 'Remove oEmbed', 'finch' ),
				        'sortable'      => true
				    ),
				    'fields' => array(
						array(
							'name' => 'oEmbed',
							'desc' => 'Enter a youtube, twitter, or instagram URL. Supports services listed at <a href="http://codex.wordpress.org/Embeds">http://codex.wordpress.org/Embeds</a>.',
							'id'   => $prefix . 'the_oembed',
							'type' => 'oembed',
						),
				    ),
				),
			)
		);
		
		/**
		 * Portfolio Items Gallery Metabox
		 */
		$meta_boxes[] = array(
			'id' => 'portfolio_metabox',
			'title' => __('Photo Gallery Settings', 'kubb'),
			'object_types' => array('portfolio'),
			'context' => 'side',
			'priority' => 'low',
			'show_names' => true,
			'fields' => array(
				array(
					'name' => 'Post Layout',
					'id' => $prefix . 'gallery_layout',
					'type' => 'select',
					'options' => array(
						array('name' => 'Gallery Below Content', 'value' => 'bottom'),
						array('name' => 'Gallery Above Content', 'value' => 'top'),
					),
					'std' => 'top'
				),
				array(
					'name' => 'Post Gallery Type',
					'id' => $prefix . 'gallery_type',
					'type' => 'select',
					'options' => array(
						array('name' => 'Image Slider', 'value' => 'slider'),
						array('name' => 'Image Feed', 'value' => 'images'),
						array('name' => 'Video Feed', 'value' => 'video')
					),
					'std' => 'slider'
				),
				array(
					'name' => 'Upload Gallery Images',
					'desc' => 'Min Height 550px, Max 1400px, Drag & Drop to Reorder',
					'id' => $prefix . 'gallery_images',
					'type' => 'file_list',
				),
			)
		);

		/**
		 * Social Icons for Team Members
		 */
		$meta_boxes[] = array(
			'id' => 'social_metabox',
			'title' => __('Team Member Details', 'finch'),
			'object_types' => array('team'), // post type
			'context' => 'normal',
			'priority' => 'high',
			'show_names' => true, // Show field names on the left
			'fields' => array(
				array(
					'name' => __('Job Title', 'finch'),
					'desc' => '(Optional) Enter a Job Title for this Team Member',
					'id'   => $prefix . 'the_job_title',
					'type' => 'text',
				),
				array(
				    'id'          => $prefix . 'team_social_icons',
				    'type'        => 'group',
				    'options'     => array(
				        'add_button'    => __( 'Add Another Icon', 'finch' ),
				        'remove_button' => __( 'Remove Icon', 'finch' ),
				        'sortable'      => true
				    ),
				    'fields' => array(
						array(
							'name' => 'Social Icon',
							'desc' => 'What icon would you like for this team members first social profile?',
							'id' => $prefix . 'social_icon',
							'type' => 'select',
							'options' => $social_options
						),
						array(
							'name' => __('URL for Social Icon', 'finch'),
							'desc' => __("Enter the URL for Social Icon 1 e.g www.google.com", 'finch'),
							'id'   => $prefix . 'social_icon_url',
							'type' => 'text_url',
						),
				    ),
				),
			)
		);
		
		/**
		 * Social Icons for Users
		 */
		$meta_boxes[] = array(
			'id' => 'social_metabox',
			'title' => __('Social Icons: Click To Add More', 'finch'),
			'object_types' => array('user'), // post type
			'context' => 'normal',
			'priority' => 'high',
			'show_names' => true, // Show field names on the left
			'fields' => array(
				array(
				    'id'          => $prefix . 'user_social_icons',
				    'type'        => 'group',
				    'options'     => array(
				        'add_button'    => __( 'Add Another Icon', 'finch' ),
				        'remove_button' => __( 'Remove Icon', 'finch' ),
				        'sortable'      => true
				    ),
				    'fields' => array(
						array(
							'name' => 'Social Icon',
							'desc' => 'What icon would you like for this team members first social profile?',
							'id' => $prefix . 'social_icon',
							'type' => 'select',
							'options' => $social_options
						),
						array(
							'name' => __('URL for Social Icon', 'finch'),
							'desc' => __("Enter the URL for Social Icon 1 e.g www.google.com", 'finch'),
							'id'   => $prefix . 'social_icon_url',
							'type' => 'text',
						),
				    ),
				),
			)
		);
		
		return $meta_boxes;
	}
	add_filter( 'cmb2_meta_boxes', 'ebor_custom_metaboxes' );
}