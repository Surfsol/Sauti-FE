import React, { useEffect, useState } from "react";
import { getToken, decodeToken, getSubscription } from "../auth/authorization";
import gql from "graphql-tag";
import { useMutation, useQuery } from "@apollo/react-hooks";
import Loader from "react-loader-spinner";
import swal from "sweetalert";

const CANCEL_USER_SUB = gql`
  mutation updateUserToFree(
    $newUpdateUserToFreeInput: newUpdateUserToFreeInput!
  ) {
    updateUserToFree(input: $newUpdateUserToFreeInput) {
      ... on DatabankUser {
        email
        subscription_id
      }
      ... on Error {
        message
      }
    }
  }
`;

const NewSubscriberHandler = props => {
  const token = getToken();

  const [cancelledSub, setCancelledSub] = useState(false);
  useEffect(() => {
    if (cancelledSub) {
      // reload the page to show the user their subscription expiration date.
      window.location.reload();
    }
  }, [cancelledSub]);

  let tier;
  if (token) {
    tier = decodeToken(token);
    tier = tier.tier;
  }
  let userEmail;
  if (token) {
    userEmail = decodeToken(token);
    userEmail = userEmail.email;
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
      variables: { userEmail: userEmail }
    }
  );

  const [cancelSub, { loading, error }] = useMutation(CANCEL_USER_SUB);

  if (fetching) {
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

  const handleSubscriptionCancellation = async e => {
    // TODO: grab user's subscription_id with a query to DatabankUsers
    // newSub should be null unless the user has JUST signed up for premium through paypal.
    // Once a user has signed out and returned to the app, the users sub ID is tracked by GET_SUBSCRIPTION_ID.
    if (newSub) {
      console.log(newSub, "NEW SUB SUBSCRIBER HANDLER");
      await cancelSub({
        variables: {
          newUpdateUserToFreeInput: {
            email: userEmail,
            subscription_id: data.databankUser.subscription_id
          }
        }
      });
      // Refetch to get the p_next_billing_time and subscription_id
      refetch();
      // trigger a refresh of the page in a useEffect. This is to display to the user their subscription expiration date.
      setCancelledSub(true);
      swal({
        title: "",
        text: "Subscription cancellation has been processed.",
        icon: "success"
      });
    } else {
      swal({
        title: "",
        text: "Please re-log into your account to perform this action",
        icon: "warning"
      });
    }
  };

  return (
    <button className="cancel" onClick={handleSubscriptionCancellation}>
      Cancel Subscription
    </button>
  );
};

export default NewSubscriberHandler;
