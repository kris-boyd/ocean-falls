import React, { useRef, useEffect } from 'react';
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
const [modalDescription, setModalDescription] = React.useState("");
const [modalTag1, setModalTag1] = React.useState("");

useEffect(() => {
  if (map.current) return; // initialize map only once
  map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/krisboyd/cl6leg7ea000w14mrkl03b1yn',
    center: [-127.6906, 52.3518],
    zoom: 16
  });

  const popup = new mapboxgl.Popup({
    closeOnClick: false, offset: [0, -15] });

  // Change the cursor to a pointer when the mouse is over the  layer.
  map.current.on('mouseenter', PLACES, (e) => {
  map.current.getCanvas().style.cursor = 'pointer';
  });

   //change the cursor back to default when it leaves
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

    popup.setLngLat(feature.geometry.coordinates)
    .setHTML(
      `<img  src="${feature.properties.imageUrl}" style="width:200px" />
      <h3>${feature.properties.description}</h3>`
    )
    .addTo(map.current);

    });
 

    // open a modal to show large image when the marker is clicked
  popup.on('click', PLACES, (e) => {
    const clickFeature = e.features[0];
    setModalShow(true);
    setModalImage(clickFeature.properties.imageUrl);
    setModalDescription(clickFeature.properties.description);
    setModalTag1(clickFeature.properties.tag1);
  });

});


  return (
    <div>
      <div ref={mapContainer} className="map-container" />
      <WelcomeModal />
      <ImageModal 
        show={modalShow}
        image={modalImage}
        description={modalDescription}
        tag1={modalTag1}
        /* fullscreen={true} */
        onHide={() => setModalShow(false)}
      />
      
    </div>
  );
}