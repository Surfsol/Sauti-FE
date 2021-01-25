import { BUTTONS_SUCCESS } from "../redux-actions/buttonsToShow";

let initialState = {};

const buttonShowReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUTTONS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
export default buttonShowReducer;
