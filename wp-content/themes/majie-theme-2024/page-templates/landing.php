<?php /* Template Name: Page accueil */ ?>
<?php
get_header();
$news = get_field('news');
$who_are_we = get_field('who_are_we');
$activities = get_field('activities');
$partners = get_field('partners');
// var_dump($partners['work']);
$content = get_the_content();
?>
<section class="landing">
  <?php if ($news['active'] && strlen($news['content']) > 0) { ?>
    <div class="landing__news">
      <div class="landing__news__title">
        <h2><?= $news['title']; ?></h2>
      </div>
      <div class="landing__news__content">
        <?= $news['content']; ?>
      </div>
    </div>
  <?php }; ?>
  <?php if (strlen($who_are_we['content']) > 0) { ?>
    <div class="landing__who_are_we">
      <div class="landing__who_are_we__title">
        <h2><?= $who_are_we['title'] ?></h2>
      </div>
      <div class="landing__who_are_we__content">
        <?= $who_are_we['content'] ?>
      </div>
    </div>
  <?php }; ?>
  <?php if (strlen($activities['content']) > 0) { ?>
    <div class="landing__activities">
      <div class="landing__activities__title">
        <h2><?= $activities['title'] ?></h2>
      </div>
      <div class="landing__activities__content">
        <?= $activities['content'] ?>
      </div>
    </div>
  <?php }; ?>
  <div class="landing__partners">
    <div class="landing__partners__title">
    <h2><?= $partners['title'] ?></h2>
    </div>
    <div class="landing__partners__work">
      <h3><?= $partners['work']['title']; ?></h3>
      <div class="work_partners">
        <?php for ($i=1; $i < sizeof($partners['work'])-1; $i++) {
          $partner = $partners['work']['partner_'.$i];
          if ($partner['name']) {
            if ($partner['web']) { ?>
              <a class="partner" href="<?= $partner['web'] ?>" target="_blank">
                <?php if ($partner['logo']) { ?>
                <img class="partner__logo" src="<?= $partner['logo'] ?>" alt="logo">
                <?php }; ?>
                <p class="partner__name"><?= $partner['name']; ?></p>
              </a>
            <?php } else { ; ?>
              <div class="partner">
              <?php if ($partner['logo']) { ?>
                <img class="partner__logo" src="<?= $partner['logo'] ?>" alt="logo">
                <?php }; ?>
                <p class="partner__name"><?= $partner['name']; ?></p>
              </div>
            <?php }; ?>
          <?php }; ?>
        <?php }; ?>
      </div>
    </div>
    <div class="landing__partners__links">
      <h3><?= $partners['links']['title']; ?></h3>
      <div class="links">
        <?php for ($i=1; $i < sizeof($partners['links'])-1; $i++) {
          $link = $partners['links']['link_'.$i];
          if ($link['web']) { ?>
            <div class="link">
              <?php if ($link['logo']) { ?>
              <img class="link__logo" src="<?= $link['logo'] ?>" alt="logo">
              <?php }; ?>
              <a class="link" href="<?= $link['web'] ?>" target="_blank">
                <p class="link__name"><?= $link['name']; ?></p>
              </a>
            </div>
          <?php }; ?>
        <?php }; ?>
      </div>
    </div>
  </div>
</section>
<?php
get_footer();
