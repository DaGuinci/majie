<?php

ob_start();
if ( have_posts() ){
	while ( have_posts() ) {
		the_post();
		?>
			<li class="small-12 columns">
				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
					<h2><?php the_title(); ?></h2>
					<div class="content">
						<?php the_content(); ?>
					</div>
				</article>
			</li>
		<?php
	}
}
$out = ob_get_clean();
?>
<section class="container">
	<ul class="row no-bullet">
		<?= $out; ?>
	</ul>
</section>
