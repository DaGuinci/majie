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
    <div class="header__logo">
      <div class="logo_container">
      <?php include("dist/images/majie-logo.svg"); ?>
      </div>
    </div>
    <?php
    if ($slider_pictures) { ?>
      <div class="header__slider">
        <?php $i = 0;
        foreach ($slider_pictures as $slider_picture => $url) {
          if ($url) {
            $trans = -100*($i+1)."vh";
            $z = 100-$i;
            ?>
            <div class="picture" style="
            background-image:url(<?= $url ?>);
            transform: translateY(<?= $trans ?>);
            z-index: <?= $z ?>;
            ">
            </div>
            <?php
            $i ++;
          }
        } ?>
      </div>
    <?php } ?>
  </section>