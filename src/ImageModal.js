import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';


export default function ImageModal (props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      fullscreen={true}
      
      
    >
      <Modal.Header closeButton >
        <Modal.Title id="contained-modal-title-vcenter" className='ms-auto'>
        {props.description}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image  src={props.image} alt={props.description} style={{ display: "block", maxHeight:"100%", marginLeft: "auto", marginRight: "auto" }}></Image>
      </Modal.Body>
      <Modal.Footer>
    <p>Tag: {props.tag1}</p>
      </Modal.Footer>
    </Modal>
  );
}

