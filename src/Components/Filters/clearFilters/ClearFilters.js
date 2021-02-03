import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { queriesFilters } from "../../redux-actions/queriesAction";
import { clearApplyAction } from "../../redux-actions/clearApplyAction";
import { filterReset } from "./reset";

const ClearFilters = ({ setDisplayDrop, setCompareDrop, handleApply }) => {
  const clearReducer = useSelector(state => state.clearReducer.clear);
  const classes = useStyles();
  const {
    setFilters,
    setFilterBoxStartDate,
    setFilterBoxEndDate,
    setUpdateUrlFlag,
    filters,
    getTodaysDate,
    updateUrlFlag
  } = clearReducer;

  const dispatch = useDispatch();

  let reset = {};
  if (filters) {
    reset = filterReset(filters);
  }

  function handleClear(e) {
    e.preventDefault();
    setDisplayDrop([]);
    setCompareDrop(false);
    setFilters(reset);
    dispatch(queriesFilters(reset));
    setFilterBoxStartDate("2017-01-01");
    setFilterBoxEndDate(getTodaysDate());
    setUpdateUrlFlag(!updateUrlFlag);
    handleApply(reset);
    dispatch(
      clearApplyAction({
        clear: true
      })
    );
  }

  return (
    <>
      <Grid item xs={6} onClick={handleClear}>
        <button className={classes.clearButton}>Clear All</button>
      </Grid>
    </>
  );
};
export default ClearFilters;

const useStyles = makeStyles(theme => ({
  clearButton: {
    border: "2px solid #9F1C0F",
    backgroundColor: "#FFF",
    color: "#9F1C0F",
    height: "3rem",
    fontWeight: "500",
    fontSize: "1.5rem",
    padding: "0% 12%",
    borderRadius: ".5rem",
    cursor: "pointer"
  }
}));
