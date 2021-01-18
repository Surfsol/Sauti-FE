import React from "react";
import { Redirect } from "react-router-dom";
import { defaultFilters } from "../dashboard/DataDashHelpers/filters";
import { useDispatch } from "react-redux";
import { queriesFilters } from "../Components/redux-actions/queriesAction";

function Logout(props) {
  const dispatch = useDispatch();
  dispatch(queriesFilters(defaultFilters));
  localStorage.removeItem("token");
  localStorage.removeItem("__paypal_storage__");
  localStorage.removeItem("xyz");
  return <Redirect to="/" />;
}

export default Logout;
