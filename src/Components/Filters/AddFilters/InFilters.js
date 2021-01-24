import React from "react";
import RenderCheckContainer from "./RenderCheckContainer";
import { makeStyles } from "@material-ui/core/styles";
import { fromNav } from "../../redux-actions/fromNavAction";
import { clearApplyAction } from "../../redux-actions/clearApplyAction";
import { scrollPosition } from "../../redux-actions/scrollAction";
import { allowed } from "../../orderedGraphLabels";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { ordered } from "../../orderedGraphLabels";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";

const InFilters = ({
  filters,
  setFilters,
  index,
  FilterBoxOptions,
  setUpdateUrlFlag,
  updateUrlFlag,
  setDisplayDrop,
  setCatValue,
  setNoAccess,
  access,
  scrollTopVar,
  innerRef
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const graphLabels = useSelector(
    state => state.catLabelReducer.labels.getGraphLabels
  );
  const changeOption = e => {
    dispatch(fromNav(false));
    dispatch(
      clearApplyAction({
        clear: false
      })
    );
    dispatch(scrollPosition({ position: scrollTopVar }));
    const selectedName = e.target.dataset.selectvalue;
    if (
      access === "paid" ||
      (access === "free" && allowed.includes(selectedName))
    ) {
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
          selectableOptions: { ...optionFlags },
          showOptions: true
        }
      });
    } else {
      setNoAccess(true);
      setCatValue(selectedName);
    }
  };
  return (
    <Grid container xs={12}>
      <Grid
        item
        xs={12}
        onClick={() => setDisplayDrop([])}
        className={classes.filterButton}
      >
        <Box display="flex" height="100%" alignItems="center">
          <div className={classes.filterText}>
            <span className={classes.filterName}> Filter</span>
          </div>
          <ExpandLessIcon className={classes.filterArrow}></ExpandLessIcon>
        </Box>
      </Grid>

      <Grid
        container
        xs={12}
        className={classes.optionsContainer}
        ref={innerRef}
        id="scroll"
      >
        {ordered.map(e => {
          if (
            e === "DEMOGRAPHICS" ||
            e === "INFORMATION INSIGHTS" ||
            e === "BUSINESS INSIGHTS"
          ) {
            return <p className={classes.super}>{e}</p>;
          } else if (allowed.includes(e)) {
            return (
              <>
                <span
                  className="selectable"
                  data-selectvalue={e}
                  onClick={changeOption}
                >
                  {e}
                </span>
                <RenderCheckContainer
                  i={index}
                  itemName={e}
                  filters={filters}
                  graphLabels={graphLabels}
                  setFilters={setFilters}
                  setUpdateUrlFlag={setUpdateUrlFlag}
                  updateUrlFlag={updateUrlFlag}
                  FilterBoxOptions={FilterBoxOptions}
                  setDisplayDrop={setDisplayDrop}
                />
              </>
            );
          } else {
            return (
              <>
                <span
                  className={access === "paid" ? "selectable" : "limited"}
                  data-selectvalue={e}
                  onClick={changeOption}
                >
                  {e}
                </span>
                <RenderCheckContainer
                  i={index}
                  itemName={e}
                  filters={filters}
                  graphLabels={graphLabels}
                  setFilters={setFilters}
                  setUpdateUrlFlag={setUpdateUrlFlag}
                  updateUrlFlag={updateUrlFlag}
                  FilterBoxOptions={FilterBoxOptions}
                  setDisplayDrop={setDisplayDrop}
                />
              </>
            );
          }
        })}
      </Grid>
    </Grid>
  );
};
export default InFilters;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  optionsContainer: {
    flexDirection: "column",
    maxHeight: "200px",
    overflowY: "scroll",
    border: "1px solid lightgray",
    overflowX: "none",
    display: "inline-grid",
    //style scrollbar
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
      //outline: "1px solid slategrey",
      borderRadius: "5px"
    }
  },
  filterButton: {
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
  },
  filterText: {
    width: "100%",
    "&:hover": {
      color: "#9F1C0F"
    }
  }
}));
