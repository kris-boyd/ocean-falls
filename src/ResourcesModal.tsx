import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function About(props: IAboutProps): JSX.Element {
  return (
    <Modal {...props} size="lg" aria-labelledby="About" centered>
      <Modal.Header closeButton>
        <Modal.Title>Resources</Modal.Title>
      </Modal.Header>
      <Modal.Body className="aboutModal-body">
      <p>Links will open in a new tab</p>
        <a
          href="https://www.facebook.com/groups/2377931937"
          target="_blank"
          rel="noreferrer"
        >
          Ocean Falls Facebook Group
        </a>
        <br></br>
        <a
          href="https://search-bcarchives.royalbcmuseum.bc.ca/informationobject/browse?topLod=0&sort=relevance&query=ocean+falls "
          target="_blank"
          rel="noreferrer"
        >
          BC Archives Ocean Falls
        </a>
        <br></br>
        <a
          href="http://www.oceanfallsmuseum.com/"
          target="_blank"
          rel="noreferrer"
        >
          Oceanfallsmuseum.com
        </a>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
