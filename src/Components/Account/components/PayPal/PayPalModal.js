import React from "react";
import styled from "styled-components";
import { ContentContainer } from "../../../../dashboard/styledComponents/Index";
import MonthlyPayPal from "../MonthlyPayPal";

export const Div = styled.div`
  width: 500px;
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  text-align: center;
  border-radius: 10px;
`;
export const FormTitle = styled.h1`
  font-weight: 500;
  font-size: 3rem;
  width: 75%;
  display: inline-block;
  padding-bottom: 0.75em;
`;

const BigX = styled.big`
  display: table;
  margin-left: auto;
  margin-top: -0.75em;
  margin-right: -0.75em;
  font-size: 2.5rem;
  font-weight: bold;
  padding: 0.25em;
  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.12);
    border-radius: 50%;
  }
`;

const PayPalModal = ({ setGetSub }) => {
  return (
    <ContentContainer>
      <div>
        <Div>
          <BigX onClick={() => setGetSub(false)}>X</BigX>
          <div style={{ marginTop: "1.5em" }}>
            <FormTitle>Select a payment option</FormTitle>
            <FormTitle>
              {" "}
              <MonthlyPayPal />
            </FormTitle>
          </div>
        </Div>
      </div>
    </ContentContainer>
  );
};
export default PayPalModal;
