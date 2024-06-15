<?php /* Template Name: Page accueil */ ?>
<?php
get_header();
$news = get_field('news');
$who_are_we = get_field('who_are_we');
$activities = get_field('activities');
$partners = get_field('partners');
$support = get_field('support');
$contact = get_field('contact');
// var_dump($contact['form']);
$content = get_the_content();
?>

  <nav class="landing_menu">
  <?php if ($news['active'] && strlen($news['content']) > 0) { ?>
    <a href="#news_section" class="sticky_menu_entry">Actualités</a>
  <?php }; ?>
  <?php if (strlen($who_are_we['content']) > 0) { ?>
    <a href="#who_are_we_section" class="sticky_menu_entry">Qui sommes-nous ?</a>
  <?php }; ?>
  <?php if (strlen($activities['content']) > 0) { ?>
    <a href="#activities_section" class="sticky_menu_entry">Nos actions</a>
  <?php }; ?>
    <a href="#partners_section" class="sticky_menu_entry">Nos partenaires</a>
    <a href="#support_section" class="sticky_menu_entry">Nous soutenir</a>
    <a href="#contact_section" class="sticky_menu_entry">Nous contacter</a>
  </nav>
<section class="landing">
  <?php if ($news['active'] && strlen($news['content']) > 0) { ?>
    <div class="landing__news" id="news">
      <div class="landing__news__title">
        <h2 class="reveal"><?= $news['title']; ?></h2>
      </div>
      <div class="landing__news__content reveal">
        <?= $news['content']; ?>
      </div>
    </div>
  <?php }; ?>
  <?php if (strlen($who_are_we['content']) > 0) { ?>
    <div class="landing__who_are_we" id="who_are_we">
      <div class="landing__who_are_we__title">
        <h2 class="reveal"><?= $who_are_we['title'] ?></h2>
      </div>
      <div class="landing__who_are_we__content reveal">
        <?= $who_are_we['content'] ?>
      </div>
    </div>
  <?php }; ?>
  <?php if (strlen($activities['content']) > 0) { ?>
    <div class="landing__activities" id="activities">
      <div class="landing__activities__title">
        <h2 class="reveal"><?= $activities['title'] ?></h2>
      </div>
      <div class="landing__activities__content reveal">
        <?= $activities['content'] ?>
      </div>
    </div>
  <?php }; ?>
  <div class="landing__partners" id="partners">
    <div class="landing__partners__title">
    <h2 class="reveal"><?= $partners['title'] ?></h2>
    </div>
    <div class="landing__partners__work reveal">
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
    <div class="landing__partners__links reveal">
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
    <div class="landing__partners__funders reveal">
      <h3><?= $partners['funders']['title']; ?></h3>
      <div class="funders_partners">
        <?php for ($i=1; $i < sizeof($partners['funders'])-1; $i++) {
          $partner = $partners['funders']['partner_'.$i];
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
  </div>
  <div class="landing__support" id="support">
  <?php if (strlen($support['title'])>0) { ?>
    <div class="landing__support__title">
      <h2 class="reveal"><?= $support['title'] ?></h2>
    </div>
    <?php if (sizeof($support['emergency'])>1) { ?>
      <div class="landing__support__emergency reveal">
        <div class="tit">
          <h3>
            <?= $support['emergency']['title'] ?>
          </h3>
        </div>
      <?php for ($j=1; $j < sizeof($support['emergency'])-1; $j++) { ?>
        <p class="emergency">
          <?= $support['emergency']['emergency_'.$j] ?>
        </p>
      <?php }; ?>
      </div>
    <?php }; ?>
    <?php if (strlen($support['needs']['title'])>0 && strlen($support['needs']['content'])>0) { ?>
      <div class="landing__support__needs reveal">
        <div class="title">
          <h3>
            <?= $support['needs']['title']; ?>
          </h3>
        </div>
        <div class="content">
          <?= $support['needs']['content']; ?>
        </div>
      </div>
    <?php }; ?>
    <?php if (strlen($support['donations']['title'])>0 && strlen($support['donations']['content'])>0) { ?>
      <div class="landing__support__donations reveal">
        <div class="title">
          <h3>
            <?= $support['donations']['title']; ?>
          </h3>
        </div>
        <div class="content">
          <?= $support['donations']['content']; ?>
        </div>
      </div>
    <?php }; ?>
  <?php }; ?>
  </div>
  <div class="landing__contact" id="contact">
    <div class="title">
      <h2 class="reveal">Nous contacter</h2>
    </div>
    <div class="infos reveal">
      <?php foreach ($contact['informations'] as $key => $info) {
        if (strlen($info) > 0) {
          $svg_url = get_template_directory_uri().'/dist/images/'.$key.'.svg';?>
          <div class="contact_item">
            <img src="<?= $svg_url; ?>" alt="" class="icon">
            <?php if ($key == 'email') {?>
              <a href="mailto:<?= $info; ?>" class="content email"><?= $info; ?></a>
            <?php } else {?>
              <span class="content"><?= $info; ?></span>
            <?php }; ?>
          </div>
        <?php };
      }; ?>

    </div>
    <div class="form reveal">
      <?= do_shortcode('[contact-form-7 id="' .$contact['form'][0]. '" title="Contact form fr"]'); ?>
    </div>
  </div>
</section>
<?php
get_footer();
