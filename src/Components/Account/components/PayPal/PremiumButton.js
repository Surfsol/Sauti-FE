import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "@material-ui/core";
import PayPalModal from "./PayPalModal";

const PremiumButton = () => {
  const [getSub, setGetSub] = useState(false);
  console.log("getSub", getSub);

  function getSubModal() {
    if (getSub) {
      return (
        <>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={PayPalModal}
            onClose={() => setGetSub(false)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500
            }}
          >
            <Fade>
              <PayPalModal setGetSub={setGetSub} />
            </Fade>
          </Modal>
        </>
      );
    } else {
      return (
        <Button
          color="primary"
          variant="contained"
          fullWidth
          size="large"
          onClick={() => setGetSub(true)}
        >
          Change Account Plan to Premium
        </Button>
      );
    }
  }
  return <>{getSubModal()}</>;
};
export default PremiumButton;
