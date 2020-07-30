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

const rootReducer = combineReducers({
  barDownloadReducer,
  compareSubSamplesReducer,
  calendarReducer,
  clearReducer,
  lineReducer,
  scrollReducer,
  tierReducer,
  queriesReducer,
  showNoAccessReducer
});
export default rootReducer;
