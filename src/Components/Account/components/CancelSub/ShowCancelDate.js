import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import Loader from "react-loader-spinner";
import swal from "sweetalert";
import moment from "moment";

const GET_CANCEL_DATE = gql`
  query($userEmail: String!) {
    databankUser(input: { email: $userEmail }) {
      id
      email
      p_next_billing_time
      paypal_plan
    }
  }
`;

const ShowCancelDate = ({ user }) => {
  const { loading, error, data, refetch } = useQuery(GET_CANCEL_DATE, {
    variables: { userEmail: user }
  });

  if (loading) {
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

  if (error) {
    return <p>Err</p>;
  }
  if (data) {
    let mDate = moment(Number(data.databankUser.p_next_billing_time));
    let expDate = mDate.format("M/D/YYYY");
    swal({
      title: `Account ${data.databankUser.email}`,
      text: `Your subscription will be cancelled at the end of your billing date: ${expDate}`,
      icon: "success"
    });
  }

  return <></>;
};

export default ShowCancelDate;
