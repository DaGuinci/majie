<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Majie - <?php echo get_the_title(); ?></title>
  <?php wp_head(); ?>
</head>
<body>
  <div class="header-background">
    <section class="header">
      <div class="header__left">
        <svg class="circle" height="100"
        viewBox="0 0 60 60"
        xmlns="http://www.w3.org/2000/svg">
          <circle id="greencircle" cx="30" cy="30" r="30" fill="#7a003c" />
        </svg>
        <svg class="circle" height="100"
        viewBox="0 0 60 60"
        xmlns="http://www.w3.org/2000/svg">
          <circle id="greencircle" cx="30" cy="30" r="30" fill="#00aaa4" />
        </svg>
        <svg class="circle" height="100"
        viewBox="0 0 60 60"
        xmlns="http://www.w3.org/2000/svg">
          <circle id="greencircle" cx="30" cy="30" r="30" fill="#fff200" />
        </svg>
        <svg class="circle" height="100"
        viewBox="0 0 60 60"
        xmlns="http://www.w3.org/2000/svg">
          <circle id="greencircle" cx="30" cy="30" r="30" fill="#388528" />
        </svg>
        <div class="large__menu">
          <?php wp_nav_menu( array( 'theme_location' => 'header-menu' ) ); ?>
        </div>
      </div>
      <div class="header__logo"></div>
    </section>
    <!-- <div class="small__menu"> -->
      <div class="burger"></div>
      <div class="small__menu__content is-hidden">
        <div class="back"></div>
        <?php wp_nav_menu( array( 'theme_location' => 'header-menu' ) ); ?>
      </div>
    <!-- </div> -->
  </div>
