import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';


export default function ImageModal (props) {
  return (
    <Modal
      {...props}
      /* size="lg" */
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
      dialogClassName='modal-90w'
    >
      <Modal.Header closeButton >
        <Modal.Title id="contained-modal-title-vcenter" className='ms-auto'>
        {props.description}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <img src={props.image} alt={props.description} style ={{height: "100%"}} />
        </Container>
        
      </Modal.Body>
      <Modal.Footer>
    <p>Tag: {props.tag1}</p>
      </Modal.Footer>
    </Modal>
  );
}

