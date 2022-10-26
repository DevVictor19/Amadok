import React from "react";

import * as S from "./styles";
import { Button } from "../shared/button";

export function Subscription() {
  return (
    <S.Container id="subscription">
      <h1>Inscrição</h1>
      <ul>
        <li>
          <p>
            O curso ocorrerá no dia 05 de novembro de 2022 no campus Uninassau
            Pituba, localizado na Rua dos Marçons, 364.
          </p>
        </li>
        <li>
          <p>
            A ideia é que o curso aconteça nos laboratórios da faculdade, que se
            encontram localizados no 7° andar da instituição.
          </p>
        </li>
      </ul>
      <Button>Inscrever-se</Button>
    </S.Container>
  );
}
