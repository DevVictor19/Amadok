import React from "react";
import ReactDOM from "react-dom";

import * as S from "./styles";
import { NavBar } from "../shared/navbar";

interface IProps {
  onClose: () => void;
}

function MenuMobileContent({ onClose }: IProps) {
  const handleOnClick = () => {
    onClose();
  };

  return (
    <S.Container role="alert">
      <NavBar handleLinkClick={handleOnClick} />
      <S.CloseBtn onClick={handleOnClick}>
        <span></span>
        <span></span>
      </S.CloseBtn>
    </S.Container>
  );
}

export function MenuMobile({ onClose }: IProps) {
  return ReactDOM.createPortal(
    <MenuMobileContent onClose={onClose} />,
    document.getElementById("overlays") as HTMLElement
  );
}
