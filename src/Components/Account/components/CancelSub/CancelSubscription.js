import React, { useState } from "react";
import { getToken, decodeToken, getSubscription } from "../auth/authorization";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import Loader from "react-loader-spinner";
import CancelAccount from "./CancelAccount";

const NewSubscriberHandler = props => {
  const token = getToken();

  let accEmail;
  if (token) {
    accEmail = decodeToken(token);
    accEmail = accEmail.email;
  }
  const newSub = getSubscription();
  let sub;
  if (newSub) {
    sub = newSub;
  }

  const GET_SUBSCRIPTION_ID = gql`
    query($userEmail: String!) {
      databankUser(input: { email: $userEmail }) {
        id
        email
        subscription_id
        p_next_billing_time
        paypal_plan
      }
    }
  `;

  const { loading: fetching, error: err, data, refetch } = useQuery(
    GET_SUBSCRIPTION_ID,
    {
      variables: { userEmail: accEmail }
    }
  );

  if (fetching) {
    console.log("in fetching");
    return (
      <div className="loader-container">
        <Loader
          className="loader"
          type="Oval"
          color="#708090"
          width={100}
          timeout={12000}
        />
      </div>
    );
  }

  if (err) {
    return <h1>ERROR!</h1>;
  }

  return <CancelAccount data={data} />;
};

export default NewSubscriberHandler;
