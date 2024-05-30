<?php /* Template Name: Page accueil */ ?>
<?php
get_header();
$title = get_the_title();
$content = get_the_content();
$slider_pictures = get_field('home_slider');
?>
<div class="article">
  <div class="article__content">
    <div class="article__content__thumbnails">
      <?php
      if ($slider_pictures) {
        foreach ($slider_pictures as $slider_picture => $url) {
          if ($url) { ?>
            <img
              class="sliderPic"
              src="<?= $url ?>"
              alt="Photo majie"
            >
          <?php }
        }
      }?>
    </div>
    <div class="article__content__text">
      <div class="article__content__text__circles">
        <?php for( $i = 0 ; $i < 12 ; $i++ ) { ?>
          <svg class="circle" height="15"
          viewBox="0 0 15 15"
          xmlns="http://www.w3.org/2000/svg">
            <circle id="blueLittleCircle" cx="7" cy="7" r="7" fill="#0A71B4" />
          </svg>
        <?php } ?>
      </div>
      <div class="article__content__text__content">
        <h2 class="article__content__text__content__title">
          <?= $title ?>
        </h2>
        <?= $content; ?>
      </div>
    </div>
  </div>
</div>
<?php
get_footer();
