import styled from "styled-components";
import { deviceSizes } from "../constants/styles/sizes";

export const BoldP30 = styled.p`
  font-family: "Nekst-Black";
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  color: #575757;
  margin: 0;

  @media ${deviceSizes.tabletS} {
    font-size: 22px;
    color: #333e48;
  }
`;
