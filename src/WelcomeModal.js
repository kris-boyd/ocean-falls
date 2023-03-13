import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function VerticallyCenteredModal (props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title >
        Ocean Falls: the memory of a community
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='welcomeModal-body'>
        <h4>A community is a place and an idea.</h4>
        <p>
                Ocean Falls was a company town created in 1909 around a paper mill at the site of a seasonal Heiltsuk
                Nation village, near a small waterfall at the end of a Pacific Ocean fiord in British Columbia, today called
                Cousins Inlet.
                </p>
                <p>In 1968, Crown Zellerbach Canada Limited, the mill and town’s owner, began the process of winding
                down their operation in Ocean Falls. The town’s population, almost 4,000 at its high point, began to
                shrink. The mill closed in 1972. The townsfolk, without a livelihood, left. The forest once again took
                over.</p>
                <p>Even as they abandoned the townsite, as the industry that sustained it abandoned them, many former
                residents have never let go of the community. This website is an invitation to share memories of Ocean
                Falls and its place in the world with a larger public.</p>
                
                <hr/>
              <p>This map was created from a combination of historical sources.  Each dot represents a photo, text, or video connected to that location.  Created by <a href='http://mediumlight.com'>Christopher Grabowski</a>, Kathleen Flaherty and Kris Boyd
              </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Start Exploring</Button>
      </Modal.Footer>
    </Modal>
  );
}
 function Welcome2 () {
    const [modalShow, setModalShow] = React.useState(true);

  return (
      <VerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
  );
 }
export default Welcome2;