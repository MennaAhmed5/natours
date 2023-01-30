/* eslint-disable */

export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoibWVubmEtYWhtZWQiLCJhIjoiY2xiZ2hmdnpnMDIycTNwbzBteWlsZGYxZSJ9.1fX30aDNKbEUtBZEYYKZsA';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/menna-ahmed/clbgjdsrt007214rrdpr3xctt',
    scrollZoom: false
    // center: [-118.113491, 34.111745],
    // zoom: 10,
    // interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};

//mapboxgl.accessToken =
//  'pk.eyJ1IjoibWVubmEtYWhtZWQiLCJhIjoiY2xiZ2hmdnpnMDIycTNwbzBteWlsZGYxZSJ9.1fX30aDNKbEUtBZEYYKZsA';

// var map = new mapboxgl.Map({
//   container: 'map',
//   style: 'mapbox://styles/menna-ahmed/clbgjdsrt007214rrdpr3xctt',
//   scrollZoom: false
