import React from "react";
import NoDataLineModal from "./NoDataLineModal";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useSelector } from "react-redux";

const NoDataParent = ({ noDataModal, setNoDataModal }) => {
  const filters = useSelector(state => state.queriesReducer.filters);

  console.log("show no Data modal", noDataModal);

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={noDataModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade>
          <NoDataLineModal setNoDataModal={setNoDataModal} filters={filters} />
        </Fade>
      </Modal>
    </>
  );
};
export default NoDataParent;
