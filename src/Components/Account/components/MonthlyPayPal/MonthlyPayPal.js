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

  console.log("before useEffect");

  useEffect(function renderPaypalButtons() {
    window.paypal
      .Buttons({
        // env: "sandbox",
        // style: {
        //   shape: "rect",
        //   size: "responsive",
        //   color: "blue",
        //   label: "paypal"
        // },

        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Access to Sauti Trader Insights",
                amount: {
                  currency_code: "USD",
                  value: 60.0
                }
              }
            ]
            // may need to pay to for recurring billing
            // https://www.paypalobjects.com/webstatic/mktg/docs/installment_plan_button_guide112012.pdf
            // will need a plan id
            // https://www.paypal.com/us/brc/article/setting-up-recurring-payments-for-business#:~:text=Log%20into%20your%20PayPal%20Business,subscription%20plan%2C%20click%20Create%20Plan.
            // plan_id: "P-6JA0861167729345SVCC4YBI"
            //plan_id: "P-7EN28541UP360613GLZZF7FQ"
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
