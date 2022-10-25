import styled from "styled-components";
import { MAIN_THEME } from "../../theme/main";

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 98;

  width: 100%;
  max-width: 1500px;
  height: 56px;
  background-color: ${MAIN_THEME.purpleShade};
  backdrop-filter: blur(6px);
  padding: 0 64px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    padding: 0 24px;
  }

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
    font-size: 2rem;
    line-height: 38px;
    color: ${MAIN_THEME.pink100};
  }
`;

export const BarsBtn = styled.button`
  all: unset;
  width: 32px;
  height: 32px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;

  span {
    display: block;
    background: linear-gradient(90deg, #d23bff 35.94%, #38fbff 100%);
    height: 4px;
    width: 100%;
    border-radius: 2px;
  }

  span:last-of-type {
    width: 47%;
  }
`;
