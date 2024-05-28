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

function fp_enqueue_script()
{
    wp_enqueue_script('main',          JS_URL . '/bundle.js',  array('jquery'), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'fp_enqueue_script');
