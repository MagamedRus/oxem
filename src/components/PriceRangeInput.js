import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { NekstBlackH3 } from "../styledComponents/Headers";
import { BoldP30 } from "../styledComponents/Paragraphs";
import ValuedRangeInput from "./ValuedRangeInput";
import { setPrice } from "../store/action-creators/input";

const PriceRangeInput = () => {
  const dispatch = useDispatch();
  const price = useSelector((state) => state.input.price);
  const setValue = (procentValue) => dispatch(setPrice(procentValue));

  return (
    <Container>
      <NekstBlackH3>Стоимость автомобиля</NekstBlackH3>
      <ValuedRangeInput value={price.procentValue} setValue={setValue} step={5}>
        <ValueContainer>
          <BoldP30>{price.value}</BoldP30>
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
  width: 300px;
`;

const ValueContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;
