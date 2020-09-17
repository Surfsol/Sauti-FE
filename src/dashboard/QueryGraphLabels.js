import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { catLabelsAction } from "../Components/redux-actions/catLabels";
import { useDispatch } from "react-redux";
import DashData from "./DashData";

const GET_GRAPHLABELS = gql`
  query Labels {
    getGraphLabels
  }
`;

const QueryGraphLabels = () => {
  let { data, loading, error } = useQuery(GET_GRAPHLABELS);

  const dispatch = useDispatch();
  dispatch(catLabelsAction(data));

  if (loading) {
    return <></>;
  }
  if (data) {
    return <DashData />;
  }
  if (error) {
    console.log(error);
    return <div>error in fetching graph labels</div>;
  }
};
export default QueryGraphLabels;
