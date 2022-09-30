import styled from "styled-components";
import { deviceSizes } from "../constants/styles/sizes";

export const TitledRangeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 119px;
  width: 100%;
  @media ${deviceSizes.tabletS} {
    height: 96px;
  }
`;

export const RangeValueContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const VerticalCenterContainer = styled.div`
  display: flex;
  align-items: center;
`;
