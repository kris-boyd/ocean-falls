import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function About(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="About" centered>
      <Modal.Header closeButton>
        <Modal.Title>About this project</Modal.Title>
      </Modal.Header>
      <Modal.Body className="aboutModal-body">
        <p>
          Chris and Kathleen have been working on this for a long time etc....
        </p>

        <hr />
        <p>
          This map was created from a combination of historical sources(get
          summary from Chris). Each dot represents a photo, text, or video
          connected to that location. Created by{" "}
          <a href="http://mediumlight.com">Christopher Grabowski</a>, Kathleen
          Flaherty and Kris Boyd
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
