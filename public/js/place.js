var map;

$(document).ready(function() {

  var latitude = $('.container').attr('data-lat');
  var longitude = $('.container').attr('data-lon');

  function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(latitude, longitude),
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("map"),
            mapOptions);

        var marker = new google.maps.Marker({position: new google.maps.LatLng(latitude,longitude)});
        marker.setMap(map);
      }

  google.maps.event.addDomListener(window, 'load', initialize);

});