import * as types from "../redux-actions/selectedFiltersAction";

const initialState = {
  selected: ""
};

const selectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SELECTEDFILTERS:
      return {
        ...state,
        selected: action.payload
      };
    default:
      return state;
  }
};
export default selectedReducer;
