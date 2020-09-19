import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { catLabelsAction } from "../Components/redux-actions/catLabels";
import { useDispatch } from "react-redux";
import DashData from "./DashData";
import Loader from "react-loader-spinner";

const GET_GRAPHLABELS = gql`
  query Labels {
    getGraphLabels
  }
`;

const QueryGraphLabels = () => {
  let { data, loading, error } = useQuery(GET_GRAPHLABELS);

  const dispatch = useDispatch();
  dispatch(catLabelsAction(data));
  console.log("loading", loading);
  if (loading) {
    return (
      <div className="loader-container">
        <Loader
          className="loader"
          type="Oval"
          color="#708090"
          width={100}
          timeout={100000}
        />
      </div>
    );
  }
  if (data) {
    return <DashData />;
  }
  if (error) {
    return <div>error in fetching graph labels</div>;
  }
};
export default QueryGraphLabels;
