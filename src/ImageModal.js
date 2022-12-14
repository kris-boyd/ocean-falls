import React from 'react';
import Modal from 'react-bootstrap/Modal';

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
      <Modal.Body style={{background: `no-repeat center/contain url(${props.image})`}}>
      </Modal.Body>
      <Modal.Footer>
    <p>Tag: {props.tag1}</p>
      </Modal.Footer>
    </Modal>
  );
}

