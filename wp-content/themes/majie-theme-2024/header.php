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
        <div class="logo_part majie"></div>
        <div class="logo_part text montpellier"></div>
        <div class="logo_part text accueil"></div>
        <div class="logo_part text jeunes"></div>
        <div class="logo_part text isoles"></div>
        <div class="logo_part text etrangers"></div>
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
    <div class="header__ctas">
      <!-- <div class="cta cta_contact">
        <svg
          version="1.1"
          id="lni_lni-envelope"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 64 64"
          style="enable-background:new 0 0 64 64;"
          xml:space="preserve"
        >
          <g>
            <path d="M56,9.6H8c-3.4,0-6.3,2.8-6.3,6.3v32.4c0,3.4,2.8,6.3,6.3,6.3h48c3.4,0,6.3-2.8,6.3-6.3V15.8C62.3,12.4,59.4,9.6,56,9.6z
            M56,14.1c0.1,0,0.2,0,0.3,0L32,29.7L7.7,14.1c0.1,0,0.2,0,0.3,0H56z M56,49.9H8c-1,0-1.8-0.8-1.8-1.8V18.5l23.4,15
            c0.7,0.5,1.5,0.7,2.3,0.7c0.8,0,1.6-0.2,2.3-0.7l23.4-15v29.7C57.8,49.2,57,49.9,56,49.9z"/>
          </g>
        </svg>
        <a href="#contact_section">
          Nous contacter
        </a>
      </div> -->
      <div class="cta cta_support">
        <svg
          version="1.1"
          id="lni_lni-bricks"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 64 64"
          style="enable-background:new 0 0 64 64;"
          xml:space="preserve"
        >
          <g>
          <path d="M57,29.8h-3v-6.1c0-3.4-2.8-6.2-6.2-6.2H16.3c-3.4,0-6.2,2.8-6.2,6.2v6.1H7c-2.9,0-5.2,2.4-5.2,5.2v6.3
          c0,2.9,2.4,5.2,5.2,5.2h50c2.9,0,5.2-2.4,5.2-5.2V35C62.2,32.1,59.9,29.8,57,29.8z M49.5,23.7v6.1H34.2v-7.8h13.5
          C48.7,21.9,49.5,22.7,49.5,23.7z M39.9,34.2v7.8H24.1v-7.8H39.9z M14.5,23.7c0-1,0.8-1.8,1.8-1.8h13.5v7.8H14.5V23.7z M6.2,41.3V35
          c0-0.4,0.3-0.8,0.8-0.8h12.6v7.8H7C6.6,42.1,6.2,41.7,6.2,41.3z M57.8,41.3c0,0.4-0.3,0.8-0.8,0.8H44.4v-7.8H57
          c0.4,0,0.8,0.3,0.8,0.8V41.3z"/>
          </g>
        </svg>
        <a href="#support_section">
          Nous soutenir
        </a>
      </div>
    </div>
  </section>
