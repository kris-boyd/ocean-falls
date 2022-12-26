import React, { useRef, useEffect } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import WelcomeModal from './WelcomeModal.js';
import ImageModal from './ImageModal.js';
import Button from 'react-bootstrap/Button';
import AboutModal from './AboutModal';


mapboxgl.accessToken = 'pk.eyJ1Ijoia3Jpc2JveWQiLCJhIjoiY2w2azVpcXdxMTlyMDNjbzJ5dWIxODZxaSJ9.-WDtw9QaqwiPtZyokBre6Q';



export default function App() {

const mapContainer = useRef(null);
const map = useRef(null);
const PLACES = 'of-aug-27';

// Set bounds to Ocean falls historic map only
const BOUNDS = [
  [-127.7312, 52.3416], // Southwest coordinates
  [-127.67320, 52.36770] // Northeast coordinates
  ];

//ImageModal state
const [modalShow, setModalShow] = React.useState(false);
const [modalImage, setModalImage] = React.useState("");
const [modalDescription, setModalDescription] = React.useState("");
const [modalTag1, setModalTag1] = React.useState("");

//AboutModal state
const [aboutModalShow, setAboutModalShow] = React.useState(false);

useEffect(() => {
  if (map.current) return; // initialize map only once
  map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/krisboyd/cl6leg7ea000w14mrkl03b1yn',
    center: [-127.6906, 52.3518], //starting position
    zoom: 16, //starting zoom
    maxBounds: BOUNDS // Set the map's geographical boundaries
  });

  map.current.addControl(new mapboxgl.NavigationControl({showCompass: false}),'top-left');

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
      popup.remove();
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
      `<img  src="${feature.properties.imageUrl}" style="width:200px" class="popupImage"/>
      <h3>${feature.properties.description}</h3>`
    )
    .addTo(map.current);

    
        // open a modal to show large image when the marker is clicked
    const openModal = () => {
      const clickFeature = feature;
      setModalShow(true);
      setModalImage(clickFeature.properties.imageUrl);
      setModalDescription(clickFeature.properties.description);
      setModalTag1(clickFeature.properties.tag1);
    };
    document.querySelector('img').addEventListener('click', openModal);
    });
 
// open AboutModal when about button clicked
    const openAboutModal = () => {
      setAboutModalShow(true);
    }
  document.querySelector('.button-about').addEventListener('click', openAboutModal);



});


  return (
    <div>
      <div ref={mapContainer} className="map-container">
        </div>
        <Button  className="button-about position-absolute top-0 end-0 mt-2 me-2" variant="primary">About</Button>
      
      <WelcomeModal />
      <ImageModal 
        show={modalShow}
        image={modalImage}
        description={modalDescription}
        tag1={modalTag1}
        onHide={() => setModalShow(false)}
      />
      <AboutModal 
        show={aboutModalShow}
        onHide={() => setAboutModalShow(false)}
      />
      
    </div>
  );
}