import React, { useState, useEffect } from "react";
import { getSelectedOption } from "../OptionFunctions";
import "./scss/SelectedFilterDisplay.scss";
import { useSelector } from "react-redux";
import { Box } from "@material-ui/core";

const SelectedFilterDisplay = ({
  filters,
  selectedFilters,
  setSelectedFilters
}) => {
  //noDatafound modal should selectedFilters true

  const [dataSeries, setDataSeries] = useState("");
  const [filtersVar, setAddFiltersVar] = useState({});
  const [compare, setCompare] = useState("");

  const selectedReducer = useSelector(
    state => state.selectedReducer.selected.selected
  );
  if (selectedReducer) {
    setSelectedFilters(selectedReducer);
  }

  useEffect(() => {
    if (selectedFilters) {
      setDataSeries(filters[0].selectedCategory);
      setCompare(filters[1].selectedCategory);
      setAddFiltersVar(filters);
    }
  }, [selectedFilters]);

  const makeFilterList = () => {
    return Object.keys(filtersVar)
      .filter(filterId => filterId >= 2)
      .map(filterId => {
        if (getSelectedOption(filtersVar, filterId)) {
          return (
            <>
              <span className="filterTitle"> Additional Filter -</span>
              <span style={{ marginLeft: ".4%" }} key={"id" + filterId}>
                {" "}
                {filtersVar[filterId].selectedCategory} :
              </span>
              <span className="italic" key={"id2" + filterId}>
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
