import React from "react";

import * as S from "./styles";

const links = [
  {
    label: "Sobre",
    path: "#about",
  },
  {
    label: "Cronograma",
    path: "#schedule",
  },
  {
    label: "Inscrição",
    path: "subscription",
  },
];

export function NavBar() {
  return (
    <S.Container>
      <h1>Navbar</h1>
      <nav>
        <S.Navigation>
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.path}>{link.label}</a>
            </li>
          ))}
        </S.Navigation>
      </nav>
    </S.Container>
  );
}
