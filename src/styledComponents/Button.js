import styled from "styled-components";
import { disabledButton } from "./styleUtils";

export const ConfirmButton = styled.button`
  background: #ff9514;
  min-width: 300px;
  max-width: 427px;
  width: 100%;
  height: 60px;
  border-radius: 40px;
  border: 0;
  padding: 0;
  /* font */
  font-family: "Nekst-Black";
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  color: white;
  ${(props) => props.disabled && disabledButton}

  &:hover {
    background: black;
  }
  &:active {
    background: #575757;
  }
`;
