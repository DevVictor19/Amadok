import React from "react";

import * as S from "./styles";

interface IProps {
  handleLinkClick?: () => void;
}

export function NavBar({ handleLinkClick }: IProps) {
  const handleClick = () => {
    if (handleLinkClick) handleLinkClick();
  };

  return (
    <nav>
      <S.Navigation>
        <li onClick={handleClick}>
          <a href="#about">Sobre</a>
        </li>
        <li onClick={handleClick}>
          <a href="#schedule">Cronograma</a>
        </li>
        <li onClick={handleClick}>
          <a href="#subscribe">Inscrição</a>
        </li>
      </S.Navigation>
    </nav>
  );
}
