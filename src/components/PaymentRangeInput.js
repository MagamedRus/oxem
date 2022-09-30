import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { GilroyH3 } from "../styledComponents/Headers";
import { BoldP30 } from "../styledComponents/Paragraphs";
import ValuedRangeInput from "./ValuedRangeInput";
import {
  setIsTyping,
  setProcentPaymant,
  setValuePaymant,
} from "../store/action-creators/input";
import { numberWithSpaces, deleteLastNumber } from "../common/composeNumber";
import { TransparentTextInput } from "../styledComponents/Inputs";
import { backspaceTypeInput } from "../common/onInputTypes";

const PaymentRangeInput = () => {
  const payment = useSelector((state) => state.input.payment);
  const price = useSelector((state) => state.input.price);
  const [value, setValue] = useState(payment.value);
  const [isFocus, setIsFocus] = useState(false);

  const dispatch = useDispatch();
  const textInputRef = useRef();

  const setProcentValue = (procentValue) =>
    dispatch(setProcentPaymant(procentValue, price.value));

  //Set value in store after end of typing
  const setDeboundedInput = (currValue) => {
    currValue = parseInt(currValue) || 0;
    !textInputRef.typingTimer && setTypingState(true);
    clearTimeout(textInputRef.typingTimer);
    textInputRef.typingTimer = setTimeout(onEndType.bind(null, currValue), 500);
  };

  useEffect(() => {
    dispatch(setProcentPaymant(payment.procentValue, price.value));
  }, [dispatch, payment.procentValue, price]);

  // Change is focus state for make input white
  const toggleFocus = () => setIsFocus((prevState) => !prevState);

  const onTextInput = (event) => {
    const inputType = event.nativeEvent.inputType;
    let currValue = event.target.value.replaceAll(" ", "").replaceAll("₽", "");
    if (inputType === backspaceTypeInput) {
      currValue = deleteLastNumber(currValue);
    }
    setValue(currValue);
    setDeboundedInput(currValue);
  };

  // Change is typing state in reducer
  const setTypingState = (isTyping) => dispatch(setIsTyping(isTyping));

  const onEndType = (currValue) => {
    dispatch(setValuePaymant(currValue, price.value));
    setTypingState(false);
  };

  // Set calced state from redux to inner state(;
  useEffect(() => setValue(payment.value), [payment]);

  return (
    <Container>
      <GilroyH3>Первоначальный взнос</GilroyH3>
      <ValuedRangeInput
        isFocus={isFocus}
        value={payment.procentValue}
        setValue={setProcentValue}
      >
        <ValueContainer>
          <TransparentTextInput
            value={`${numberWithSpaces(value)} ₽`}
            onFocus={toggleFocus}
            onInput={onTextInput}
            onBlur={toggleFocus}
            ref={textInputRef}
          />
          <ProcentBoldP20>{payment.procentValue}%</ProcentBoldP20>
        </ValueContainer>
      </ValuedRangeInput>
    </Container>
  );
};

export default PaymentRangeInput;

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

const ProcentBoldP20 = styled(BoldP30)`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  left: 18px;
  font-size: 20px;
  width: 69px;
  height: 54px;
  background: #ebebec;
  border-radius: 16px;
`;
