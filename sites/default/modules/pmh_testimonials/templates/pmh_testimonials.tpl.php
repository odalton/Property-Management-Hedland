<div id="testimonials-carousel" class="owl-carousel">
  <?php
  foreach ($testimonials as $testimonial):
    print '<div class="slide">';
    print '<div class="testimonial-body"><blockquote><p>';
    print $testimonial['body'];
    print '<br><a href="'.$testimonial['field_read_more_link'].'" target="_blank" title="Read More Testimonials">Read More</a></p></blockquote>';
    print '</div>';
    print '<div class="testimonial-title">';
    print $testimonial['field_full_name'];
    print '</div>';
    print '</div>';
  endforeach;
  ?>
</div>