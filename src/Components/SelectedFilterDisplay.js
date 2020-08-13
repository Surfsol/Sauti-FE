import React, { useState, useEffect } from "react";
import { getSelectedOption } from "../OptionFunctions";
import "./scss/SelectedFilterDisplay.scss";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";

const SelectedFilterDisplay = ({ filters, selectedFilters, resetFilters }) => {
  //noDatafound modal should selectedFilters true

  const [dataSeries, setDataSeries] = useState("");
  const [filtersVar, setAddFiltersVar] = useState({});
  const [compare, setCompare] = useState("");

  //console.log(dataSeries, 'filtersVar', filters[1].selectedCategory, 'compare', compare)
  useEffect(() => {
    if (selectedFilters) {
      setDataSeries(filters[0].selectedCategory);
      setCompare(filters[1].selectedCategory);
      setAddFiltersVar(filters);
    }
  }, [selectedFilters, resetFilters]);

  const makeFilterList = () => {
    console.log("filtersVar", filtersVar);
    return Object.keys(filtersVar)
      .filter(filterId => filterId >= 2)
      .map(filterId => {
        if (getSelectedOption(filtersVar, filterId)) {
          return (
            <>
              <span className="filterTitle"> Additional Filter -</span>
              <span style={{ marginLeft: ".4%" }}>
                {" "}
                {filters[filterId].selectedCategory} :
              </span>
              <span className="italic">
                {" "}
                {getSelectedOption(filters, filterId)};
              </span>
            </>
          );
        } else {
          return <></>;
        }
      });
  };

  function showCompare() {
    console.log("compare", compare);
    if (compare) {
      return (
        <>
          <span className="filterTitle"> Compare By -</span>
          <span style={{ marginLeft: ".4%" }}>
            {filters[1].selectedCategory}
          </span>
        </>
      );
    } else {
      return <></>;
    }
  }

  function showDataSeries() {
    console.log("dataSeries", dataSeries);
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
        <span className="filterTitle">Data Series -</span>
        <span style={{ marginLeft: ".4%" }}>{filters[0].selectedCategory}</span>
        {makeFilterList()}
        {showCompare()}
      </Box>
    </>
  );
};
export default SelectedFilterDisplay;
