import styled from "styled-components";
import { MAIN_THEME } from "../../theme/main";

export const Container = styled.footer`
  position: relative;
  background-color: ${MAIN_THEME.darkBlue};
  height: 96px;

  div {
    background-color: ${MAIN_THEME.purpleShade};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    &::after {
      content: " ";
      display: block;
      background: linear-gradient(90deg, #d23bff 35.94%, #38fbff 100%);
      height: 1px;
      width: 100%;

      position: absolute;
      left: 0;
      top: 0;
    }

    p {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 28px;
      color: ${MAIN_THEME.pink100};
    }
  }
`;
