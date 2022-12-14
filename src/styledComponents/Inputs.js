import styled, { css } from "styled-components";
import { deviceSizes } from "../constants/styles/sizes";

const sliderThumbStyles = css`
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border: 0;
  border-radius: 50%;
  background: #ff9514;
  cursor: pointer;
  position: relative;
  &:active {
    width: 24px;
    height: 24px;
  }
`;

const animatedSlider = css`
  background-image: linear-gradient(#ff9514, #ff9514);
  background-repeat: no-repeat;
  ${(props) =>
    css`
      background-size: ${props.value}% 100%;
    `}
`;

export const StyledRangeInput = styled.input.attrs({
  type: "range",
})`
  -webkit-appearance: none;
  height: 1px;
  background: rgba(255, 255, 255, 0.6);
  background: #e1e1e1;
  margin: 0;
  &::-ms-track {
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
`;

export const TransparentTextInput = styled.input.attrs({
  type: "text",
})`
  background: transparent;
  border: 0;
  width: 100%;
  height: 100%;
  font-family: "Nekst-Black";
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  color: #575757;
  outline: none;
  @media ${deviceSizes.tabletS} {
    font-size: 22px;
    line-height: 20px;
  }
`;

export const RangeSlider = styled.span`
  position: relative;
  top: -1px;
  height: 2px;
  border-radius: 1px 1px 0 0;
  ${animatedSlider};
`;
