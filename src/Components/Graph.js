import React, { useState, useEffect } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Event } from "../dashboard/GoogleAnalytics/index";
import styled from "styled-components";
import { getSelectedOption } from "../OptionFunctions";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { barDownload } from "../Components/redux-actions/barDownloadAction";
import Grid from "@material-ui/core/Grid";
import dynamicText from "./dynamicText";
import { applyAction } from "../Components/redux-actions/applyAction";
import { selectedFiltersAction } from "./redux-actions/selectedFiltersAction";
import { chartDataAction } from "./redux-actions/chartDataAction";
import { makeStyles } from "@material-ui/core/styles";

const Graph = props => {
  let {
    data,
    csvData,
    filters,
    keys,
    groupMode,
    sampleSize,
    tableName,
    //setChartDataSM,
    chartData
  } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const [chartDataSM, setChartDataSM] = useState([]);
  let dyText = "";
  for (let key in dynamicText) {
    if (filters[0]["selectedCategory"] === key) {
      dyText = dynamicText[key];
    }
  }

  const setApplyReducer = useSelector(state => state.setApplyReducer);
  let applyNow = setApplyReducer.applyNow;
  const setApplyNow = setApplyReducer.setApplyNow;

  const [csvDownload, setCsvDownload] = useState([]);
  let makeValues = data => {
    return data.map(obj => {
      return Object.values(obj);
    });
  };
  const AddFilters = () => {
    let arr = [];
    for (let key in filters) {
      if (key > 1 && filters[key]["selectedCategory"] !== "") {
        let choices = filters[key]["selectableOptions"];
        let cat = filters[key]["selectedCategory"];
        let sel;
        for (let item in filters[key]["selectableOptions"]) {
          if (choices[item] === true) {
            sel = item;
          }
        }
        arr.push(`${cat}:${sel}`);
      }
    }
    return arr;
  };

  const compareBy = () => {
    let arr = [];
    for (let key in filters) {
      if (key == 1) {
        let choices = filters[key]["selectableOptions"];
        let cat = filters[key]["selectedCategory"];
        let sel;
        for (let item in filters[key]["selectableOptions"]) {
          if (choices[item] === true) {
            sel = item;
          }
        }
        arr.push(`${cat}`);
      }
    }
    return arr;
  };

  const makeHeaders = data => {
    let varAddFilters = AddFilters();
    if (varAddFilters.length > 0) {
      varAddFilters = `Filters: ${varAddFilters}`;
    }
    if (!filters[1].selectedCategory) {
      return [
        {
          id: `${65}`,
          displayName: `${filters[0].selectedTableColumnName}`
        },
        // instead of the subsample keys we put in the total count
        {
          id: `${66}`, // random value
          displayName: `Total Count`
        },
        {
          id: `${67}`, // random value
          displayName: `% of Sample Size`
        },
        {
          id: `${68}`,
          displayName: `Sample Size: ${sampleSize}`
        },
        {
          id: `${69}`,
          displayName: varAddFilters
        }
      ];
    } else {
      let varCompare = `Compare Data: ${compareBy()}  ${varAddFilters}`;
      return [
        {
          id: `${65}`,
          displayName: `${filters[0].selectedTableColumnName}`
        },
        ...keys,
        {
          displayName: varCompare
        }
      ];
    }
  };

  // the download
  let csvFormater = data => {
    // the subsample case is messed up
    // if the user selected a subsample
    if (filters[1].selectedCategory.length > 0) {
      // clean up the duplicate rows containing dataItem[filters[0].selectedTableColumnName]] as a value
      let newData = [];
      let newDataCache = {};
      data.forEach(dataItem => {
        // if dataItem[filters[0].selectedTableColumnName] is in object.keys(newDataCache)
        // assume dataItem[filters[0].selectedTableColumnName] exists
        if (!newDataCache[dataItem[filters[0].selectedTableColumnName]]) {
          newData = [...newData, dataItem];

          newDataCache = {
            ...newDataCache,
            [dataItem[filters[0].selectedTableColumnName]]: 1
          };
        }
      });
      data = newData;
    }

    if (Object.keys(filters).length >= 2) {
      data = data.map(obj => {
        // calculate the additional filters
        let additionalCategories = {};
        Object.keys(filters)
          .filter(filterId => filterId >= 2)
          .forEach(filterId => {
            additionalCategories = {
              ...additionalCategories,
              [filters[filterId].selectedCategory]: getSelectedOption(
                filters,
                filterId
              )
            };
          });
        // case for the non subsamples
        if (filters[1].selectedCategory.length === 0) {
          return {
            ...obj, // all minus additional filters
            percentage: (
              (obj[obj[filters[0].selectedTableColumnName]] / sampleSize) *
              100
            ).toFixed(2)
            // ...additionalCategories // additional filters
          };
        } else {
          // the subsamples(filters[1]) don't have an item count for calculating percentages

          return {
            ...obj // all minus additional filters
            //...additionalCategories // additional filters
          };
        }
      });
    }
    // dummy sample size
    // data = [...data, {sampleSize: 30}]
    // we already have the data here
    // add a percentage column here using sampleSize
    return data;
  };

  let fileName = "";
  fileName = `${filters[0].selectedTableColumnName &&
    filters[0].selectedTableColumnName}${filters[1].selectedCategory &&
    "_by_" + filters[1].selectedCategory}${filters[2].selectedCategory &&
    `_where_${filters[2].selectedCategory}:(${
      Object.values({
        [filters[2].selectedCategory]: getSelectedOption(filters, 2)
      })[0]
    })`}`;

  let track = Event(fileName, "Downloaded Excel");

  useEffect(() => {
    setCsvDownload(csvFormater(csvData));
  }, [csvData]);
  const socialMediaLink = useHistory().location.search;
  useEffect(() => {
    dispatch(
      barDownload({
        makeValues: makeValues(csvDownload),
        columns: makeHeaders(csvDownload),
        fileName: fileName,
        suffix: `${new Date().toISOString()}`,
        track: track
      })
    );
  }, [makeValues, makeHeaders]);

  useEffect(() => {
    setChartDataSM(chartData);
    dispatch(
      chartDataAction({
        chart: chartData
      })
    );
  }, []);

  //fire apply button
  if (setApplyNow && applyNow) {
    dispatch(
      applyAction({
        apply: true
      })
    );
    // will change display of filters selected
    dispatch(
      selectedFiltersAction({
        selected: true
      })
    );
    setApplyNow(false);
  }

  return (
    <>
      <Grid container style={{ height: "70vh" }}>
        <ResponsiveBar
          data={data}
          keys={keys}
          indexBy={filters[0].selectedTableColumnName}
          groupMode={groupMode} // Possibly add toggle selector to change group mode.
          margin={{ top: 50, right: 170, bottom: 75, left: 80 }}
          padding={0.3}
          innerPadding={3}
          maxValue={100}
          colors={{ scheme: "nivo" }}
          borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          axisTop={null}
          axisRight={null}
          tooltip={({ id, value }) => (
            <strong
              style={{
                color: "#000000",
                fontSize: "15px",
                fontFamily: "Helvetica"
              }}
            >
              {id}: {value}%
            </strong>
          )}
          labelFormat={d => <tspan y={-15}>{d}% </tspan>}
          labelForm={d => <text>{d}% </text>}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend:
              filters[0].selectedCategory +
              " (values as percent of total)," +
              ` sample size = ${sampleSize} ${tableName}`,
            legendPosition: "middle",
            legendDirection: "column",
            legendOffset: 35
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Percentage", // Possibly toggle percentage or number in future release
            legendPosition: "middle",

            legendOffset: -60
          }}
          labelSkipWidth={0}
          labelSkipHeight={0}
          labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: "left-to-right",
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
        />
        <Grid item className={classes.dyContainer}>
          <h2>Method Notes</h2>
          <div dangerouslySetInnerHTML={{ __html: dyText }}></div>
        </Grid>
      </Grid>
    </>
  );
};

