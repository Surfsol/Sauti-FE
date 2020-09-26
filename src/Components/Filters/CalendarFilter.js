import React, { useState } from "react";
import CalendarParent from "../../dashboard/CalendarParent";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { makeStyles, styled } from "@material-ui/core/styles";
import "../scss/dataSeries.scss";
import { Box } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Tooltip from "@material-ui/core/Tooltip";

const CalendarFilter = ({
  filterBoxStartDate,
  setFilterBoxStartDate,
  filterBoxEndDate,
  setFilterBoxEndDate
}) => {
  const reducerCal = useSelector(state => state.calendarReducer.calendar);
  const tier = useSelector(state => state.tierReducer.tier);

  const [openCal, setOpenCal] = useState(false);
  const classes = useStyles();
  const {
    newSub,
    changeQuarter,
    getCurrentYear,
    changeYear,
    loading,
    open
  } = reducerCal;
  const filters = useSelector(
    state => state.queriesReducer.queriesFilters.filters
  );

  if (
    (tier === "FREE" || tier === "EXPIRED") &&
    open === "bar" &&
    openCal === false
  ) {
    return (
      <Grid
        item
        className={classes.doNotRender}
        onClick={() => setOpenCal(true)}
      >
        <Box display="flex" height="100%" alignItems="center">
          <Tooltip
            arrow
            classes={{ tooltip: classes.tooltip }}
            title="For paid members only"
          >
            <div className={classes.filterText}>
              <span className={classes.filterName}>Date Range</span>
              <ExpandMoreIcon className={classes.filterArrow}></ExpandMoreIcon>
            </div>
          </Tooltip>
        </Box>
      </Grid>
    );
  } else if (
    open === "bar" &&
    openCal === false &&
    filters[0].selectedTable === "Sessions"
  ) {
    return (
      <Grid className={classes.calendar} onClick={() => setOpenCal(true)}>
        <Box display="flex" height="100%" alignItems="center">
          <div className={classes.filterText}>
            <span className={classes.filterName}>Date Range</span>
            <ExpandMoreIcon className={classes.filterArrow}></ExpandMoreIcon>
          </div>
        </Box>
      </Grid>
    );
  } else if (open === "bar" && openCal === false) {
    return (
      <Grid
        item
        className={classes.doNotRender}
        onClick={() => setOpenCal(true)}
      >
        <Box display="flex" height="100%" alignItems="center">
          <div className={classes.filterText}>
            <span className={classes.filterName}>Date Range</span>
            <ExpandMoreIcon className={classes.filterArrow}></ExpandMoreIcon>
          </div>
        </Box>
      </Grid>
    );
  } else if (open === "bar" && openCal === true) {
    return (
      <>
        <Grid
          item
          onClick={() => setOpenCal(false)}
          className={classes.calendar}
        >
          <Box display="flex" height="100%" alignItems="center">
            <div className={classes.filterText}>
              <span className={classes.filterName}>Date Range</span>
              <ExpandLessIcon className={classes.filterArrow}></ExpandLessIcon>
            </div>
          </Box>
        </Grid>
        <CalendarParent
          tier={tier}
          newSub={newSub}
          filterBoxStartDate={filterBoxStartDate}
          setFilterBoxStartDate={setFilterBoxStartDate}
          filterBoxEndDate={filterBoxEndDate}
          setFilterBoxEndDate={setFilterBoxEndDate}
          changeYear={changeYear}
          changeQuarter={changeQuarter}
          getCurrentYear={getCurrentYear}
          changeYear={changeYear}
          changeQuarter={changeQuarter}
          getCurrentYear={getCurrentYear}
          loading={loading}
          open={open}
          setOpenCal={setOpenCal}
          filters={filters}
        />
      </>
    );
  } else {
    return <></>;
  }
};
export default CalendarFilter;
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  calendar: {
    padding: theme.spacing(0),
    height: "50px",
    padding: "1%",
    fontFamily: "Roboto",
    borderBottom: "1px rgba(0, 0, 0, 0.1) solid",
    fontSize: "1.5rem",
    cursor: "pointer"
  },
  filterName: {
    fontWeight: "500"
  },
  arrow: {
    border: "solid black",
    borderWidth: "0 3px 3px 0",
    display: "inline-block",
    padding: "3px",
    transform: "rotate(45deg)",
    webkitTransform: "rotate(45deg)"
  },
  filterArrow: {
    float: "right",
    marginRight: "1rem",
    fontSize: "2rem",
    color: "#8c8c8c"
  },
  filterText: {
    width: "100%",
    "&:hover": {
      color: "#9F1C0F"
    }
  },
  doNotRender: {
    padding: theme.spacing(0),
    height: "50px",
    padding: "1%",
    fontFamily: "Roboto",
    borderBottom: "1px rgba(0, 0, 0, 0.1) solid",
    fontSize: "1.5rem",
    cursor: "pointer",
    background: "#CCCCCC"
  },
  tooltip: {
    fontSize: "18px"
  }
}));
