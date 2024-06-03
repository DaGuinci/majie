<?php

define( 'THEME_PATH' ,          get_template_directory()            );
define( 'TEMPLATE_PATH' ,       THEME_PATH .    '/templates'        );

define( 'THEME_URL' ,           get_template_directory_uri()        );
define( 'CSS_URL' ,             THEME_URL .    '/dist/styles'       );
define( 'IMAGES_URL' ,          THEME_URL .    '/dist/images'       );
define( 'JS_URL' ,              THEME_URL .    '/dist/scripts'      );
define( 'FAVICONS_URL' ,        THEME_URL .    '/dist/favicon'      );
define( 'ADMIN_IMAGES_URL' ,    IMAGES_URL .   '/admin'             );

define( 'SITE_URL' ,            get_site_url()                      );

// LOADING CORE FILES
$folders = array( 'core', 'posttypes', 'Classes', 'functions', );
foreach ($folders as $folder) {
    foreach ( glob( THEME_PATH . "/inc/$folder/*.php" ) as $file ) {
        include_once $file;
    }
}

foreach ( glob( THEME_PATH . "/inc/plugins/*/functions.php" ) as $plugin ) {
    include_once $plugin;
}


/**
 * Enqueue scripts
 */

// register webpack compiled js and css with theme
function enqueue_webpack_scripts() {

    $cssFilePath = glob( get_template_directory() . '/dist/styles/main.min.*.css' );
    $cssFileURI = get_template_directory_uri() . '/dist/styles/' . basename($cssFilePath[0]);
    wp_enqueue_style( 'main_css', $cssFileURI );

    $jsFilePath = glob( get_template_directory() . '/dist/scripts/main.min.*.js' );
    $jsFileURI = get_template_directory_uri() . '/dist/scripts/' . basename($jsFilePath[0] ?? '');
    wp_enqueue_script( 'main_js', $jsFileURI , null , null , true );

  }
  add_action( 'wp_enqueue_scripts', 'enqueue_webpack_scripts' );