import React from "react";
import styled from "styled-components";
import { numberWithSpaces } from "../common/composeNumber";
import { GilroyH3 } from "../styledComponents/Headers";
import { BoldP30 } from "../styledComponents/Paragraphs";

const TitledPrice = ({ price, title }) => (
  <Container>
    <Title>{title}</Title>
    <BoldP30>{numberWithSpaces(price)} ₽</BoldP30>
  </Container>
);

export default TitledPrice;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 49px;
  width: 100%;
  max-width: 427px;
`;

const Title = styled(GilroyH3)`
  line-height: 24px;
`;
