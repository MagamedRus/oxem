import React from "react";
import styled from "styled-components";
import { numberWithSpaces } from "../common/composeNumber";
import { deviceSizes } from "../constants/styles/sizes";
import { GilroyH3 } from "../styledComponents/Headers";
import { BoldP30 } from "../styledComponents/Paragraphs";

const TitledPrice = ({ price, title }) => (
  <Container>
    <Title>{title}</Title>
    <Paragraph>{numberWithSpaces(price)} ₽</Paragraph>
  </Container>
);

export default TitledPrice;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 150px;
  max-width: 427px;
  height: 86px;

  @media ${deviceSizes.tabletS} {
    height: 41px;
  }
`;

const Title = styled(GilroyH3)`
  line-height: 24px;
color: #333333;
  @media ${deviceSizes.tabletS} {
    font-size: 14px;
    line-height: 20px;
  }
`;

const Paragraph = styled(BoldP30)`
  font-size: 54px;
  line-height: 90%;
  color: #333333;
  @media ${deviceSizes.tabletS} {
    font-size: 22px;
    line-height: 20px;
  }
`;
