import React, { useState, useEffect } from "react";
import "../../Components/scss/dataSeries.scss";
import { makeStyles } from "@material-ui/core/styles";
import SeriesFilterModal from "./SeriesFilterModal";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const NoAccessModal = ({ open, setOpen }) => {
  console.log("open NO Acc");
  //const [open, setOpen] = useState(true);
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };
  console.log("open", open);
  //  useEffect(() => {
  //      setOpen(true)
  //  })
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <SeriesFilterModal handleClose={handleClose} />
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
