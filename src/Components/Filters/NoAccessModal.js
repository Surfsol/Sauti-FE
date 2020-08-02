import React, { useState, useEffect } from "react";
import "../../Components/scss/dataSeries.scss";
import { makeStyles } from "@material-ui/core/styles";
import NoAccessModalDisplay from "./NoAccessModalDisplay";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
//import { useDispatch } from "react-redux";
const NoAccessModal = ({ noAccess }) => {
  const classes = useStyles();

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={noAccess}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={noAccess}>
          <NoAccessModalDisplay noAccess={noAccess} />
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
