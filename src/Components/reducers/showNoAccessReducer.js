import { SHOWNOACCESS_SUCCESS } from "../redux-actions/showNoAccessAction";

const initialState = {
  show: {}
};

const showNoAccessReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOWNOACCESS_SUCCESS:
      return {
        ...state,
        show: action.payload
      };
    default:
      return state;
  }
};
export default showNoAccessReducer;
