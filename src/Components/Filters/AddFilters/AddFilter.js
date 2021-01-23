import React, { useState, useRef, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Box } from "@material-ui/core";
import { useSelector } from "react-redux";
import NoAccessModal from "../NoAccessModal";
import InFilters from "./InFilters";

const AddFilter = ({
  filters,
  setFilters,
  index,
  FilterBoxOptions,
  setUpdateUrlFlag,
  updateUrlFlag,
  displayDrop,
  setDisplayDrop,
  access
}) => {
  const classes = useStyles();
  const innerRef = useRef(null);
  const [scrollTopVar, setScrollTopVar] = useState();
  const [noAccess, setNoAccess] = useState(false);
  const scrollY = useSelector(state => state.scrollReducer.scrollPos);
  const adjustScroll = scrollY.position + 40;
  const [catValue, setCatValue] = useState("");

  useEffect(() => {
    const div = innerRef.current;
    if (div != null) {
      div.addEventListener("scroll", handleScroll);
      return () => {
        div.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const handleScroll = e => {
    //maybe better way to save this, when stop scroll
    setScrollTopVar(e.target.scrollTop);
  };

  useEffect(() => {
    if (document.getElementById("scroll")) {
      let scrollBar = document.getElementById("scroll");
      scrollBar.scrollTop = adjustScroll;
    }
  }, []);
  //removed document from useEffect, because not an array

  let allSelectableOptions = Object.keys(FilterBoxOptions.default);
  allSelectableOptions.unshift("DEMOGRAPHICS");

  if (displayDrop.includes(index) && noAccess === false) {
    return (
      <InFilters
        filters={filters}
        setFilters={setFilters}
        index={index}
        FilterBoxOptions={FilterBoxOptions}
        setUpdateUrlFlag={setUpdateUrlFlag}
        updateUrlFlag={updateUrlFlag}
        setDisplayDrop={setDisplayDrop}
        setCatValue={setCatValue}
        setNoAccess={setNoAccess}
        access={access}
        scrollTopVar={scrollTopVar}
        innerRef={innerRef}
      />
    );
  } else if (noAccess === false) {
    return (
      <>
        <Grid
          item
          xs={12}
          onClick={() => setDisplayDrop([...displayDrop, index])}
          className={classes.filterButton}
        >
          <Box display="flex" height="100%" alignItems="center">
            <div className={classes.filterText}>
              <span className={classes.filterName}> Filter</span>
              <span
                className={
                  filters[index].selectedCategory
                    ? classes.dash
                    : classes.hideDash
                }
              >
                {" "}
                -{" "}
              </span>
              <span className={classes.chosen}>
                {filters[index].selectedCategory}
              </span>
            </div>
            <ExpandMoreIcon className={classes.filterArrow}></ExpandMoreIcon>
          </Box>
        </Grid>
      </>
    );
  } else {
    return (
      <>
        <InFilters
          filters={filters}
          setFilters={setFilters}
          index={index}
          FilterBoxOptions={FilterBoxOptions}
          setUpdateUrlFlag={setUpdateUrlFlag}
          updateUrlFlag={updateUrlFlag}
          setDisplayDrop={setDisplayDrop}
          setCatValue={setCatValue}
          setNoAccess={setNoAccess}
          access={access}
          scrollTopVar={scrollTopVar}
          innerRef={innerRef}
        />
        <NoAccessModal
          noAccess={noAccess}
          setNoAccess={setNoAccess}
          catValue={catValue}
        />
      </>
    );
  }
};

export default AddFilter;

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
  chosen: {
    fontStyle: "italic"
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
  dash: {},
  hideDash: {
    visibility: "hidden"
  }
}));
