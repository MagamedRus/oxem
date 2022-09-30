import styled from "styled-components";
import { deviceSizes } from "../constants/styles/sizes";

export const NekstBlackH1 = styled.h1`
  font-family: "Nekst-Black";
  font-style: normal;
  font-weight: 900;
  font-size: 54px;
  line-height: 90%;
  max-width: 753px;
  min-width: 500px;
  text-align: left;
  color: #111111;
  margin: 0;

  @media ${deviceSizes.tabletS} {
    font-size: 34px;
    min-width: 250px;
  }
`;

export const NekstBlackH2 = styled.h2`
  margin: auto 24px;
  font-family: "Nekst-Black";
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  color: #575757;
`;

export const GilroyH3 = styled.h3`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #575757;
  margin: 0;
`;
