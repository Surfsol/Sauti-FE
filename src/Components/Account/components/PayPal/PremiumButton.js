import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "@material-ui/core";
import PayPalModal from "./PayPalModal";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  root: {},
  buttonPadding: {
    marginTop: "1.9em"
  }
}));
const PremiumButton = () => {
  const [getSub, setGetSub] = useState(false);
  console.log("getSub", getSub);
  const classes = useStyles();

  function getSubModal() {
    if (getSub) {
      return (
        <>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={PayPalModal}
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
          className={classes.buttonPadding}
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
