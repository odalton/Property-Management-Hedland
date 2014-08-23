/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
  Drupal.behaviors.pmh_gmaps = {
    attach: function(context, settings) {
      var module_path = Drupal.settings.pmh_gmaps.pathx;


      // Google Maps for PP.

    var contentString1 = '<div id="content">'+
      '<div id="siteNotice">'+
      '<b>Office Hours: 9:00am - 5:00pm Monday to Friday </b>'+
      '<p>3/931 Albany Hwy East Victoria Park WA 6101 Australia</p>'+
      '</div>'+
      '</div>';


    var contentString2 = '<div id="content">'+
      '<div id="siteNotice">'+
      '<b>Office Hours: (TBC) </b>'+
      '<p>2 McKay St Port Hedland WA 6721</p>' +
      '</div>'+
      '</div>';


    // Google Maps for PP.

    var east_perth   = new google.maps.LatLng(-31.988768,115.905465);

    var port_hedland = new google.maps.LatLng(-20.310259,118.577032);


    // Set cool styles from Snazzy Maps.
    var cool_styles = [
      {
        "featureType": "water",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#acbcc9"
          }
        ]
      },
      {
        "featureType": "landscape",
        "stylers": [
          {
            "color": "#f2e5d4"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c5c6c6"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e4d7c6"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#fbfaf7"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c5dac6"
          }
        ]
      },
      {
        "featureType": "administrative",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "lightness": 33
          }
        ]
      },
      {
        "featureType": "road"
      },
      {
        "featureType": "poi.park",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "lightness": 20
          }
        ]
      },
      {},
      {
        "featureType": "road",
        "stylers": [
          {
            "lightness": 20
          }
        ]
      }
    ];

    // Google Maps Init JS.
    function initialize() {
      console.log('init 1');

      var mapOptions1 = {
        center: east_perth,
        zoom: 16
      };

      var mapOptions2 = {
        center: port_hedland,
        zoom: 16
      };


      // Create map.
      var map1 = new google.maps.Map(document.getElementById("map-canvas-2"),
        mapOptions1);

      var map2 = new google.maps.Map(document.getElementById("map-canvas-1"),
        mapOptions2);

      map1.setOptions(
        {
          draggable: false,
          panControl: false,
          zoomControl: false,
          scrollwheel: false,
          scaleControl: true,
          disableDoubleClickZoom: true,
          styles: cool_styles
        });

      map2.setOptions(
        {
          draggable: false,
          panControl: false,
          zoomControl: false,
          scrollwheel: false,
          scaleControl: true,
          disableDoubleClickZoom: true,
          styles: cool_styles
        });

    // this is our gem
      google.maps.event.addDomListener(window, "resize", function() {
        var center1 = map1.getCenter();
        google.maps.event.trigger(map1, "resize");
        map1.setCenter(center1);
      });

    // this is our gem
      google.maps.event.addDomListener(window, "resize", function() {
        var center2 = map2.getCenter();
        google.maps.event.trigger(map2, "resize");
        map2.setCenter(center2);
      });



      var infowindow1 = new google.maps.InfoWindow({
        content: contentString1
      });

      var infowindow2 = new google.maps.InfoWindow({
        content: contentString2
      });


      // Define marker
      var marker1 = new google.maps.Marker({
        position: east_perth,
        map: map1,
        icon: new google.maps.MarkerImage(module_path + '/macro-map-icon.svg',
          null, null, null, new google.maps.Size(48,48)),
        title: 'Hello did you know we are based in Ozzy Park!!'
      });

      // Define marker
      var marker2 = new google.maps.Marker({
        position: port_hedland,
        map: map2,
        icon: new google.maps.MarkerImage(module_path + '/macro-map-icon.svg',
          null, null, null, new google.maps.Size(48,48)),
        title: 'Hello did you know we are based in Ozzy Park!!'
      });

      google.maps.event.addListener(marker1, 'click', function() {
        infowindow1.open(map1,marker1);
      });

      google.maps.event.addListener(marker2, 'click', function() {
        infowindow2.open(map2,marker2);
      });

    }

    google.maps.event.addDomListener(window, 'load', initialize);

    }
  };


})(jQuery, Drupal, this, this.document);