import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "@material-ui/core";
import CancelSubModal from "./CancelSubModal";

const CancelButton = () => {
  const [cancel, setCancelSub] = useState(false);

  function cancelModal() {
    if (cancel) {
      return (
        <>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={CancelSubModal}
            onClose={() => setCancelSub(false)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500
            }}
          >
            <Fade>
              <CancelSubModal setCancelSub={setCancelSub} />
            </Fade>
          </Modal>
        </>
      );
    } else {
      return (
        <Button
          color="primary"
          variant="outlined"
          fullWidth
          size="large"
          style={{ marginTop: "1.9em" }}
          onClick={() => setCancelSub(true)}
        >
          Cancel your Plan
        </Button>
      );
    }
  }
  return <>{cancelModal()}</>;
};
export default CancelButton;
