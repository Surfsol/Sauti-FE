import React from "react";
import dataParse from "./dataParse";
import Graph from "./Graph";
import { filterByDate } from "../DataParseHelpers/filterByDate";
import { useSelector } from "react-redux";

const GraphParse = ({
  data,
  filters,
  queryType,
  filterBoxStartDate,
  filterBoxEndDate,
  setChartDataSM
}) => {
  //needed for filterByDate, cannot filter tradersUsers by date
  let typeOfQuery = Object.keys(data)[0];

  const graphLabels = useSelector(
    state => state.catLabelReducer.labels.getGraphLabels
  );
  console.log("graphLabels", graphLabels);
  //maybe will need something like this in else statement to prevent errors: data.sessionData != undefined &&
  if (
    queryType === "sessionsData" &&
    typeOfQuery != "tradersUsers" &&
    filterBoxStartDate &&
    filterBoxEndDate
  ) {
    data = filterByDate(data, filterBoxStartDate, filterBoxEndDate);
  }

  //used on SocialMedia.js
  let chartData = dataParse(
    filters[0].selectedTableColumnName,
    data[`${queryType}`] || data.tradersUsers,
    filters[1].selectedTableColumnName,
    filters[2].selectedTableColumnName,
    filters[0].selectedTable,
    filters[1].selectedTable,
    graphLabels
  );

  const graphItems = filters[1].selectedTableColumnName !== "";
  if (graphItems === true) {
    return (
      <>
        <Graph
          data={chartData.percentageData}
          csvData={chartData.dataStructure}
          filters={filters}
          keys={chartData.crossFilterValues}
          groupMode={"grouped"}
          sampleSize={chartData.totalSampleSize}
          tableName={queryType === "sessionsData" ? "Sessions" : "Users"}
          setChartDataSM={setChartDataSM}
          chartData={chartData}
        />
      </>
    );
  } else if (chartData && graphItems === false) {
    return (
      <>
        <Graph
          data={chartData.percentageData}
          csvData={chartData.dataStructure}
          filters={filters}
          keys={chartData.keys || chartData.csvKeys}
          groupMode={"stacked"}
          sampleSize={chartData.sampleSize}
          tableName={queryType === "sessionsData" ? "Sessions" : "Users"}
          setChartDataSM={setChartDataSM}
          chartData={chartData}
        />
      </>
    );
  } else {
    return <></>;
  }
};
export default GraphParse;
