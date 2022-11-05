import React, { useRef, useEffect } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import WelcomeModal from './WelcomeModal.js'
mapboxgl.accessToken = 'pk.eyJ1Ijoia3Jpc2JveWQiLCJhIjoiY2w2azVpcXdxMTlyMDNjbzJ5dWIxODZxaSJ9.-WDtw9QaqwiPtZyokBre6Q';


export default function App() {

const mapContainer = useRef(null);
const map = useRef(null);
const PLACES = 'of-aug-27';


useEffect(() => {
  if (map.current) return; // initialize map only once
  map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/krisboyd/cl6leg7ea000w14mrkl03b1yn',
    center: [-127.6906, 52.3518],
    zoom: 16
  });

  
     // Change the cursor to a pointer when the mouse is over the  layer.
  map.current.on('mouseenter', PLACES, () => {
  map.current.getCanvas().style.cursor = 'pointer';
  });
    
  // Change it back to a pointer when it leaves.
  map.current.on('mouseleave', PLACES, () => {
  map.current.getCanvas().style.cursor = '';
  });

  map.current.on('click', (event) => {
    // When the user clicks on a marker, get its information.
    const features = map.current.queryRenderedFeatures(event.point, {
      layers: [PLACES] // targeted layer
      
    });
    if (!features.length) {
      return;
    }
    const feature = features[0];
    console.log(feature)
    /* 
      Create a popup, specify its options 
      and properties, and add it to the map.
    */
    const popup = new mapboxgl.Popup({ offset: [0, -15] });

    popup.setLngLat(feature.geometry.coordinates)
    .setHTML(
      `<a href="${feature.properties.imageUrl}"> <img  src="${feature.properties.imageUrl}" style="width:100px; height:100px" /></a>
      <p>${feature.properties.description}</p>
      <h3>${feature.properties.tag1}</h3>`
    )
    .addTo(map.current);
      
    });


});


  return (
    <div>
      <div ref={mapContainer} className="map-container" />
      <WelcomeModal />
    </div>
  );
}