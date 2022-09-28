import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { GilroyH3 } from "../styledComponents/Headers";
import { BoldP30 } from "../styledComponents/Paragraphs";
import ValuedRangeInput from "./ValuedRangeInput";
import { setInitialPaymant } from "../store/action-creators/input";
import { numberWithSpaces } from "../common/composeNumber";

const PaymentRangeInput = () => {
  const dispatch = useDispatch();
  const payment = useSelector((state) => state.input.payment);
  const price = useSelector((state) => state.input.price);

  const setValue = useCallback(
    (procentValue) => dispatch(setInitialPaymant(procentValue, price.value)),
    [dispatch, price]
  );

  useEffect(() => {
    setValue(payment.procentValue);
  }, [payment.procentValue, setValue]);

  return (
    <Container>
      <GilroyH3>Первоначальный взнос</GilroyH3>
      <ValuedRangeInput value={payment.procentValue} setValue={setValue}>
        <ValueContainer>
          <BoldP30>{numberWithSpaces(payment.value)} ₽</BoldP30>
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
  width: 300px;
`;

const ValueContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
