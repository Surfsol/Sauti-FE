import * as types from "../redux-actions/setApplyAction";

const initialState = {
  applyNow: "",
  setApplyNow: ""
};

const setApplyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SETAPPLY_SUCCESS:
      return {
        ...state,
        applyNow: action.payload.applyNow,
        setApplyNow: action.payload.setApplyNow
      };
    default:
      return state;
  }
};
export default setApplyReducer;
