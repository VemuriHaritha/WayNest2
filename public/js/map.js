mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
container: 'map', // container ID
 center: [79,32], // starting position [lng, lat]
 style: 'mapbox://styles/mapbox/streets-v9', 
 zoom: 9 // starting zoom
});


// Create a new marker.
// const marker = new mapboxgl.Marker({color : "red"})
// .setLngLat([79,32]) //listing/geomertyu / coordinatre
// .setPopup(new mapboxgl.Popup({offset: 25})

// .setHTML(`<h4>${listing.title}</h4><p>Exact location provided after booking!</p>`))
// .addTo(map);