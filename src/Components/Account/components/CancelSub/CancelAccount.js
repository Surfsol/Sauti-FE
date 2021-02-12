import React, { useState } from "react";
import gql from "graphql-tag";
import Loader from "react-loader-spinner";
import { useMutation } from "@apollo/react-hooks";
import swal from "sweetalert";
import { Button } from "@material-ui/core";

const CANCEL_USER_SUB = gql`
  mutation updateUserToExpired(
    $newUpdateUserToExpiredInput: newUpdateUserToExpiredInput!
  ) {
    updateUserToExpired(input: $newUpdateUserToExpiredInput) {
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

const CancelAccount = ({ data }) => {
  console.log({ data });
  const { subscription_id, email } = data.databankUser;

  const [userToCancel, setUserToCancel] = useState({
    email: email,
    subscription_id: subscription_id
  });
  console.log("in sub cancel");
  const [cancelSub, newUpdateUserToExpiredInput] = useMutation(CANCEL_USER_SUB);

  const handleSubscriptionCancellation = async () => {
    console.log("in handle");
    const subCancel = await cancelSub({
      variables: { newUpdateUserToExpiredInput: userToCancel }
    });
    console.log({ newUpdateUserToExpiredInput });
    console.log({ subCancel });

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
  );
};
export default CancelAccount;
