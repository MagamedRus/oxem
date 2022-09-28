import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { NekstBlackH3 } from "../styledComponents/Headers";
import { BoldP30 } from "../styledComponents/Paragraphs";
import ValuedRangeInput from "./ValuedRangeInput";
import { setLeasingTerm } from "../store/action-creators/input";

const LeasingRangeInput = () => {
  const dispatch = useDispatch();
  const leasing = useSelector((state) => state.input.leasing);
  const setValue = (procentValue) => dispatch(setLeasingTerm(procentValue));

  return (
    <Container>
      <NekstBlackH3>Первоначальный взнос</NekstBlackH3>
      <ValuedRangeInput value={leasing.procentValue} setValue={setValue}>
        <ValueContainer>
          <BoldP30>{leasing.value}</BoldP30>
          <BoldP30>мес.</BoldP30>
        </ValueContainer>
      </ValuedRangeInput>
    </Container>
  );
};

export default LeasingRangeInput;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 119px;
  width: 300px;
`;

const ValueContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;
