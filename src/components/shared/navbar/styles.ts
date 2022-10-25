import styled from "styled-components";
import { MAIN_THEME } from "../../../theme/main";

export const Navigation = styled.ul`
  display: flex;
  gap: 42px;
  list-style: none;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 1.5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 64px;

    font-size: 1.75rem;
    line-height: 2rem;
    margin-top: 80px;
  }

  li a {
    text-decoration: none;
    color: ${MAIN_THEME.pink100};

    &:hover,
    &:active {
      border-bottom: 1px solid ${MAIN_THEME.pink100};
    }
  }
`;
