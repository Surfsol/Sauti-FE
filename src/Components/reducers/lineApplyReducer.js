import { LINE_APPLY_SUCCESS } from "../redux-actions/lineApplyAction";

const initialState = {
  lineApply: {}
};

const lineApplyReducer = (state = initialState, action) => {
  switch (action.type) {
    case LINE_APPLY_SUCCESS:
      return {
        ...state,
        lineApply: action.payload
      };
    default:
      return state;
  }
};
export default lineApplyReducer;
