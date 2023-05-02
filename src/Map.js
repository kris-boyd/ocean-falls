import React, { useRef, useEffect } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1Ijoia3Jpc2JveWQiLCJhIjoiY2w2azVpcXdxMTlyMDNjbzJ5dWIxODZxaSJ9.-WDtw9QaqwiPtZyokBre6Q";
const PLACES = "of-feb-25"; // name of mapbox style layer with photo metadata

// Set bounds to Ocean falls historic map only  ##TODO adjust bounds to tighter limits
const BOUNDS = [
  [-127.7312, 52.3416], // Southwest coordinates
  [-127.6732, 52.3677], // Northeast coordinates
];

export default function Map({ onPopupImageClick }) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/krisboyd/cl6leg7ea000w14mrkl03b1yn",
      center: [-127.6906, 52.3518], //starting position
      zoom: 16, //starting zoom
      maxBounds: BOUNDS, // Set the map's geographical boundaries
      bearing: 0.85, //rotate the map slightly to appear more level
      bearingSnap: 0, // don't snap back to bearing 0 when zooming
    });

    // add zoom controls to map
    map.current.addControl(
      new mapboxgl.NavigationControl({ showCompass: false }),
      "top-left"
    );

    const popup = new mapboxgl.Popup({
      closeOnClick: false,
      offset: [0, -15],
    });

    // Change the cursor to a pointer when the mouse is over a marker on the style layer.
    map.current.on("mouseenter", PLACES, (e) => {
      map.current.getCanvas().style.cursor = "pointer";
    });

    //change the cursor back to default when it leaves
    map.current.on("mouseleave", PLACES, () => {
      map.current.getCanvas().style.cursor = "";
    });

    map.current.on("click", (event) => {
      // When the user clicks on a marker, get its information.
      const features = map.current.queryRenderedFeatures(event.point, {
        layers: [PLACES], // targeted layer
      });
      if (!features.length) {
        popup.remove();
        return;
      }
      const feature = features[0];
      console.log(feature);
      /* 
      Create a popup, specify its options 
      and properties, and add it to the map.
    */
      popup
        .setLngLat(feature.geometry.coordinates)
        .setMaxWidth("320px")
        .setHTML(
          `<p>click image to enlarge</p>
          <img src="https://res.cloudinary.com/daqq3q1oz/image/upload/t_popup_280/${feature.properties.fileName}" style="width:280px" class="popupImage"/>
      <h3>${feature.properties.description}</h3>`
        )
        .addTo(map.current);

      // open a modal to show large image when the marker is clicked
      document.querySelector(".popupImage").addEventListener("click", () => {
        onPopupImageClick(feature);
      });
    });
  }, [onPopupImageClick]);

  return <div ref={mapContainer} className="map-container"></div>;
}
