import React from "react";

import * as S from "./styles";

export function NavBar() {
  const [screenWidth, setScreenWidth] = React.useState<number>(
    window.innerWidth
  );

  React.useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, [screenWidth]);

  let content = (
    <nav>
      <S.Navigation>
        <li>
          <a href="#about">Sobre</a>
        </li>
        <li>
          <a href="#schedule">Cronograma</a>
        </li>
        <li>
          <a href="#subscription">Inscrição</a>
        </li>
      </S.Navigation>
    </nav>
  );

  if (screenWidth <= 768) {
    content = (
      <S.BarsBtn>
        <span></span>
        <span></span>
        <span></span>
      </S.BarsBtn>
    );
  }

  return (
    <S.Container>
      <h1>Tech Sisters</h1>
      {content}
    </S.Container>
  );
}
