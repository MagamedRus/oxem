import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { GilroyH3 } from "../styledComponents/Headers";
import { BoldP30 } from "../styledComponents/Paragraphs";
import ValuedRangeInput from "./ValuedRangeInput";
import {
  setTypingInput,
  setProcentPaymant,
  setValuePaymant,
} from "../store/action-creators/input";
import { numberWithSpaces, deleteLastNumber } from "../common/composeNumber";
import { TransparentTextInput } from "../styledComponents/Inputs";
import { backspaceTypeInput } from "../common/onInputTypes";
import { roundIfFloat } from "../common/calc";
import { initialPayment } from "../constants/calc";
import { inputTypes } from "../constants/input";
import {
  RangeValueContainer,
  TitledRangeContainer,
} from "../styledComponents/Containers";
import { deviceSizes } from "../constants/styles/sizes";

const PaymentRangeInput = () => {
  const { price, typingInput, payment } = useSelector((state) => state.input);
  const [value, setValue] = useState(payment.value);
  const [isFocus, setIsFocus] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const dispatch = useDispatch();
  const textInputRef = useRef();

  const setProcentValue = (procentValue) => {
    procentValue >= initialPayment.min &&
      procentValue <= initialPayment.max &&
      dispatch(setProcentPaymant(procentValue, price.value));
  };

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
  const setTypingState = (isTyping) => {
    let typingState = isTyping ? inputTypes.PAYMENT : null;
    dispatch(setTypingInput(typingState));
  };

  const onEndType = (currValue) => {
    textInputRef.typingTimer = null;
    dispatch(setValuePaymant(currValue, price.value));
    setTypingState(false);
  };

  // Set calced state from redux to inner state(;
  useEffect(() => {
    setValue(payment.value);
  }, [payment]);

  useEffect(() => {
    setIsDisabled(typingInput === inputTypes.PRICE);
  }, [typingInput]);

  return (
    <TitledRangeContainer>
      <GilroyH3>Первоначальный взнос</GilroyH3>
      <ValuedRangeInput
        isFocus={isFocus}
        isDisabled={isDisabled}
        value={payment.procentValue}
        setValue={setProcentValue}
      >
        <RangeValueContainer>
          <TransparentTextInput
            value={`${numberWithSpaces(value)} ₽`}
            onFocus={toggleFocus}
            onInput={onTextInput}
            onBlur={toggleFocus}
            ref={textInputRef}
          />
          <ProcentBoldP20>{roundIfFloat(payment.procentValue)}%</ProcentBoldP20>
        </RangeValueContainer>
      </ValuedRangeInput>
    </TitledRangeContainer>
  );
};

export default PaymentRangeInput;

const ProcentBoldP20 = styled(BoldP30)`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  left: 18px;
  font-size: 20px;
  width: 69px;
  height: 54px;
  background: rgba(224, 224, 224, .4);
  border-radius: 16px;

  @media ${deviceSizes.tabletS} {
    width: 67px;
    height: 48px;
    border-radius: 12px;
    font-size: 22px;
    left: 8px;
  }
`;
