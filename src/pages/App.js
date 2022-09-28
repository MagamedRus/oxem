import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import LeasingRangeInput from "../components/LeasingRangeInput";
import PaymentRangeInput from "../components/PaymentRangeInput";
import PriceRangeInput from "../components/PriceRangeInput";
import TitledPrice from "../components/TitledPrice";
import { NekstBlackH1 } from "../styledComponents/Headers";
import { calcMonthlyPayment, calcSumLeasingPayment } from "../common/calc";

function App() {
  const { price, payment, leasing } = useSelector((state) => state.input);
  const monthlyPayment = calcMonthlyPayment(
    payment.value,
    leasing.value,
    price.value
  );
  const sumLeasingPayment = calcSumLeasingPayment(
    payment.value,
    monthlyPayment,
    leasing.value
  );

  return (
    <Container>
      <NekstBlackH1>Рассчитайте стоимость автомобиля в лизинг</NekstBlackH1>
      <RowContainer>
        <PriceRangeInput />
        <PaymentRangeInput />
        <LeasingRangeInput />
      </RowContainer>
      <RowContainer>
        <TitledPrice
          price={sumLeasingPayment}
          title={"Сумма договора лизинга"}
        />
        <TitledPrice price={monthlyPayment} title={"Ежемесячный платеж от"} />
      </RowContainer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1440px;
  padding: 0 
  margin: auto 47px;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1440px;
  margin: auto;
`;
