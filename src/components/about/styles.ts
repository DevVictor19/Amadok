import styled from "styled-components";
import { MAIN_THEME } from "../../theme/main";

export const Container = styled.main`
  background-color: ${MAIN_THEME.darkBlue};
  padding: 120px 64px 40px;

  @media screen and (max-width: 768px) {
    padding: 120px 24px 168px;
  }
`;

export const AboutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1280px) {
    flex-direction: column-reverse;
    gap: 64px;
  }

  @media screen and (max-width: 481px) {
    gap: 32px;
  }
`;

export const AboutInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  max-width: 640px;
  width: 100%;
  font-family: "Open Sans";
  color: ${MAIN_THEME.pink100};

  h1 {
    font-weight: 300;
    font-size: 3rem;
    line-height: 65px;
  }

  p {
    font-weight: 300;
    font-size: 1.25rem;
    line-height: 27px;
  }

  p:first-of-type {
    margin-top: 18px;
  }

  p:last-of-type {
    margin: 16px 0 24px;
  }

  @media screen and (max-width: 481px) {
    &::after {
      content: " ";
      display: block;
      background: linear-gradient(#d23bff 35.94%, #38fbff 100%);
      height: 90%;
      width: 2px;
      border-radius: 2px;

      position: absolute;
      left: 0;
      bottom: 0;
    }

    h1 {
      font-size: 2rem;
      line-height: 44px;
    }

    p:first-of-type {
      margin-top: 32px;
      margin-left: 16px;
    }

    p:last-of-type {
      margin: 16px 0 32px 16px;
    }

    button {
      margin-left: 24px;
    }
  }
`;

export const AboutImg = styled.div`
  border-radius: 32px;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 481px) {
    max-width: 312px;
    border-radius: 0;
  }
`;
