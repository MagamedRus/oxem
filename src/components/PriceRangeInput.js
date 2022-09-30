import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { GilroyH3 } from "../styledComponents/Headers";
import { BoldP30 } from "../styledComponents/Paragraphs";
import ValuedRangeInput from "./ValuedRangeInput";
import {
  setTypingInput,
  setProcentPrice,
  setValuePrice,
} from "../store/action-creators/input";
import { numberWithSpaces } from "../common/composeNumber";
import { TransparentTextInput } from "../styledComponents/Inputs";
import { price as priceRange } from "../constants/calc";
import { roundIfFloat } from "../common/calc";
import { inputTypes } from "../constants/input";

const PriceRangeInput = () => {
  const price = useSelector((state) => state.input.price);
  const [value, setValue] = useState(price.value);
  const [isFocus, setIsFocus] = useState(false);

  const dispatch = useDispatch();
  const textInputRef = useRef();

  const onTextInput = (ev) => {
    let currValue = ev.target.value;
    currValue = parseInt(currValue.replaceAll(" ", "")) || 0;

    setValue(currValue);
    !textInputRef.typingTimer && setTypingState(true);
    clearTimeout(textInputRef.typingTimer);
    textInputRef.typingTimer = setTimeout(onEndType.bind(this, currValue), 500);
  };

  // Change is focus state for make input white
  const toggleFocus = () => setIsFocus((prevState) => !prevState);

  const onEndType = (currValue) => {
    textInputRef.typingTimer = null;
    dispatch(setValuePrice(currValue));
    setTypingState(false);
  };

  const setProcentValue = (procentValue) => {
    procentValue = roundIfFloat(procentValue);
    const currValue = (priceRange.min * procentValue) /100;
    currValue <= priceRange.min && dispatch(setProcentPrice(procentValue));
  };

  // Change is typing state in reducer
  const setTypingState = (isTyping) => {
    let typingState = isTyping ? inputTypes.PRICE : null;
    dispatch(setTypingInput(typingState));
  };
  // Set calced state from redux to inner state(;
  useEffect(() => setValue(price.value), [price]);

  return (
    <Container>
      <GilroyH3>Стоимость автомобиля</GilroyH3>
      <ValuedRangeInput
        value={price.procentValue}
        setValue={setProcentValue}
        step={4}
        isFocus={isFocus}
      >
        <ValueContainer>
          <TransparentTextInput
            ref={textInputRef}
            onFocus={toggleFocus}
            onBlur={toggleFocus}
            onInput={onTextInput}
            value={numberWithSpaces(value)}
          />
          <BoldP30>₽</BoldP30>
        </ValueContainer>
      </ValuedRangeInput>
    </Container>
  );
};

export default PriceRangeInput;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 427px;
  height: 119px;
`;

const ValueContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100%;
`;
