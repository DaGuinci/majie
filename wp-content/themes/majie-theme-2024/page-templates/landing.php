<?php /* Template Name: Page accueil */ ?>
<?php
get_header();
$news = get_field('news');
var_dump($news);
$content = get_the_content();
?>
<section class="landing">
  <div class="landing__who_are_we">
  </div>
</section>
<?php
get_footer();
