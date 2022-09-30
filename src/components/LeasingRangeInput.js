import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { GilroyH3 } from "../styledComponents/Headers";
import { BoldP30 } from "../styledComponents/Paragraphs";
import ValuedRangeInput from "./ValuedRangeInput";
import {
  setTypingInput,
  setProcentLeasing,
  setValueLeasing,
} from "../store/action-creators/input";
import { TransparentTextInput } from "../styledComponents/Inputs";
import { leasingTerm } from "../constants/calc";
import { roundIfFloat } from "../common/calc";
import { inputTypes } from "../constants/input";

function LeasingRangeInput() {
  const [isFocus, setIsFocus] = useState(false);
  const leasing = useSelector((state) => state.input.leasing);
  const [value, setValue] = useState(leasing.value);

  const dispatch = useDispatch();
  const textInputRef = useRef();

  // Change is focus state for make input white
  const toggleFocus = () => setIsFocus((prevState) => !prevState);

  // On user input -> change state in reducer for this input type
  const onTextInput = async (ev) => {
    let currValue = ev.target.value;
    currValue = parseInt(currValue) || 0;
    setValue(currValue);
    !textInputRef.typingTimer && setTypingState(true);
    clearTimeout(textInputRef.typingTimer);
    textInputRef.typingTimer = setTimeout(onEndType.bind(this, currValue), 500);
  };

  const setProcentValue = (procentValue) => {
    procentValue = roundIfFloat(procentValue);
    const currValue = (leasingTerm.max * procentValue) / 100;
    currValue >= leasingTerm.min && dispatch(setProcentLeasing(procentValue));
  };

  // Change is typing state in reducer
  const setTypingState = (isTyping) => {
    let typingState = isTyping ? inputTypes.LEASING : null;
    dispatch(setTypingInput(typingState));
  };

  const onEndType = (currValue) => {
    textInputRef.typingTimer = null;
    dispatch(setValueLeasing(currValue));
    setTypingState(false);
  };

  // Set calced state from redux to inner state(;
  useEffect(() => setValue(leasing.value), [leasing]);

  return (
    <Container>
      <GilroyH3>Срок лизинга</GilroyH3>
      <ValuedRangeInput
        step={1.666} // 1.666 is 100(max procent) / 60(max value)
        value={leasing.procentValue}
        setValue={setProcentValue}
        isFocus={isFocus}
      >
        <ValueContainer>
          <TransparentTextInput
            onInput={onTextInput}
            value={value}
            onFocus={toggleFocus}
            onBlur={toggleFocus}
            ref={textInputRef}
          />
          <BoldP30>мес.</BoldP30>
        </ValueContainer>
      </ValuedRangeInput>
    </Container>
  );
}

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
