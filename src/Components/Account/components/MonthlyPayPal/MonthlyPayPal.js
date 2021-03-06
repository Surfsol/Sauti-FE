import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { decodeToken } from "../auth/authorization";
import { useMutation } from "@apollo/react-hooks";
import swal from "sweetalert";
import gql from "graphql-tag";

const UPDATE_USER_TIER = gql`
  mutation editAUser($newEditUser: newEditUserInput!) {
    editUser(input: $newEditUser) {
      ... on DatabankUser {
        id
        email
        tier
        organization_type
        token
        subscription_id
        paypal_plan
      }
      ... on Error {
        message
      }
    }
  }
`;

const UPDATE_USER_PLAN_NAME = gql`
  mutation addPaypalPlan($newUserPlan: newAddPaypalPlanInput!) {
    addPaypalPlan(input: $newUserPlan) {
      ... on DatabankUser {
        email
        paypal_plan
      }
      ... on Error {
        message
      }
    }
  }
`;

export default function MonthlyPayPal({ setGetSub }) {
  const [userUpdated] = useMutation(UPDATE_USER_TIER);
  const [addPlan] = useMutation(UPDATE_USER_PLAN_NAME);

  const history = useHistory();

  useEffect(function renderPaypalButtons() {
    window.paypal
      .Buttons({
        style: {
          shape: "rect",
          color: "blue",
          layout: "vertical",
          label: "subscribe"
        },
        createSubscription: (data, actions, err) => {
          return actions.subscription.create({
            plan_id: process.env.REACT_APP_MONTHLY_PLAN_ID // live
            // plan_id: "P-7EN28541UP360613GLZZF7FQ" // sandbox
          });
        },

        onApprove: async function(data, actions) {
          swal({
            title: "",
            text: "Your account has been upgraded to premium!",
            icon: "success"
          });
          setGetSub(false);

          const token = localStorage.getItem("token");
          const decoded = decodeToken(token);
          console.log("decoded token, after pay", decoded);
          // subscription id generated from onApprove
          decoded.subscription_id = data.subscriptionID;
          localStorage.setItem("xyz", decoded.subscription_id);
          decoded.tier = "PAID";
          delete decoded.iat;
          delete decoded.exp;

          await userUpdated({
            variables: { newEditUser: decoded }
          });

          const { id, tier, subscription_id, ...rest } = decoded;

          const newPlan = await addPlan({
            variables: { newUserPlan: rest }
          });

          if (newPlan) {
            swal({
              title: "",
              text: "Your account has been upgraded to premium!",
              icon: "success"
            });
          }
          history.push("/data");
        },
        onError: function(err) {
          // Show an error page here, when an error occurs
          console.error("err", err);
        }
      })
      .render("#paypal-button-container-monthly");
  }, []);
  return <Div id="paypal-button-container-monthly"></Div>;
}

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
