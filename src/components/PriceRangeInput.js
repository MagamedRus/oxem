import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { GilroyH3 } from "../styledComponents/Headers";
import { BoldP30 } from "../styledComponents/Paragraphs";
import ValuedRangeInput from "./ValuedRangeInput";
import { setPrice } from "../store/action-creators/input";
import { numberWithSpaces } from "../common/composeNumber";

const PriceRangeInput = () => {
  const dispatch = useDispatch();
  const price = useSelector((state) => state.input.price);
  const setValue = (procentValue) => dispatch(setPrice(procentValue));

  return (
    <Container>
      <GilroyH3>Стоимость автомобиля</GilroyH3>
      <ValuedRangeInput value={price.procentValue} setValue={setValue} step={5}>
        <ValueContainer>
          <BoldP30>{numberWithSpaces(price.value)}</BoldP30>
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
