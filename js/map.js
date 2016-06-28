var map;
 
function initializeMap() {
    var latlng = new google.maps.LatLng(-22.8507972,-47.2335306);
 
    var options = {
        zoom: 15,
        center: latlng,
		draggable: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    map = new google.maps.Map(document.getElementById("map"), options);

	var marker = new google.maps.Marker({
        position: new google.maps.LatLng(-22.8507972,-47.2313419),
        title: "IFSP - CAMPUS HORTOLÂNDIA",
        map: map
    });
}
 
initializeMap();