import React, { useState, useEffect } from "react";
import "./scss/dataSeries.scss";
import { makeStyles } from "@material-ui/core/styles";
import NotLoggedModal from "./NotLoggedModal";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const NotLoggedInModal = ({ notLogged, setNotLogged }) => {
  const classes = useStyles();
  const handleClose = () => {
    setNotLogged(false);
  };

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={notLogged}
        disableBackdropClick
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={notLogged}>
          <NotLoggedModal handleClose={handleClose} />
        </Fade>
      </Modal>
    </>
  );
};
export default NotLoggedInModal;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));
