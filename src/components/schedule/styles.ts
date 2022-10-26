import styled from "styled-components";
import { MAIN_THEME } from "../../theme/main";

export const Container = styled.section`
  background-color: ${MAIN_THEME.darkBlue};
  padding: 56px 64px 80px;

  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 3.5rem;
    line-height: 66px;
    letter-spacing: 0.2em;
    color: ${MAIN_THEME.pink100};
    margin-bottom: 64px;
  }

  @media screen and (max-width: 768px) {
    padding: 56px 24px 80px;
  }

  @media screen and (max-width: 481px) {
    h1 {
      font-size: 2rem;
      line-height: 38px;
      margin-bottom: 32px;
    }
  }
`;

export const ScheduleList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-left: 32px;
  height: 430px;

  &::after {
    content: " ";
    display: block;
    background: linear-gradient(#d23bff 35.94%, #38fbff 100%);
    height: 100%;
    width: 2px;
    border-radius: 2px;

    position: absolute;
    left: 0;
    bottom: 0;
  }

  li {
    p {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 33px;
      color: ${MAIN_THEME.pink100};
    }

    &::marker {
      color: ${MAIN_THEME.pink500};
    }
  }

  @media screen and (max-width: 768px) {
    list-style: none;
    padding-left: 16px;
    margin: 0 auto;
    height: auto;
  }

  @media screen and (max-width: 481px) {
    li p {
      font-size: 1.125rem;
    }
  }
`;
