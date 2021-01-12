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
`;

const BigX = styled.big`
  margin-left: 420px;
  font-size: 2.5rem;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    color: red;
  }
`;

const PayPalModal = ({ setGetSub }) => {
  return (
    <ContentContainer>
      <div>
        <Div>
          <BigX onClick={() => setGetSub(false)}>X</BigX>
          <FormTitle>Select a payment option</FormTitle>
          <FormTitle>
            {" "}
            <MonthlyPayPal />
          </FormTitle>
        </Div>
      </div>
    </ContentContainer>
  );
};
export default PayPalModal;
