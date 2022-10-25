import React from "react";
import { MenuMobile } from "../menu-mobile";
import { NavBar } from "../shared/navbar";

import * as S from "./styles";

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const [screenWidth, setScreenWidth] = React.useState<number>(
    window.innerWidth
  );

  const handleToggleMenu = React.useCallback(() => {
    setMenuIsOpen((s) => !s);
  }, [setMenuIsOpen]);

  React.useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, [screenWidth]);

  let content = <NavBar />;

  if (screenWidth <= 768) {
    content = (
      <S.BarsBtn onClick={handleToggleMenu}>
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
      {menuIsOpen && <MenuMobile onClose={handleToggleMenu} />}
    </S.Container>
  );
}
