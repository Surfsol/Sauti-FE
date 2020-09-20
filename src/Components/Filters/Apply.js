import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import { useSelector } from "react-redux";

const Apply = ({ handleApply, filters }) => {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  let applyFromDash = false;
  applyFromDash = useSelector(state => state.applyActionReducer.apply.apply);
  const clearApply = useSelector(state => state.clearApplyReducer.clear.clear);

  useEffect(() => {
    setShow(true);
  }, [filters, applyFromDash]);

  function handleClick() {
    handleApply();
    setShow(false);
  }

  if (show && applyFromDash !== true && clearApply !== true) {
    return (
      <>
        <Grid item xs={6}>
          <Tooltip
            title="Press Apply"
            open
            arrow
            classes={{ tooltip: classes.customWidth }}
          >
            <button className={classes.applyButton} onClick={handleClick}>
              Apply
            </button>
          </Tooltip>
        </Grid>
      </>
    );
  } else {
    return <></>;
  }
};
export default Apply;

const useStyles = makeStyles(theme => ({
  applyButton: {
    border: "2px solid #9F1C0F",
    backgroundColor: "#9F1C0F",
    color: "#FFF",
    height: "3rem",
    fontWeight: "500",
    fontSize: "1.5rem",
    padding: "0% 12%",
    borderRadius: ".5rem",
    cursor: "pointer",
    float: "right"
  },
  customWidth: {
    fontSize: "16px"
  }
}));
