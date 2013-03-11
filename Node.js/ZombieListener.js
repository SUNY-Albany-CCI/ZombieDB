window.onload = function() {

	// set up Google map
	var myLatlng = new google.maps.LatLng(42.686744,-73.822852);
	var myOptions = {
		zoom: 17,
		center: myLatlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(document.getElementById("map"), myOptions);

}
