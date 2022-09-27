import React from "react";
import styled from "styled-components";
import { StyledH2 } from "../styledComponents/Headers";
import { StyledRangeInput } from "../styledComponents/Inputs";

const RangeInput = ({ min, max, value, setValue }) => {
  const onInput = (val) => setValue(val.target.value);

  return (
    <Container>
      <StyledH2>{min}</StyledH2>
      <StyledRangeInput
        type={"range"}
        val={value}
        min={min || 0}
        max={max || 0}
        onInput={onInput}
      />
    </Container>
  );
};

export default RangeInput;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 68px;
  width: 100%;
  padding: 0 24px;
  background: #f3f3f4;
  border-radius: 16px;
`;
