import * as types from "../redux-actions/applyAction";

const initialState = {
  apply: "False"
};

const applyActionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.APPLY_SUCCESS:
      return {
        ...state,
        apply: action.payload
      };
    default:
      return state;
  }
};
export default applyActionReducer;
