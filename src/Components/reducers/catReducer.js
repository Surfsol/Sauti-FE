import { LABELS_SUCCESS } from "../redux-actions/catLabels";

const initialState = {
  labels: {}
};
const catLabelReducer = (state = initialState, action) => {
  switch (action.type) {
    case LABELS_SUCCESS:
      return {
        ...state,
        labels: action.payload
      };
    default:
      return state;
  }
};
export default catLabelReducer;
