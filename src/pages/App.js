import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import LeasingRangeInput from "../components/LeasingRangeInput";
import PaymentRangeInput from "../components/PaymentRangeInput";
import PriceRangeInput from "../components/PriceRangeInput";
import TitledPrice from "../components/TitledPrice";
import { NekstBlackH1 } from "../styledComponents/Headers";
import { calcMonthlyPayment, calcSumLeasingPayment } from "../common/calc";
import { ConfirmButton } from "../styledComponents/Button";

function App() {
  const { price, payment, leasing, typingInput } = useSelector(
    (state) => state.input
  );
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
      <Title>Рассчитайте стоимость автомобиля в лизинг</Title>
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
        <TitledPrice
          price={monthlyPayment}
          title={"Ежемесячный платеж от"}
        />
        <ConfirmButton disabled={typingInput}>Оставить заявку</ConfirmButton>
      </RowContainer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 1440px;
  padding: 0 47px;
  height: 100%;
  margin: 0 auto;
`;

const Title = styled(NekstBlackH1)`
  width: 753px;
  text-align: left;
  margin-bottom: 32px;
`;

const RowContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 39px;
  column-gap: 32px;
  padding: 0;
  width: 100%;
  &:nth-of-type(1) {
    margin-bottom: 51px;
  }
`;
