import React from "react";
import LineGraph from "./LineGraph/LineGraph";
import GraphParse from "./GraphParse";
import ChoroplethParent from "../Components/ChoroplethMap/ChoroplethParent";
import "./scss/lineGraphButton.scss";
import { set } from "react-ga";

const LineGraphButton = props => {
  const {
    data,
    filters,
    open,
    setOpen,
    queryType,
    filterBoxStartDate,
    filterBoxEndDate,
    setChartDataSM
  } = props;

  const renderLine = () => {
    //list additional filters
    let additionalFiltersArray = [];
    for (let key in filters) {
      if (key > 1) {
        let cat = filters[key].selectedCategory;
        let selected = "";
        let obj = filters[key].selectableOptions;
        for (let item in obj) {
          if (obj[item] === true) {
            selected = item;
            additionalFiltersArray.push(`${cat}: ${selected}`);
          }
        }
      }
    }
    if (open === "line") {
      return (
        <>
          <LineGraph
            filter0={filters[0]}
            data={data}
            additionalFiltersArray={additionalFiltersArray}
          />
        </>
      );
    } else {
    }
  };

  const renderChoroplethMap = () => {
    if (open === "choropleth") {
      return (
        <>
          <ChoroplethParent
            gqlData={data}
            filters={filters}
            queryType={queryType}
            filters={filters}
          />
        </>
      );
    } else {
    }
  };

  const renderDotMap = () => {
    if (open === "dot") {
      return (
        <>
          <h1>Dot Map</h1>
        </>
      );
    } else {
    }
  };

  const renderBar = () => {
    if (open === "bar") {
      return (
        <>
          <GraphParse
            data={data}
            filters={filters}
            open={open}
            queryType={queryType}
            filterBoxStartDate={filterBoxStartDate}
            filterBoxEndDate={filterBoxEndDate}
            setChartDataSM={setChartDataSM}
          />
        </>
      );
    } else if (open !== "bar") {
    }
  };

  if (filters[0]["selectedCategory"] === "Traders' Destination Country") {
    return (
      <>
        {renderLine()}
        {renderBar()}
        {renderChoroplethMap()}
      </>
    );
  } else if (
    filters[0]["selectedCategory"] === "Requsted Procedures, by Destination"
  ) {
    return (
      <>
        {renderLine()}
        {renderBar()}
        {renderChoroplethMap()}
      </>
    );
  } else if (
    open === "choropleth" &&
    filters[0]["selectedCategory"] !== "Country of Residence" &&
    filters[0]["selectedCategory"] !== "Traders' Destination Country" &&
    filters[0]["selectedCategory"] !== "Requsted Procedures, by Destination"
  ) {
    setOpen("bar");
    return <>{renderBar()}</>;
  } else if (open === "line" && data.tradersUsers) {
    setOpen("bar");
    return <>{renderBar()}</>;
  } else if (filters[0].selectedTable === "Sessions") {
    return (
      <>
        {renderBar()}
        {renderLine()}
      </>
    );
  } else if (
    data &&
    data.tradersUsers &&
    filters[0]["selectedCategory"] === "Country of Residence"
  ) {
    return (
      <>
        {renderBar()}
        {renderChoroplethMap()}
      </>
    );
  } else {
    return <>{renderBar()}</>;
  }
};

export default LineGraphButton;
