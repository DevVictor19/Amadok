import styled from "styled-components";
import { MAIN_THEME } from "../../theme/main";

export const Container = styled.section`
  padding: 120px 64px 108px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 3.5rem;
    line-height: 66px;
    letter-spacing: 0.2em;
    color: ${MAIN_THEME.pink100};
  }

  ul {
    margin-top: 48px;
    margin-bottom: 56px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    li {
      &::marker {
        color: ${MAIN_THEME.pink500};
      }

      p {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 1.5rem;
        line-height: 33px;
        color: ${MAIN_THEME.pink100};
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 120px 24px 108px;
    align-items: flex-start;

    ul {
      position: relative;
      list-style: none;
      padding-left: 16px;

      &::after {
        content: " ";
        display: block;
        background: linear-gradient(#d23bff 35.94%, #38fbff 100%);
        height: 100%;
        width: 2px;
        border-radius: 2px;

        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }

  @media screen and (max-width: 481px) {
    h1 {
      font-size: 2rem;
      line-height: 38px;
    }

    li p {
      font-size: 1.125rem;
    }
  }
`;
