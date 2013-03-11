
var redicon = "/red.png";

window.onload = function() {

	// set up Google map
	var myLatlng = new google.maps.LatLng(42.686744,-73.822852);

	var myOptions = {
		zoom: 17,
		center: myLatlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}

	var map = new google.maps.Map(document.getElementById("map"), myOptions);

  addMarker(42.6867,-73.8228,map,redicon);

}


function addMarker(lat, long, map, icon) {

	  loc = { latlong: false, hits: 0 }
		loc.latlong = new google.maps.LatLng(lat, long);

		place = loc.latlong

		marker = new google.maps.Marker({
			map:map,
			draggable: false,
			animation: google.maps.Animation.DROP,
			position: place,
		});

		if (loc.hits == 0) {
			marker.icon = icon;
			marker.shadow = "http://labs.google.com/ridefinder/images/mm_20_shadow.png";
		}
		index = loc.id;
}

