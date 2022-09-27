import styled, { css } from "styled-components";

const sliderThumbStyles = css`
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  background: #ff9514;
  cursor: pointer;
  position: relative;
  top: -10px;
`;

const animatedSlider = css`
  background-image: linear-gradient(#ff9514, #ff9514);
  background-repeat: no-repeat;
  ${(props) =>
    css`
      background-size: ${props.val}% 100%;
    `}
`;

export const StyledRangeInput = styled.input.attrs({
  type: "range",
})`
  -webkit-appearance: none;
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.6);
  background: #e1e1e1;
  margin: 0;
  &::-ms-track {
    width: 100%;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  &:focus {
    outline: none;
  }

  &::-webkit-slider-thumb {
    ${sliderThumbStyles}
  }
  &::-moz-range-thumb {
    ${sliderThumbStyles}
  }
  &::-ms-thumb {
    ${sliderThumbStyles}
  }
  &::-webkit-slider-runnable-track {
    height: 2px;
    border-radius: 1px 1px 0 0;
    ${animatedSlider}
  }
`;
