import React from "react";
import Map from "./Map.js";
import WelcomeModal from "./WelcomeModal.js";
import ImageModal from "./ImageModal.js";
import Button from "react-bootstrap/Button";
import ResourcesModal from "./ResourcesModal.js";
import StaticMap from "./StaticMap.js";
import useWindowDimensions from "./useWindowDimensions.js";
import optimizedDimensions from "./optimizedDimensions.js";

export default function App() {
  //ImageModal state
  const [modalShow, setModalShow] = React.useState(false);
  const [modalImage, setModalImage] = React.useState("");
  const [modalDescription, setModalDescription] = React.useState("");
  const [modalTag1, setModalTag1] = React.useState("");

  //AboutModal state
  const [resourcesModalShow, setResourcesModalShow] = React.useState(false);

  const openImageModal = (feature) => {
    const clickFeature = feature;

    setModalShow(true);
    setModalImage(clickFeature.properties.fileName);
    setModalDescription(clickFeature.properties.description);
    setModalTag1(clickFeature.properties.tag1);
  };

  // get width and height of the viewport
  const { width: originalWidth, height: originalHeight } =
    useWindowDimensions();
  const { width, height } = optimizedDimensions({
    width: originalWidth,
    height: originalHeight,
  });

  const openResourcesModal = () => {
    setResourcesModalShow(true);
  };

  // TODO: split mapbox into its own child component

  return (
    <div>
      <StaticMap width={width} height={height}></StaticMap>
      <Map onPopupImageClick={openImageModal}></Map>
      <Button
        className="button-resources position-absolute top-0 end-0 mt-2 me-2"
        variant="primary"
        onClick={openResourcesModal}
      >
        Resources
      </Button>

      <WelcomeModal />
      <ImageModal
        show={modalShow}
        image={modalImage}
        description={modalDescription}
        tag1={modalTag1}
        onHide={() => setModalShow(false)}
      />
      <ResourcesModal
        show={resourcesModalShow}
        onHide={() => setResourcesModalShow(false)}
      />
    </div>
  );
}
