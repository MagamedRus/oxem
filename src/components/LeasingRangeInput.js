import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { GilroyH3 } from "../styledComponents/Headers";
import { BoldP30 } from "../styledComponents/Paragraphs";
import ValuedRangeInput from "./ValuedRangeInput";
import {
  setProcentLeasing,
  setValueLeasing,
} from "../store/action-creators/input";
import { numberWithSpaces } from "../common/composeNumber";
import { TransparentTextInput } from "../styledComponents/Inputs";

const LeasingRangeInput = () => {
  const dispatch = useDispatch();
  const leasing = useSelector((state) => state.input.leasing);
  const setValue = (procentValue) => dispatch(setProcentLeasing(procentValue));

  const onTextInput = (ev) => {
    let value = ev.target.value;
    value = parseInt(value.replaceAll(" ", "").replaceAll("₽", "")) || 0;
    dispatch(setValueLeasing(value));
  };

  return (
    <Container>
      <GilroyH3>Срок лизинга</GilroyH3>
      <ValuedRangeInput
        step={1.666} // 1.666 is 100(max procent) / 60(max value)
        value={leasing.procentValue}
        setValue={setValue}
      >
        <ValueContainer>
          <TransparentTextInput
            onInput={onTextInput}
            value={numberWithSpaces(leasing.value)}
          />
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
`;

const ValueContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;
