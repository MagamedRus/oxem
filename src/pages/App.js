import React from "react";
import styled, { css } from "styled-components";
import { useSelector } from "react-redux";
import LeasingRangeInput from "../components/LeasingRangeInput";
import PaymentRangeInput from "../components/PaymentRangeInput";
import PriceRangeInput from "../components/PriceRangeInput";
import TitledPrice from "../components/TitledPrice";
import { NekstBlackH1 } from "../styledComponents/Headers";
import { calcMonthlyPayment, calcSumLeasingPayment } from "../common/calc";
import { ConfirmButton } from "../styledComponents/Button";
import { deviceSizes } from "../constants/styles/sizes";
import { VerticalCenterContainer } from "../styledComponents/Containers";

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
      <NekstBlackH1>Рассчитайте стоимость автомобиля в лизинг</NekstBlackH1>
      <RowContainerTop>
        <PriceRangeInput />
        <PaymentRangeInput />
        <LeasingRangeInput />
      </RowContainerTop>
      <RowContainerBottom>
        <TitledPrice
          price={sumLeasingPayment}
          title={"Сумма договора лизинга"}
        />
        <TitledPrice price={monthlyPayment} title={"Ежемесячный платеж от"} />
        <VerticalCenterContainer>
          <ConfirmButton disabled={typingInput}>Оставить заявку</ConfirmButton>
        </VerticalCenterContainer>
      </RowContainerBottom>
    </Container>
  );
}

export default App;

const rowStyles = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 39px;
  margin-top: 32px;
  column-gap: 32px;
  padding: 0;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 1440px;
  padding: 0 47px;
  min-height: 100vh;
  margin: 0 auto;

  @media ${deviceSizes.laptop} {
    grid-template-columns: 1fr 1fr;
    padding-top: 120px;
    padding-bottom: 50px;
    justify-content: flex-start;
    min-height: unset;
  }
  @media ${deviceSizes.tablet} {
    padding: 64px 36px;
  }

  @media ${deviceSizes.tabletS} {
    padding: 44px 21px;
  }
`;

const RowContainerTop = styled.div`
  ${rowStyles}
  @media ${deviceSizes.laptop} {
    row-gap: 39px;
    grid-template-columns: 1fr;
  }
  @media ${deviceSizes.tabletS} {
    margin-top: 32px;
    row-gap: 25px;
  }
`;

const RowContainerBottom = styled.div`
  ${rowStyles}
  margin-top: 51px;

  @media ${deviceSizes.laptop} {
    margin-top: 44px;
    row-gap: 44px;
    grid-template-columns: 1fr 1fr;
  }

  @media ${deviceSizes.tablet} {
    grid-template-columns: 1fr;
  }

  @media ${deviceSizes.tabletS} {
    margin-top: 25px;
    row-gap: 29px;
  }
`;
