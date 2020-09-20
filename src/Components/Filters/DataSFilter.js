import React, { useState, useEffect } from "react";
import graphLabels from "../graphLabels";
import "../../Components/scss/dataSeries.scss";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { ordered, allowed } from "../orderedGraphLabels";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { Box } from "@material-ui/core";
import NoAccessModal from "./NoAccessModal";
import { useDispatch } from "react-redux";
import { clearApplyAction } from "../redux-actions/clearApplyAction";

const DataSFilter = ({
  filters,
  setFilters,
  index,
  setUpdateUrlFlag,
  FilterBoxOptions,
  updateUrlFlag,
  access
}) => {
  const [displayDrop, setDisplayDrop] = useState(false);
  const [noAccess, setNoAccess] = useState(false);
  const [catValue, setCatValue] = useState("");

  // let allSelectableOptions = Object.keys(FilterBoxOptions.default);
  const classes = useStyles();
  const dispatch = useDispatch();

  function changeOption(e) {
    dispatch(
      clearApplyAction({
        clear: false
      })
    );
    const selectedName = e.target.dataset.selectvalue;
    console.log(selectedName);
    if (access === "paid") {
      setUpdateUrlFlag(!updateUrlFlag);
      let optionFlags = {};
      graphLabels[
        `${FilterBoxOptions.default[selectedName].value.type}`
      ].labels.forEach(option => {
        optionFlags = {
          ...optionFlags,
          [option]: false
        };
      });
      setFilters({
        ...filters,
        [index]: {
          ...filters[index],
          selectedCategory: selectedName, //option
          selectedTableColumnName:
            FilterBoxOptions.default[selectedName].value.type,

          selectedTable: FilterBoxOptions.default[selectedName].value.query,
          selectedOption: undefined,
          selectableOptions: { ...optionFlags }
        }
      });
    } else if (access === "free" && allowed.includes(selectedName)) {
      setUpdateUrlFlag(!updateUrlFlag);
      let optionFlags = {};
      graphLabels[
        `${FilterBoxOptions.default[selectedName].value.type}`
      ].labels.forEach(option => {
        optionFlags = {
          ...optionFlags,
          [option]: false
        };
      });
      setFilters({
        ...filters,
        [index]: {
          ...filters[index],
          selectedCategory: selectedName, //option
          selectedTableColumnName:
            FilterBoxOptions.default[selectedName].value.type,

          selectedTable: FilterBoxOptions.default[selectedName].value.query,
          selectedOption: undefined,
          selectableOptions: { ...optionFlags }
        }
      });
    } else {
      setNoAccess(true);
      setCatValue(selectedName);
    }
  }

  const displayDropOptions = () => {
    if (displayDrop === true && noAccess === false) {
      return (
        <>
          <Grid item xs={12} className={classes.filterButton}>
            <Box display="flex" height="100%" alignItems="center">
              <div className={classes.filterText}>
                <span className={classes.filterName}> Data Series</span>
              </div>
              <ExpandLessIcon className={classes.filterArrow}></ExpandLessIcon>
            </Box>
          </Grid>
          <Grid container xs={12} className={classes.optionsContainer}>
            {ordered.map(e => {
              if (
                e === "DEMOGRAPHICS" ||
                e === "INFORMATION INSIGHTS" ||
                e === "BUSINESS INSIGHTS"
              ) {
                return <p className={classes.super}>{e}</p>;
              } else if (allowed.includes(e)) {
                return (
                  <span
                    className={"selectable"}
                    data-selectvalue={e}
                    onClick={changeOption}
                  >
                    {e}
                  </span>
                );
              } else {
                return (
                  <span
                    className={access === "paid" ? "selectable" : "limited"}
                    data-selectvalue={e}
                    onClick={changeOption}
                  >
                    {e}
                  </span>
                );
              }
            })}
          </Grid>
        </>
      );
    } else if (displayDrop === false && noAccess === false) {
      return (
        <Grid item xs={12} className={classes.filterButton}>
          <Box display="flex" height="100%" alignItems="center">
            <div className={classes.filterText}>
              <span className={classes.filterName}> Data Series</span> -{" "}
              <span className={classes.chosen}>
                {filters[0].selectedCategory}
              </span>
            </div>
            <ExpandMoreIcon className={classes.filterArrow}></ExpandMoreIcon>
          </Box>
        </Grid>
      );
    } else {
      return (
        <>
          <Grid item xs={12} className={classes.filterButton}>
            <Box display="flex" height="100%" alignItems="center">
              <div className={classes.filterText}>
                <span className={classes.filterName}> Data Series</span> -{" "}
                <span className={classes.chosen}>
                  {filters[0].selectedCategory}
                </span>
              </div>
              <ExpandMoreIcon className={classes.filterArrow}></ExpandMoreIcon>
            </Box>
          </Grid>
          <NoAccessModal
            noAccess={noAccess}
            setNoAccess={setNoAccess}
            catValue={catValue}
          />
        </>
      );
    }
  };

  return (
    <Grid container onClick={() => setDisplayDrop(!displayDrop)}>
      {displayDropOptions()}
    </Grid>
  );
};
export default DataSFilter;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  optionsContainer: {
    flexDirection: "column",
    maxHeight: "200px",
    overflowY: "scroll",
    overflowX: "none",
    border: "1px solid lightgray",
    display: "inline-grid",
    "&::-webkit-scrollbar": {
      width: "1em",
      backgroundColor: "lightgray"
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)"
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#9F1C0F",
      outline: "1px solid slategrey",
      borderRadius: "5px"
    }
  },
  filterButton: {
    padding: theme.spacing(0),
    width: "100%",
    height: "50px",
    padding: "1%",
    fontFamily: "Roboto",
    borderBottom: "1px rgba(0, 0, 0, 0.1) solid",
    fontSize: "1.5rem",
    cursor: "pointer"
  },
  filterText: {
    width: "100%",
    "&:hover": {
      color: "#9F1C0F"
    }
  },
  filterName: {
    fontWeight: "500"
  },
  chosen: {
    fontStyle: "italic"
  },
  super: {
    background: "#f5f5f5",
    color: "#8c8c8c",
    fontSize: "1.4rem",
    padding: "1rem 0.5rem"
  },
  filterArrow: {
    float: "right",
    marginRight: "1rem",
    fontSize: "2rem",
    color: "#8c8c8c"
  }
}));
