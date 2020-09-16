import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { catLabelsAction } from "../Components/redux-actions/catLabels";
import { useDispatch } from "react-redux";

const GET_GRAPHLABELS = gql`
  query Labels {
    getGraphLabels
  }
`;

const QueryGraphLabels = () => {
  let { data } = useQuery(GET_GRAPHLABELS);

  const dispatch = useDispatch();
  dispatch(catLabelsAction(data));
  return <></>;
};
export default QueryGraphLabels;
