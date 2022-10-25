import styled from "styled-components";
import { MAIN_THEME } from "../../../theme/main";

export const Contaier = styled.button`
  all: unset;

  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 33px;

  max-width: 256px;
  width: 100%;
  height: 64px;
  background: linear-gradient(90deg, #d23bff 35.94%, #38fbff 100%);
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.1);
  border-radius: 32px;
  cursor: pointer;
  text-align: center;
  color: ${MAIN_THEME.pink100};
`;
