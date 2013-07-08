var map;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();

$(document).ready(function() {
  directionsDisplay = new google.maps.DirectionsRenderer();

  var latitude = parseFloat($('#place').attr('data-lat'));
  var longitude = parseFloat($('#place').attr('data-lon'));

  var mapOptions = {
    center: new google.maps.LatLng(latitude, longitude),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  
  map = new google.maps.Map(document.getElementById("map"),
    mapOptions);

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(latitude,longitude)
  });
  
  marker.setMap(map);

  google.maps.event.addListener(map, 'click', function(e) {
    calcRoute(new google.maps.LatLng(latitude, longitude),e.latLng, map);
  });

  $('#transit').click(function(e){
    e.preventDefault();
    var transitLayer = new google.maps.TransitLayer();
    transitLayer.setMap(map);
  });

});

function calcRoute(start,end,map) {
  var request = {
    origin:start,
    destination:end,
    travelMode: google.maps.DirectionsTravelMode.DRIVING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {

      directionsDisplay.setDirections(response);
      directionsDisplay.setMap(map);
    }
  });
}