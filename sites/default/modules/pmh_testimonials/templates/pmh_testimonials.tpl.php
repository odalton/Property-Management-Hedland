<div id="testimonials-carousel" class="owl-carousel">
  <?php
  foreach ($testimonials as $testimonial):
    print '<div class="slide">';
    print '<div class="testimonial-body"><blockquote>';
    print $testimonial['body'];
    print '</blockquote></div>';
    print '<div class="testimonial-title">';
    print $testimonial['field_full_name'];
    print '</div>';
    print '</div>';
  endforeach;
  ?>
</div>