import React from "react";
import { combineReducers } from "redux";
import barDownloadReducer from "./barDownloadReducer";
import compareSubSamplesReducer from "./compareSubSamplesReducer";
import calendarReducer from "./calendarReducer";
import clearReducer from "./clearFiltersReducer";
import lineReducer from "./lineReducer";
import scrollReducer from "./scrollReducer";
import tierReducer from "./tierReducer";
import queriesReducer from "./queriesReducer";
import showNoAccessReducer from "./showNoAccessReducer";
import lineApplyReducer from "./lineApplyReducer";
import applyActionReducer from "./applyActionReducer";
import selectedReducer from "./selectedFiltersReducer";
import chartDataReducer from "./chartDataReducer";
import setApplyReducer from "./setApplyReducer";
import clearApplyReducer from "./clearApplyReducer";
import catLabelReducer from "./catReducer";
import fromNavReducer from "./fromNavReducer";

const rootReducer = combineReducers({
  barDownloadReducer,
  compareSubSamplesReducer,
  calendarReducer,
  clearReducer,
  lineReducer,
  scrollReducer,
  tierReducer,
  queriesReducer,
  showNoAccessReducer,
  lineApplyReducer,
  applyActionReducer,
  selectedReducer,
  chartDataReducer,
  setApplyReducer,
  clearApplyReducer,
  catLabelReducer,
  fromNavReducer
});
export default rootReducer;
