import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import { useDispatch } from "react-redux";
import dynamicText from "../../Components/dynamicText";
import { makeStyles } from "@material-ui/core/styles";
import CheckBox from "../CheckBox";

import { getHighestSelected } from "../LineGraphHelpers/selectedCheckboxes";

import "../../Components/scss/lineGraph.scss";
import LineRange from "./LineRange";
import { lineAction } from "../redux-actions/lineActions";
import Grid from "@material-ui/core/Grid";
import { barDownload } from "../redux-actions/barDownloadAction";
import { downloadLine } from "./downloadLine";

import NoDataParent from "./NoDataParent";

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
const GraphTime = ({
  month100,
  quarter100,
  year100,
  top7,
  checkboxes,
  filter0,
  additionalFiltersArray
}) => {
  const [time, setTime] = useState([]);
  const [timeInUse, setTimeInUse] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [noDataModal, setNoDataModal] = useState(true);
  const classes = useStyles();
  useEffect(() => {
    setNoDataModal(true);
  });

  useEffect(() => {
    setTime(month100);
    setCheckedItems(top7);
    setTimeInUse(month100);
  }, [month100, top7]);

  function noData() {
    if (noDataModal) {
      return (
        <NoDataParent
          setNoDataModal={setNoDataModal}
          noDataModal={noDataModal}
        />
      );
    } else {
      return <></>;
    }
  }

  let display = [];
  if (checkedItems && Object.entries(checkedItems).length > 0) {
    for (let i = 0; i < Object.entries(checkedItems).length; i++) {
      let bbb = Object.entries(checkedItems)[i];
      if (bbb.includes(true)) {
        display.push(bbb[0]);
      }
    }
  } else {
    {
      noData();
    }
  }
  //dynamic Methodology Text
  let dyText = "";
  for (let key in dynamicText) {
    if (filter0["selectedCategory"] === key) {
      dyText = dynamicText[key];
    }
  }

  //multiple functions onClick
  function moOnClick(event) {
    setTime(month100);
    setTimeInUse(month100);
  }

  function qtrOnClick(event) {
    setTime(quarter100);
    setTimeInUse(quarter100);
  }

  function yrOnClick(event) {
    setTime(year100);
    setTimeInUse(year100);
  }

  //checkboxs to display individual lines
  function handleChange(event) {
    let selected = event.target.name;
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked
    });
  }

  // items to display on line chart
  const zero = display[0];
  const one = display[1];
  const two = display[2];
  const three = display[3];
  const four = display[4];
  const five = display[5];
  const six = display[6];
  const seven = display[7];
  const eight = display[8];
  const nine = display[9];

  let highest = getHighestSelected(time, display);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      lineAction({
        checkboxes: checkboxes,
        handleChange: handleChange,
        handleReset: handleReset,
        checkedItems: checkedItems,
        setCheckedItems: setCheckedItems
      })
    );
  }, [checkboxes, handleReset, handleChange, checkedItems]);

  //To reset all selected checkboxes
  const handleReset = event => {
    setCheckedItems(checkedItems);
  };

  let arrayDownload = [];
  time.length > 1
    ? (arrayDownload = downloadLine(time, filter0))
    : console.log("");

  let filtersIncluded = "";
  if (additionalFiltersArray.length > 0) {
    filtersIncluded = `Filters:  ${additionalFiltersArray}`;
  }

  useEffect(() => {
    if (arrayDownload.length > 1) {
      dispatch(
        barDownload({
          columns: [
            {
              id: "165",
              displayName: `Data Series: ${filter0.selectedCategory}, ${filtersIncluded}`
            }
          ],
          makeValues: arrayDownload,
          fileName: "Line Graph",
          suffix: `${new Date().toISOString()}`,
          track: "track"
        })
      );
    }
  }, [arrayDownload]);

  return (
    <>
      <Grid container style={{ height: "80vh" }}>
        <div className="toggleDateContainer">
          <p
            className={time === month100 ? "monthBtnOn" : "monthBtnOff"}
            onClick={moOnClick}
          >
            {" "}
            Monthly
          </p>
          <p
            className={time === quarter100 ? "monthBtnOn" : "monthBtnOff"}
            onClick={qtrOnClick}
          >
            {" "}
            Quarterly
          </p>
          <p
            className={time === year100 ? "monthBtnOn" : "monthBtnOff"}
            onClick={yrOnClick}
          >
            {" "}
            Yearly
          </p>
        </div>
        <Grid container style={{ width: "95%", height: "70vh" }}>
          <ResponsiveContainer>
            <LineChart
              data={time}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis type="number" domain={[0, highest]} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey={zero}
                stroke="blue"
                dot={false}
                // activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey={one} stroke="purple" dot={false} />
              <Line type="monotone" dataKey={two} stroke="orange" dot={false} />
              <Line
                type="monotone"
                dataKey={three}
                stroke="green"
                dot={false}
              />
              <Line type="monotone" dataKey={four} stroke="red" dot={false} />
              <Line type="monotone" dataKey={five} stroke="tan" dot={false} />
              <Line type="monotone" dataKey={six} stroke="black" dot={false} />
              <Line
                type="monotone"
                dataKey={seven}
                stroke="brown"
                dot={false}
              />
              <Line
                type="monotone"
                dataKey={eight}
                stroke="chartreuse"
                dot={false}
              />
              <Line
                type="monotone"
                dataKey={nine}
                stroke="darkslategrey"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
          <LineRange timeInUse={timeInUse} time={time} setTime={setTime} />
          <Grid item className={classes.dyContainer}>
            <h2>Method Notes</h2>
            <div dangerouslySetInnerHTML={{ __html: dyText }}></div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default GraphTime;
