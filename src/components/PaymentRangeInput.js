import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { GilroyH3 } from "../styledComponents/Headers";
import { BoldP30 } from "../styledComponents/Paragraphs";
import ValuedRangeInput from "./ValuedRangeInput";
import {
  setProcentPaymant,
  setValuePaymant,
} from "../store/action-creators/input";
import { numberWithSpaces } from "../common/composeNumber";
import { TransparentTextInput } from "../styledComponents/Inputs";

const PaymentRangeInput = () => {
  const dispatch = useDispatch();
  const payment = useSelector((state) => state.input.payment);
  const price = useSelector((state) => state.input.price);

  const setProcentValue = (procentValue) =>
    dispatch(setProcentPaymant(procentValue, price.value));

  const onTextInput = (val) =>
    dispatch(setValuePaymant(val.target.value, price.value));

  useEffect(() => {
    dispatch(setProcentPaymant(payment.procentValue, price.value));
  }, [dispatch, payment.procentValue, price.value]);

  return (
    <Container>
      <GilroyH3>Первоначальный взнос</GilroyH3>
      <ValuedRangeInput value={payment.procentValue} setValue={setProcentValue}>
        <ValueContainer>
          <TransparentTextInput
            onInput={onTextInput}
            value={`${numberWithSpaces(payment.value)} ₽`}
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
