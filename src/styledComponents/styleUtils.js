import { css } from "styled-components";

export const disabledInput = css`
  pointer-events: none;
  filter: invert(10%) brightness(110%);
`;

export const disabledButton = css`
  pointer-events: none;
  filter: grayscale(60%) brightness(130%);
`;