export default Graph;

const DownloadText = styled.p`
  font-size: 1.6rem;
  opacity: 0.8;
  width: 100px;
  border: none;
  border-radius: 5px;
  padding: 8px 0;
  background-color: slategrey;
  color: white;
  font-weight: 500;
  text-align: center;
  margin: 0 10px;
  &:hover {
    background-color: slategrey;
    cursor: pointer;
    opacity: 1;
  }
`;
const FilterHideButton = styled.button`
  padding: 8px 5px;
  background: #eb5e52;
  font-weight: 400;
  color: white;
  border-radius: 5px;
  font-size: 1.4rem;
  width: 95px;
  opacity: 0.75;
  border: none;
  &: hover {
    cursor: pointer;
    opacity: 1;
  }
`;
const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 0.5px solid lightgrey;
  padding: 5px;
  margin-bottom: 5px;
  font-size: 1.6rem;
`;
const SocialMediaIconsTwitter = styled.a`
  font-size: 2.5rem;
  margin: 0 10px;
  color: rgb(0, 172, 238);
  opacity: 0.75;
  &:hover {
    opacity: 1;
  }
`;
const SocialMediaIconsFacebook = styled.a`
  font-size: 2.5rem;
  margin: 0 10px;
  color: rgb(59, 89, 152);
  opacity: 0.75;
  &:hover {
    opacity: 1;
  }
`;

const CopyUrlButton = styled.button`
  padding: 8px 5px;
  background: #47837f;
  font-weight: 400;
  color: white;
  border-radius: 5px;
  font-size: 1.4rem;
  width: 95px;
  opacity: 0.75;
  border: none;
  margin: 0 10px;
  &: hover {
    cursor: pointer;
    opacity: 1;
  }
`;
const ContentContainerDiv = styled.div`
  border-right: 1px solid lightgrey;
  margin-right: 2px;
`;
const IconContainer = styled.span`
  display: flex;
  font-size: 1.8rem;
  align-items: center;
`;
const ShareDiv = styled.div`
  margin-right: 5px;
`;
const useStyles = makeStyles(theme => ({
  dyContainer: {
    width: "100%",
    padding: "0em 2em",
    fontSize: "1.0em",
    marginLeft: "-1px",
    borderLeft: "1px solid #00000045",
    "& h2": {
      fontWeight: 600,
      fontSize: "1.2em",
      paddingBottom: "10px"
    }
  }
}));
