import React from "react";
import { ContentContainer } from "../../../dashboard/styledComponents/Index";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { queriesFilters } from "../../redux-actions/queriesAction";
import { filterReset } from "./reset";
import { clearApplyAction } from "../../redux-actions/clearApplyAction";

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

function NoDataModal({ setNoDataModal, setFilters, filters, handleApply }) {
  const reset = filterReset(filters);
  const dispatch = useDispatch();
  const clearReducer = useSelector(state => state.clearReducer.clear);
  const {
    setFilterBoxStartDate,
    setFilterBoxEndDate,
    setUpdateUrlFlag,
    getTodaysDate,
    updateUrlFlag
  } = clearReducer;

  function handleClose() {
    setNoDataModal(false);
    setFilters(reset);
    dispatch(queriesFilters({ filters: reset }));
    setFilterBoxStartDate("2017-01-01");
    setFilterBoxEndDate(getTodaysDate());
    setUpdateUrlFlag(!updateUrlFlag);
    handleApply(reset);
    dispatch(
      clearApplyAction({
        clear: true
      })
    );
  }

  return (
    <ContentContainer>
      <div>
        <Div>
          <BigX onClick={() => handleClose()}>X</BigX>
          <FormTitle>
            Sorry no data is found for this search. Please try again.
          </FormTitle>
        </Div>
      </div>
    </ContentContainer>
  );
}

export default NoDataModal;
