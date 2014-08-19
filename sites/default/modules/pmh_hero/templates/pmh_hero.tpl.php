<div id="hero-banner-carousel" class="owl-carousel">
  <?php
  foreach ($slides as $slide):
    $img_style = image_style_url('hero_banner', $slide['image']);
    $img = theme('image', array( 'path' => $img_style, ));
    print '<div class="slide">';
    print $img;
    print '</div>';
  endforeach;
  ?>
</div>