
mapboxgl.accessToken = 'pk.eyJ1Ijoic2luZS1hbGlzIiwiYSI6ImNraHYxamh4MTEydm8ycnBpamlxeXc3ZmUifQ.VaDR_QSf9xan1ksiBSNejA';

var options = {
	enableHighAccuracy: true
};

function successLocation(position) {
	setupMap([position.coords.longitude, position.coords.latitude])
}
function errorLocation(err) {
	console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, options);

function setupMap(center) {

	var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/dark-v10',
		center: [17.1, 48.1],
		zoom: 4
	});

	map.addControl(
		new MapboxGeocoder({
			accessToken: mapboxgl.accessToken,
			mapboxgl: mapboxgl
		})
	);

	const nav = new mapboxgl.NavigationControl()
	map.addControl(nav)

	var directions = new MapboxDirections({
		accessToken: mapboxgl.accessToken,
		unit: 'metric',
  		profile: 'mapbox/driving'
	});
	map.addControl(directions, 'top-left');

	var language = new MapboxLanguage({
		accessToken: mapboxgl.accessToken
	});
	map.addControl(language);
}













