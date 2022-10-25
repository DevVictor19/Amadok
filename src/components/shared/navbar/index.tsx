import React from "react";

import * as S from "./styles";

const links = [
  {
    label: "Sobre",
    to: "#about",
  },
  {
    label: "Cronograma",
    to: "#schedule",
  },
  {
    label: "Inscrição",
    to: "#subscription",
  },
];

interface IProps {
  handleLinkClick?: () => void;
}

export function NavBar({ handleLinkClick }: IProps) {
  const handleClick = () => {
    if (handleLinkClick) handleLinkClick();
  };

  let content;

  if (handleLinkClick) {
    content = links.map((link) => {
      return (
        <li key={link.label} onClick={handleClick}>
          <a href={link.to}>{link.label}</a>
        </li>
      );
    });
  } else {
    content = links.map((link) => {
      console.log("Render pra krl");
      return (
        <li key={link.label}>
          <a href={link.to}>{link.label}</a>
        </li>
      );
    });
  }

  return (
    <nav>
      <S.Navigation>{content}</S.Navigation>
    </nav>
  );
}
