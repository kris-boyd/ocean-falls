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
      contentClassName='container text-center'
      dialogClassName='container text-center'
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter-center" className='justify-content-center'>
        {props.description}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={props.image} alt={props.description} height="100%"/>
      </Modal.Body>
      <Modal.Footer>
    
      </Modal.Footer>
    </Modal>
  );
}

