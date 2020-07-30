import React, { useState, useEffect } from "react";
import "../../Components/scss/dataSeries.scss";
import { makeStyles } from "@material-ui/core/styles";
import NoAccessModalDisplay from "./NoAccessModalDisplay";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
//import { useDispatch } from "react-redux";
const NoAccessModal = ({ noAccess, setNoAccess }) => {
  console.log("open NO Acc", noAccess);
  const classes = useStyles();
  const handleClose = () => {
    setNoAccess(false);
  };

  // const dispatch = useDispatch();
  // dispatch(setShowNoAccess(false));

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={noAccess}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={noAccess}>
          <NoAccessModalDisplay handleClose={handleClose} />
        </Fade>
      </Modal>
    </>
  );
};
export default NoAccessModal;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));
