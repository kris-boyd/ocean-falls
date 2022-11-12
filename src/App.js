import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import WelcomeModal from './WelcomeModal.js'
import ImageModal from './ImageModal.js'
mapboxgl.accessToken = 'pk.eyJ1Ijoia3Jpc2JveWQiLCJhIjoiY2w2azVpcXdxMTlyMDNjbzJ5dWIxODZxaSJ9.-WDtw9QaqwiPtZyokBre6Q';


export default function App() {

const mapContainer = useRef(null);
const map = useRef(null);
const PLACES = 'of-aug-27';
const [modalShow, setModalShow] = React.useState(false);
const [modalImage, setModalImage] = React.useState("");

useEffect(() => {
  if (map.current) return; // initialize map only once
  map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/krisboyd/cl6leg7ea000w14mrkl03b1yn',
    center: [-127.6906, 52.3518],
    zoom: 16
  });

// Create a popup, but don't add it to the map yet.

const popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false,
  offset: [0, -15]
  });
   
  map.current.on('mouseenter', PLACES, (e) => {

  // Change the cursor style as a UI indicator.
  map.current.getCanvas().style.cursor = 'pointer';
   
  //only use one feature at a time
  const feature = e.features[0];
   
  // Populate the popup and set its coordinates
  // based on the feature found.
  popup.setLngLat(feature.geometry.coordinates).setHTML(`<a href="${feature.properties.imageUrl}"> <img  src="${feature.properties.imageUrl}" style="width:100px; height:100px" /></a>
  <p>${feature.properties.description}</p>
  <h3>${feature.properties.tag1}</h3>`).addTo(map.current);
  });
   
  //change the cursor back to default and remove the popup
  map.current.on('mouseleave', PLACES, () => {
  map.current.getCanvas().style.cursor = '';
  popup.remove();
  });

  map.current.on('click', PLACES, (e) => {

    const clickFeature = e.features[0];
    setModalShow(true);
    setModalImage(clickFeature.properties.imageUrl);
    console.log(clickFeature.properties.imageUrl);
  });

});


  return (
    <div>
      <div ref={mapContainer} className="map-container" />
      <WelcomeModal />
      <ImageModal 
        show={modalShow}
        image={modalImage}
        onHide={() => setModalShow(false)}
      />
      
    </div>
  );
}