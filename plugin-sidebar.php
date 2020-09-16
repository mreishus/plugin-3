<?php

/*
Plugin Name: Sidebar plugin
*/

function sidebar_plugin_register()
{
    wp_register_script(
        'plugin-sidebar-js',
        plugins_url('plugin-sidebar.js', __FILE__),
        array( 'wp-plugins', 'wp-edit-post', 'wp-element' )
    );
}
add_action('init', 'sidebar_plugin_register');

function sidebar_plugin_script_enqueue()
{
    wp_enqueue_script('plugin-sidebar-js');
}
add_action('enqueue_block_editor_assets', 'sidebar_plugin_script_enqueue');
