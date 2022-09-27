import React from "react";
import styled from "styled-components";
import { NekstBlackH2 } from "../styledComponents/Headers";
import { StyledRangeInput } from "../styledComponents/Inputs";

const ValuedRangeInput = ({ setValue, value, min, max, children }) => {
  const onInput = (val) => setValue(val.target.value);

  return (
    <Container>
      {children || <NekstBlackH2>{value}</NekstBlackH2>}
      <StyledRangeInput
        step={5}
        min={min || 0}
        max={max || 100}
        value={value}
        onInput={onInput}
      />
    </Container>
  );
};

export default ValuedRangeInput;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 68px;
  width: 100%;
  padding: 0 24px;
  background: #f3f3f4;
  border-radius: 16px;
`;
