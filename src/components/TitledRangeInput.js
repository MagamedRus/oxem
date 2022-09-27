import React from "react";
import styled from "styled-components";
import { StyledH3 } from "../styledComponents/Headers";
import RangeInput from "./RangeInput";

const TitledRangeInput = ({ title, min, max, value, setValue }) => (
  <Container>
    <StyledH3>{title}</StyledH3>
    <RangeInput min={min} max={max} value={value} setValue={setValue} />
  </Container>
);

export default TitledRangeInput;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 119px;
  width: 100%;
`;
