import React from "react";
import gql from "graphql-tag";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { catLabelsAction } from "../Components/redux-actions/catLabels";
import { useDispatch } from "react-redux";
import DashData from "./DashData";
import Loader from "react-loader-spinner";
import swal from "sweetalert";

const GET_GRAPHLABELS = gql`
  query Labels {
    getGraphLabels
  }
`;

const QueryGraphLabels = () => {
  let { data, loading, error } = useQuery(GET_GRAPHLABELS);
  const history = useHistory();
  const dispatch = useDispatch();
  dispatch(catLabelsAction(data));

  if (error) {
    history.push("/");
    swal({
      title: "Error",
      text: "Network Error, unable to load.",
      icon: "warning",
      dangerMode: true
    });
    return (
      <div className="loader-container">
        <Loader
          className="loader"
          type="Oval"
          color="#708090"
          width={100}
          timeout={100000}
        />
        <h1>Network Error, unable to load.</h1>
      </div>
    );
  }

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
};
export default QueryGraphLabels;
