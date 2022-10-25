import styled from "styled-components";
import { MAIN_THEME } from "../../theme/main";

export const Container = styled.main`
  background-color: ${MAIN_THEME.darkBlue};
  padding: 120px 64px 0;
`;

export const AboutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AboutInfo = styled.div`
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
`;

export const AboutImg = styled.div`
  border-radius: 32px;
  overflow: hidden;
`;
