import styled from "styled-components";
import { MAIN_THEME } from "../../../theme/main";

export const Container = styled.section`
  background: linear-gradient(90deg, #d23bff 35.94%, #38fbff 100%);
  padding: 1px;

  @media screen and (max-width: 768px) {
    background: none;
    padding: 0;
  }
`;

export const Content = styled.div`
  background-color: ${MAIN_THEME.grayBlue};
  padding: 31px;

  @media screen and (max-width: 768px) {
    background: none;
    padding: 0;
  }
`;
