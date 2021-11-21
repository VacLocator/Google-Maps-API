function iniciarMap(){
    var coord = {lat:-12.0064972 ,lng: -77.0607334};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 15,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}