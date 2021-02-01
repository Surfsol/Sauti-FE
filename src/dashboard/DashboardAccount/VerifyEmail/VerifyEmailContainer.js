import React, { useEffect } from "react";
import { PasswordReset } from "../../styledComponents/DashAccount";
import { decodeToken } from "../../auth/Auth";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const Verify = gql`
  mutation validateUserEmail($validateEmail: newEditUserInput!) {
    validateEmail(input: $validateEmail) {
      ... on DatabankUser {
        id
        email
      }
      ... on Error {
        message
      }
    }
  }
`;

const VerifyEmailContainer = () => {
  const history = useHistory();
  let getToken = localStorage.getItem("resetToken");
  let decodedToken = decodeToken(getToken);
  let decodeTokenEXP = new Date(decodedToken.exp * 1000);
  const [verifyAccount] = useMutation(Verify);

  const makeVerified = async () => {
    try {
      const done = await verifyAccount({
        variables: {
          validateEmail: {
            id: decodedToken.id,
            email: decodedToken.email
          }
        }
      });
      if (done.data.validateEmail !== null) {
        swal({
          title: "Success",
          text: "Account verified. Please login.",
          icon: "success"
        });
        history.push("/login");
      }
    } catch (e) {
      swal({
        title: "Error",
        text: "Something went wrong. Please reset your password.",
        icon: "warning",
        dangerMode: true
      });
    }
  };

  useEffect(() => {
    if (decodeTokenEXP <= new Date()) {
      swal({
        title: "Error",
        text: "Verify account Link Has Expired. Please reset your password.",
        icon: "warning",
        dangerMode: true
      });
      history.push("/login");
    } else {
      makeVerified();
    }
  }, []);

  return (
    <PasswordReset>
      <div className="container">
        <div className="container-header">
          <h1>Hello</h1>
          <h2>{decodedToken.email}</h2>
        </div>
        <div className="container-stepper"></div>
      </div>
    </PasswordReset>
  );
};

export default VerifyEmailContainer;
