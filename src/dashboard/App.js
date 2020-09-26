import React from "react";
import DashNavBar from "./DashNavBar";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { catLabelsAction } from "../Components/redux-actions/catLabels";
import { useDispatch } from "react-redux";

const GET_GRAPHLABELS = gql`
  query Labels {
    getGraphLabels
  }
`;

function App() {
  let { data, loading, error } = useQuery(GET_GRAPHLABELS);

  const dispatch = useDispatch();
  dispatch(catLabelsAction(data));

  return (
    <div>
      <DashNavBar />
    </div>
  );
}

export default App;
