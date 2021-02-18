import React, { useState } from "react";
import gql from "graphql-tag";
import Loader from "react-loader-spinner";
import { useMutation } from "@apollo/react-hooks";
import { Button } from "@material-ui/core";
import ShowCancelDate from "./ShowCancelDate";

const CANCEL_USER_SUB = gql`
  mutation updateUserToExpired(
    $newUpdateUserToExpiredInput: newUpdateUserToExpiredInput!
  ) {
    updateUserToExpired(input: $newUpdateUserToExpiredInput) {
      ... on DatabankUser {
        email
        subscription_id
        p_next_billing_time
      }
      ... on Error {
        message
      }
    }
  }
`;

const CancelAccount = ({ data }) => {
  const [showDate, setShowDate] = useState(false);
  const { subscription_id, email } = data.databankUser;

  const [userToCancel, setUserToCancel] = useState({
    email: email,
    subscription_id: subscription_id
  });
  const [cancelSub, newUpdateUserToExpiredInput] = useMutation(CANCEL_USER_SUB);

  const handleSubscriptionCancellation = async () => {
    const subCancel = await cancelSub({
      variables: { newUpdateUserToExpiredInput: userToCancel }
    });
    if (subCancel) {
      setShowDate(true);
    }

    if (newUpdateUserToExpiredInput.loading) {
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

    if (newUpdateUserToExpiredInput.error) {
      return <p>ERROR!</p>;
    }
  };
  return (
    <>
      <Button
        color="primary"
        variant="contained"
        fullWidth
        size="large"
        className="cancel"
        onClick={handleSubscriptionCancellation}
      >
        Cancel Subscription
      </Button>
      {showDate && <ShowCancelDate user={email} />}
    </>
  );
};
export default CancelAccount;
