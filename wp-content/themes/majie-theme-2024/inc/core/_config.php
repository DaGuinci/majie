<?php
// register_nav_menus( array(
//     'header'    => __( 'Header main menu','firstPixel' ),
//     'footer'    => __('Footer menu','firstPixel'),
//     'engagement'    => __('Engagement menu','firstPixel')
// ) );

/**
 * Enqueue style
 */
// function my_style() {
//     $file = 'app.css';
//     wp_enqueue_style( 'style-main', CSS_URL . '/' . $file );
// }
// add_action( 'wp_enqueue_scripts',  'my_style' );

function majie_theme_support() {
  add_theme_support(
    'html5',
    array(
      'script',
      'style',
    )
  );
}

add_action( 'after_setup_theme', 'majie_theme_support' );
