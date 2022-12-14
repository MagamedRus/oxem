import React from "react";
import styled, { css } from "styled-components";
import { deviceSizes } from "../constants/styles/sizes";
import { NekstBlackH2 } from "../styledComponents/Headers";
import { RangeSlider, StyledRangeInput } from "../styledComponents/Inputs";
import { disabledInput } from "../styledComponents/styleUtils";

const ValuedRangeInput = ({
  setValue,
  value,
  children,
  isFocus,
  isDisabled,
  ...initialRangeProps
}) => {
  const onInput = (val) => setValue(val.target.value);

  return (
    <Container isDisabled={isDisabled} isFocus={isFocus}>
      {children || <NekstBlackH2>{value}</NekstBlackH2>}
      <StyledRangeInput
        step={initialRangeProps.step || 2}
        min={initialRangeProps.min || 0}
        max={initialRangeProps.max || 100}
        value={value}
        onInput={onInput}
        {...initialRangeProps}
      />
      <RangeSlider value={value} />
    </Container>
  );
};

export default ValuedRangeInput;

const whiteBackgroundContent = css`
  background: white;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 64px;
  padding: 0 20px;
  border: 2px solid #f3f3f4;
  background: #f3f3f4;
  border-radius: 16px;
  ${(props) => props.isFocus && whiteBackgroundContent}
  ${(props) => props.isDisabled && disabledInput}

  @media ${deviceSizes.tabletS} {
    height: 56px;
    padding: 0 16px;
  }
`;
