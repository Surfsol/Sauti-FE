import { FROMNAV } from "../redux-actions/fromNavAction";

const initialState = {
  navLink: ""
};

const fromNavReducer = (state = initialState, action) => {
  switch (action.type) {
    case FROMNAV:
      return {
        ...state,
        navLink: action.payload
      };
    default:
      return state;
  }
};
export default fromNavReducer;
