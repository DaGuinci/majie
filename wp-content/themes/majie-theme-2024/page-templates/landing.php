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

<div class="ctas">
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
    <a href="#support_section">
      <svg
        version="1.1"
        id="lni_lni-revenue"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 64 64"
        xml:space="preserve"
      >
      <g>
        <path d="M61.9,44.8c-1.1-3.4-4.7-5.3-8.1-4.4l-12.1,2.9c-0.3-2.9-2.6-5.3-5.8-5.8l-12.8,0c-1-1.5-2.6-2.5-4.6-2.5H8
          c-3.4,0-6.3,2.8-6.3,6.3v12.4c0,3.4,2.8,6.3,6.3,6.3h10.5c1.5,0,3-0.6,4-1.7c0.2-0.2,0.3-0.4,0.5-0.6c2.9,1.4,6,2.2,9.1,2.2
          c1.9,0,3.8-0.3,5.6-0.8L53,54.5l0,0c0,0,0,0,0,0l4.3-1.3c1.7-0.5,3.2-1.6,4.1-3.2C62.3,48.5,62.5,46.6,61.9,44.8z M19.3,54.9
          c-0.2,0.2-0.5,0.3-0.8,0.3H8c-1,0-1.8-0.8-1.8-1.8V41.1c0-1,0.8-1.8,1.8-1.8h10.7c0.5,0,0.9,0.4,0.9,0.9l0,14
          C19.6,54.6,19.4,54.8,19.3,54.9z M57.5,47.9c-0.3,0.5-0.7,0.9-1.3,1l-4.4,1.3v0l-15.2,4.3c-3.9,1.1-8,0.7-11.6-1.1l-0.9-0.5v-11
          h11.5c1.1,0.2,1.8,1,1.8,1.9v0.5L34,45.1c-1.2,0.3-2,1.5-1.7,2.7c0.3,1.2,1.5,2,2.7,1.7L55,44.7c1.1-0.3,2.3,0.3,2.7,1.4
          C57.8,46.7,57.8,47.4,57.5,47.9z"/>
        <path d="M47.3,21.5h5.1c1.5,0,2.8,1.3,2.8,2.8s-1.3,2.8-2.8,2.8h-7.7c-1.2,0-2.3,1-2.3,2.3s1,2.3,2.3,2.3h2.8V32
          c0,1.2,1,2.3,2.3,2.3s2.3-1,2.3-2.3v-0.3h0.3c4,0,7.3-3.3,7.3-7.3c0-4-3.3-7.3-7.3-7.3h-5.1c-1.5,0-2.8-1.3-2.8-2.8
          s1.3-2.8,2.8-2.8h7.6c1.2,0,2.3-1,2.3-2.3s-1-2.3-2.3-2.3h-2.8V6.5c0-1.2-1-2.3-2.3-2.3s-2.3,1-2.3,2.3v0.3h-0.3
          c-4,0-7.3,3.3-7.3,7.3C40,18.2,43.3,21.5,47.3,21.5z"/>
      </g>
      </svg>
      Nous soutenir
    </a>
  </div>
</div>
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
              <a class="link" href="<?= $link['web'] ?>" target="_blank">
              <?php if ($link['logo']) { ?>
              <img class="link__logo" src="<?= $link['logo'] ?>" alt="logo">
              <?php }; ?>
                <p class="link__name"><?= $link['name']; ?></p>
              </a>
              <?php if (strlen($link['excerpt'])>0) { ?>
                <p class="link__excerpt">
                  <?= $link['excerpt'] ?>
                </p>
              <?php } ?>
            </div>
          <?php }; ?>
        <?php }; ?>
      </div>
    </div>
    <div class="landing__partners__find_us reveal">
      <h3><?= $partners['find_us']['title']; ?></h3>
      <div class="links">
        <?php for ($i=1; $i < sizeof($partners['find_us'])-1; $i++) {
          $link = $partners['find_us']['link_'.$i];
          if ($link['web']) { ?>
            <div class="link">
              <a class="link" href="<?= $link['web'] ?>" target="_blank">
              <?php if ($link['logo']) { ?>
              <img class="link__logo" src="<?= $link['logo'] ?>" alt="logo">
              <?php }; ?>
                <p class="link__name"><?= $link['name']; ?></p>
              </a>
              <?php if (strlen($link['excerpt'])>0) { ?>
                <p class="link__excerpt">
                  <?= $link['excerpt'] ?>
                </p>
              <?php } ?>
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
      <div class="add_text">
        <?= $partners['funders']['text'] ?>
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
        $svg_url = get_template_directory_uri().'/dist/images/'.$key.'.svg';
        if ($key == 'address') { ?>
          <div class="contact_item">
            <img src="<?= $svg_url; ?>" alt="" class="icon">
            <div class="content">
              <?php foreach ($info as $value) { ?>
                <p><?= $value; ?></p>
              <?php } ?>
            </div>
          </div>
        <?php } else if (strlen($info) > 0) { ?>
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
