import { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalBody,
  MDBModalHeader,
} from "mdb-react-ui-kit";

export default function ModalVideo() {
  const [basicModal, setBasicModal] = useState(false);

  const toggleOpen = () => setBasicModal(!basicModal);

  return (
    <>
      <MDBBtn className="btn-video" color="dark" onClick={toggleOpen}>
        {"let's go to the show!!!"}
      </MDBBtn>
      <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex="-1">
        <MDBModalDialog size="fullscreen">
          <MDBModalContent>
            <MDBModalHeader>
              <div className="cross-close" color="none" onClick={toggleOpen}>
                X
              </div>
            </MDBModalHeader>
            <MDBModalBody>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/videoseries?si=_qDwI0r8HNos1Lta&amp;list=PLVJ51pLixCNVID1iGy-gtKeudFP9hkG_D"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
