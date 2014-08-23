<!-- GMap for -->
<div class="map-content east">
  <div id="map-canvas-1"/></div>
  <div class="map-address">
    <?php
      $address1 = variable_get('pmh_gmap_one');
      print $address1['value'];
    ?>
  </div>
</div>


<!-- GMap for -->
<div class="map-content port">
  <div id="map-canvas-2"/></div>
  <div class="map-address">
    <?php
      $address2 = variable_get('pmh_gmap_two');
      print $address2['value'];
    ?>
  </div>
</div>