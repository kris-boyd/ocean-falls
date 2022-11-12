import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function ImageModal (props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="image modal"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        {props.description}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={props.image} alt={props.description} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Start Exploring</Button>
      </Modal.Footer>
    </Modal>
  );
}

