import React, { useState, useEffect } from "react";
import { getSelectedOption } from "../OptionFunctions";
import "./scss/SelectedFilterDisplay.scss";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";

const SelectedFilterDisplay = ({ filters, selectedFilters, resetFilters }) => {
  //noDatafound modal should selectedFilters true
  console.log(
    "filters",
    filters,
    "selectedFilters",
    selectedFilters,
    "resetFilters",
    resetFilters
  );
  console.log("render selectedFilterDispaly");

  const [dataSeries, setDataSeries] = useState("");
  const [filtersVar, setAddFiltersVar] = useState({});
  const [compare, setCompare] = useState("");
  useEffect(() => {
    if (resetFilters[0]) {
      filters = resetFilters;
      console.log("in useEffect", filters);
      setDataSeries(filters[0].selectedCategory);
      setCompare(filters[1].selectedCategory);
      setAddFiltersVar(filters);
    } else if (selectedFilters) {
      setDataSeries(filters[0].selectedCategory);
      setCompare(filters[1].selectedCategory);
      setAddFiltersVar(filters);
    }
  }, [selectedFilters, resetFilters]);

  const makeFilterList = () => {
    return Object.keys(filtersVar)
      .filter(filterId => filterId >= 2)
      .map(filterId => {
        if (filtersVar[filterId].selectedCategory) {
          return (
            <>
              <span className="filterTitle"> Additional Filter -</span>
              <span style={{ marginLeft: ".4%" }}>
                {" "}
                {filtersVar[filterId].selectedCategory} :
              </span>
              <span className="italic">
                {" "}
                {getSelectedOption(filtersVar, filterId)};
              </span>
            </>
          );
        } else {
          return <></>;
        }
      });
  };

  function showCompare() {
    if (compare) {
      return (
        <>
          <span className="filterTitle"> Compare By -</span>
          <span style={{ marginLeft: ".4%" }}>{compare}</span>
        </>
      );
    } else {
      return <></>;
    }
  }

  function showDataSeries() {
    if (dataSeries) {
      return (
        <>
          <span className="filterTitle"> Data Series -</span>
          <span style={{ marginLeft: ".4%" }}>{dataSeries}</span>
        </>
      );
    }
  }

  return (
    <>
      <Box
        display="flex"
        height="100%"
        alignItems="center"
        flexDirection="row"
        flexWrap="nowrap"
        style={{ fontSize: "1.5rem", padding: "0% 1%" }}
      >
        {showDataSeries()}
        {makeFilterList()}
        {showCompare()}
      </Box>
    </>
  );
};
export default SelectedFilterDisplay;
