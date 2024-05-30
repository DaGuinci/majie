<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Majie - <?php echo get_the_title(); ?></title>
  <?php wp_head(); ?>
</head>
<?php
$slider_pictures = get_field('home_slider');
?>
<body>
  <section class="header">
    <?php
      if ($slider_pictures) {
        $i = 0;
        foreach ($slider_pictures as $slider_picture => $url) {
          if ($url) {
            $trans = -100*$i."vh";
            $z = 100-$i
            ?>
            <div class="picture visible" style="
              background-image:url(<?= $url ?>);
              transform: translateY(<?= $trans ?>);
              z-index: <?= $z ?>;
              "></div>
            <?php
            $i ++;
          }
        }
      }?>
    <div class="header__logo"></div>
    <div class="header__name"></div>
  </section>
  <!-- <div class="small__menu"> -->
    <div class="burger"></div>
    <div class="small__menu__content is-hidden">
      <div class="back"></div>
      <?php // wp_nav_menu( array( 'theme_location' => 'header-menu' ) ); ?>
    </div>
  <!-- </div> -->
