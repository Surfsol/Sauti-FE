import { CHARTDATA } from "../redux-actions/chartDataAction";

let initialState = {
  chart: {}
};

const chartDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHARTDATA:
      return {
        ...state,
        chart: action.payload
      };
    default:
      return state;
  }
};
export default chartDataReducer;
