import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { GilroyH3 } from "../styledComponents/Headers";
import { BoldP30 } from "../styledComponents/Paragraphs";
import ValuedRangeInput from "./ValuedRangeInput";
import { setProcentPrice, setValuePrice } from "../store/action-creators/input";
import { numberWithSpaces } from "../common/composeNumber";
import { TransparentTextInput } from "../styledComponents/Inputs";

const PriceRangeInput = () => {
  const dispatch = useDispatch();
  const price = useSelector((state) => state.input.price);
  const setProcentValue = (procentValue) => dispatch(setProcentPrice(procentValue));

  const onTextInput = (ev) => {
    let value = ev.target.value;
    value = parseInt(value.replaceAll(" ", "").replaceAll("₽", "")) || 0;
    dispatch(setValuePrice(value, price.value));
  };


  return (
    <Container>
      <GilroyH3>Стоимость автомобиля</GilroyH3>
      <ValuedRangeInput value={price.procentValue} setValue={setProcentValue} step={4}>
        <ValueContainer>
          <TransparentTextInput
            onInput={onTextInput}
            value={numberWithSpaces(price.value)}
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
  height: 119px;
`;

const ValueContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100%;
`;
