import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function ImageModal (props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        The image name
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={props.image} alt="some kittens" />
          <p>some text about the image</p>
          <p>{props.image}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Start Exploring</Button>
      </Modal.Footer>
    </Modal>
  );
}

