import React from "react";

import * as S from "./styles";

interface IProps {
  children: React.ReactNode;
}

export function GradientBox({ children }: IProps) {
  return (
    <S.Container>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
}
