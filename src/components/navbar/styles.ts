import styled from "styled-components";
import { MAIN_THEME } from "../../theme/main";

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;

  width: 100%;
  max-width: 1500px;
  height: 56px;
  background-color: ${MAIN_THEME.purpleShade};
  backdrop-filter: blur(6px);
  padding: 0 64px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &::after {
    content: " ";
    display: block;
    background: linear-gradient(90deg, #d23bff 35.94%, #38fbff 100%);
    height: 1px;
    width: 100%;

    position: absolute;
    left: 0;
    bottom: 0px;
  }

  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;
    color: ${MAIN_THEME.pink100};
  }
`;

export const Navigation = styled.ul`
  display: flex;
  gap: 42px;
  list-style: none;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;

  li a {
    text-decoration: none;
    color: ${MAIN_THEME.pink100};

    &:hover,
    &:active {
      border-bottom: 1px solid ${MAIN_THEME.pink100};
    }
  }
`;
