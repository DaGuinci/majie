<?php /* Template Name: Page accueil */ ?>
<?php
get_header();
$news = get_field('news');
// var_dump($news['news_content']);
$content = get_the_content();
?>
<section class="landing">
  <?php if ($news['news_active'] && $news['news_content'] > 0) { ?>
    <div class="landing__news">
      <div class="landing__news__title">
        <h2><?= $news['news_title'] ?></h2>
      </div>
      <div class="landing__news__content">
        <?= $news['news_content'] ?>
      </div>
    </div>
  <?php } ?>
</section>
<?php
get_footer();
