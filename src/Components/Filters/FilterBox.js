import React, { useState, useEffect, useCallback } from "react";

import { FilterBoxOptions } from "../FilterBoxOptions";
import { getTodaysDate } from "../../hooks/useCalendar";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import {
  decodeToken,
  getToken,
  getSubscription
} from "../../dashboard/auth/Auth";

import Grid from "@material-ui/core/Grid";

import DataSFilter from "./DataSFilter";
import AddFilter from "./AddFilter";

import { useDispatch, useSelector } from "react-redux";
import { compareSubSamples } from "../redux-actions/compareSubSamples";
import { calendarAction } from "../redux-actions/calendarAction";
import { clearFiltersAction } from "../redux-actions/clearFiltersAction";
import { tierDefined } from "../redux-actions/tierAction";

import AddFilterModal from "./AddFilterModal";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import { Box } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { createSearchParams, createUrl } from "./urlEncodeDecode/urlEncode";

export default function FilterBox(props) {
  const history = useHistory();
  const {
    filters,
    setFilters,
    filterBoxStartDate,
    setFilterBoxStartDate,
    filterBoxEndDate,
    setFilterBoxEndDate,
    changeYear,
    changeQuarter,
    getCurrentYear,
    open
  } = props;
  const [updateUrlFlag, setUpdateUrlFlag] = useState(false);
  const [displayDrop, setDisplayDrop] = useState([]);

  const graphLabels = useSelector(
    state => state.catLabelReducer.labels.getGraphLabels
  );

  const dataFilterVar = (theSuperCategories, categoriesCollected) => {
    return theSuperCategories.map(superCategory => {
      return {
        label: superCategory.label,
        options: superCategory.options
      };
    });
  };
  // Function for Data Series and Add Filters
  const FilterSelector = props => {
    const { filterSelectorName, filters, setFilters, i, graphLabels } = props;

    let index = i;

    const dispatch = useDispatch();

    const token = getToken();
    let tier;
    if (token) {
      tier = decodeToken(token);
      tier = tier.tier;
    }
    let access;
    if (
      tier !== undefined &&
      (tier === "ADMIN" || tier === "PAID" || tier === "GOV_ROLE")
    ) {
      access = "paid";
    } else if (tier !== undefined && tier === "FREE") {
      access = "free";
    }

    dispatch(tierDefined({ tier: tier, access: access }));

    useEffect(() => {
      if (filterSelectorName === "Compare SubSamples") {
        dispatch(
          compareSubSamples({
            filterSelectorName: filterSelectorName,
            filters: filters,
            setFilters: setFilters,
            index: index,

            setUpdateUrlFlag: setUpdateUrlFlag,
            FilterBoxOptions: FilterBoxOptions,
            updateUrlFlag: updateUrlFlag,
            // xVar: xVar,

            open: open,
            filterSelectorName: filterSelectorName
          })
        );
      }
    }, [open, filters]);

    //first is 'Data Series'
    if (filterSelectorName === "Data Series") {
      return (
        <Grid container>
          <DataSFilter
            tier={tier}
            access={access}
            newSub={newSub}
            filterSelectorName={filterSelectorName}
            filters={filters}
            setFilters={setFilters}
            index={index}
            setUpdateUrlFlag={setUpdateUrlFlag}
            FilterBoxOptions={FilterBoxOptions}
            updateUrlFlag={updateUrlFlag}
          />
        </Grid>
      );
    } else if (filterSelectorName === "Data Filter") {
      return (
        <Grid container>
          <AddFilter
            filterSelectorName={filterSelectorName}
            filters={filters}
            access={access}
            setFilters={setFilters}
            index={index}
            setUpdateUrlFlag={setUpdateUrlFlag}
            FilterBoxOptions={FilterBoxOptions}
            updateUrlFlag={updateUrlFlag}
            dataFilterVar={dataFilterVar}
            displayDrop={displayDrop}
            setDisplayDrop={setDisplayDrop}
          />
        </Grid>
      );
    } else {
      return <></>;
    }
  };

  const access = useSelector(state => state.tierReducer.access);
  const newSub = getSubscription();
  let sub;
  if (newSub) {
    sub = newSub;
  }

  const [loading, setLoading] = useState(false);

  let urlSearchParams = {};
  urlSearchParams = createSearchParams(filters, urlSearchParams);

  useEffect(() => {
    const filterStrings = createUrl(urlSearchParams);
    history.push("?" + filterStrings);
  }, [updateUrlFlag]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      calendarAction({
        filterBoxStartDate: filterBoxStartDate,
        setFilterBoxStartDate: setFilterBoxStartDate,
        filterBoxEndDate: filterBoxEndDate,
        setFilterBoxEndDate: setFilterBoxEndDate,
        changeYear: changeYear,
        changeQuarter: changeQuarter,
        getCurrentYear: getCurrentYear,
        changeYear: changeYear,
        changeQuarter: changeQuarter,
        getCurrentYear: getCurrentYear,
        loading: loading,
        open: props.open
      })
    );
    dispatch(
      clearFiltersAction({
        setFilters: setFilters,
        setFilterBoxStartDate: setFilterBoxStartDate,
        setFilterBoxEndDate: setFilterBoxEndDate,
        setUpdateUrlFlag: setUpdateUrlFlag,
        filters: filters,
        getTodaysDate: getTodaysDate,
        updateUrlFlag: updateUrlFlag
      })
    );
  }, [open, filters]);

  const classes = useStyles();
  const [addFilterModal, setAddFilterModal] = useState(false);

  const closeAddFilterModal = () => {
    setAddFilterModal(false);
  };

  function filterAdd() {
    const currentDataFilter = Object.keys(filters).length - 1;
    if (access === "paid") {
      setFilters({
        ...filters,
        // make a flag that is only true when this button is clicked on
        // put the flag on the last additional filter known to the user
        [currentDataFilter]: {
          ...filters[currentDataFilter],
          // set to true only if selectableOptions has a selected item
          // (the only time optionHasBeenSelected will be true)
          showOptions: false
        },
        [Object.keys(filters).length]: {
          nameOfFilter: "Data Filter",
          selectedCategory: "",
          selectableOptions: {},
          selectedTable: "",
          selectedTableColumnName: "",
          showOptions: true
        }
      });
    } else {
      //open modal
      setAddFilterModal(true);
    }
  }
  function modalAddFilter() {
    if (addFilterModal) {
      return (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={addFilterModal}
          onClose={closeAddFilterModal}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open}>
            <AddFilterModal closeAddFilterModal={closeAddFilterModal} />
          </Fade>
        </Modal>
      );
    } else {
      return <></>;
    }
  }

  return (
    <>
      <Grid container>
        {/* Data Series and Add Filter */}
        {Object.keys(filters).map(filterId => (
          <FilterSelector
            key={filterId}
            filterSelectorName={filters[filterId].nameOfFilter}
            filters={filters}
            setFilters={setFilters}
            i={filterId}
            graphLabels={graphLabels}
          />
        ))}
        <Grid
          item
          xs={12}
          onClick={filterAdd}
          className={classes.filterAddButton}
        >
          <Box
            display="flex"
            height="100%"
            width="100%"
            alignItems="center"
            className={classes.additionalFilterBox}
          >
            <span className={classes.additionalFilterText}>Add Filter</span>
            <AddIcon className={classes.filterArrow}></AddIcon>
          </Box>
        </Grid>
      </Grid>
      {modalAddFilter()}
    </>
  );
}
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  filterAddButton: {
    padding: theme.spacing(0),
    background: "white",
    height: "50px",
    fontFamily: "Roboto",
    borderBottom: "1px rgba(0, 0, 0, 0.1) solid",
    fontSize: "1.5rem"
  },
  filterName: {
    fontWeight: "500"
  },
  plus: {},
  additionalFilterBox: {
    cursor: "pointer",
    height: "50px",
    borderBottom: "1px rgba(0, 0, 0, 0.1) solid"
  },
  additionalFilterText: {
    padding: theme.spacing(0),
    width: "100%",
    padding: "1%",
    color: "#8c8c8c",
    fontFamily: "Roboto",
    fontSize: "1.5rem",
    "&:hover": {
      color: "#9F1C0F"
    }
  },
  filterArrow: {
    float: "right",
    marginRight: "1.7rem",
    fontSize: "1.5rem",
    color: "#8c8c8c"
  }
}));
