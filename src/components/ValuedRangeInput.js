import React from "react";
import styled from "styled-components";
import { NekstBlackH2 } from "../styledComponents/Headers";
import { StyledRangeInput } from "../styledComponents/Inputs";

const ValuedRangeInput = ({
  setValue,
  value,
  children,
  ...initialRangeProps
}) => {
  const onInput = (val) => setValue(val.target.value);

  return (
    <Container>
      {children || <NekstBlackH2>{value}</NekstBlackH2>}
      <StyledRangeInput
        step={initialRangeProps.step || 2}
        min={initialRangeProps.min || 0}
        max={initialRangeProps.max || 100}
        value={value}
        onInput={onInput}
        {...initialRangeProps}
      />
    </Container>
  );
};

export default ValuedRangeInput;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 68px;
  
  padding: 0 24px;
  background: #f3f3f4;
  border-radius: 16px;
`;
