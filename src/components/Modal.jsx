import { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalBody,
} from "mdb-react-ui-kit";
import Slideshow from "../pages/SlideShow";

export default function Modal() {
  const [basicModal, setBasicModal] = useState(false);

  const toggleOpen = () => setBasicModal(!basicModal);

  return (
    <>
      <MDBBtn color="dark" onClick={toggleOpen}>
        {"LETS ' GO TO THE SHOW"}
      </MDBBtn>
      <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex="-1">
        <MDBModalDialog size="fullscreen">
          <MDBModalContent>
            <MDBModalBody>
              <div className="cross-close" color="none" onClick={toggleOpen}>
                X
              </div>
              <Slideshow />
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
