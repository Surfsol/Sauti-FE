import * as types from "../redux-actions/clearApplyAction";

//used when clear button pressed, so Apply Button does not appear
const initialState = {
  clear: false
};

const clearApplyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CLEAR_APPLY_SUCCESS:
      return {
        ...state,
        clear: action.payload
      };
    default:
      return state;
  }
};
export default clearApplyReducer;
