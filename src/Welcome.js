import React, {useState} from 'react';
import ReactModal from 'react-modal';


ReactModal.setAppElement('#root');

function Welcome(props) {
  
  const [showModal, setShowModal] = useState(true);

  /* const handleOpenModal = () => {
    setShowModal(true);
  }; */
  
  const handleCloseModal = () => {
    setShowModal(false);
  };
  
 
    return (  
        <ReactModal 
           isOpen={showModal}
           className="welcomeModal"
           bodyOpenClassName="bodyOpen"
           contentLabel="onRequestClose Example"
           onRequestClose={handleCloseModal}
        >
          <div className="textContainer">
            <div className="text">
              <h1>Ocean Falls: the memory of a community</h1>
              <h2>A community is a place and an idea.</h2>
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
              <p>This map was created from a combination of historical sources(get summary from Chris).  Each dot represents a photo, text, or video connected to that location.  Created by <a href='http://mediumlight.com'>Christopher Grabowski</a>, Kathleen Flaherty and Kris Boyd
              </p>
            </div>
              <div  class="buttonContainer">
                <button onClick={handleCloseModal} class="explore">Start Exploring</button>
              </div>
          </div>
          
        </ReactModal>
    );
  
}



export default Welcome;
