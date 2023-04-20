import React from "react";
import Map from "./Map.js";
import WelcomeModal from "./WelcomeModal.js";
import ImageModal from "./ImageModal.js";
import Button from "react-bootstrap/Button";
import AboutModal from "./AboutModal";
import StaticMap from "./StaticMap.tsx";
import useWindowDimensions from "./useWindowDimensions";
import optimizedDimensions from "./optimizedDimensions";

export default function App() {
  //ImageModal state
  const [modalShow, setModalShow] = React.useState(false);
  const [modalImage, setModalImage] = React.useState("");
  const [modalDescription, setModalDescription] = React.useState("");
  const [modalTag1, setModalTag1] = React.useState("");

  //AboutModal state
  const [aboutModalShow, setAboutModalShow] = React.useState(false);

  const openImageModal = (feature) => {
    const clickFeature = feature;

    setModalShow(true);
    setModalImage(clickFeature.properties.imageUrl);
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

  const openAboutModal = () => {
    setAboutModalShow(true);
  };

  // TODO: split mapbox into its own child component

  return (
    <div>
      <StaticMap width={width} height={height}></StaticMap>
      <Map onPopupImageClick={openImageModal}></Map>
      <Button
        className="button-about position-absolute top-0 end-0 mt-2 me-2"
        variant="primary"
        onClick={openAboutModal}
      >
        About
      </Button>

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
