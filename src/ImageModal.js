import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';


export default function ImageModal (props) {
  return (
    <Modal
      {...props}
    
      aria-labelledby="contained-modal-title-vcenter"
      centered
      fullscreen={true}
      dialogClassName="modal-fullscreen-xl-down modal-95w mx-auto"
      
      
      
      
    >
      <Modal.Header closeButton >
        <Modal.Title id="contained-modal-title-vcenter" className='ms-auto'>
        {props.description}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image  className="mh-100" src={props.image} alt={props.description} ></Image>
      </Modal.Body>
      <Modal.Footer>
    <p>Tag: {props.tag1}</p>
      </Modal.Footer>
    </Modal>
  );
}

