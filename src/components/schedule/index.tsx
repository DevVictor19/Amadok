import React from "react";

import * as S from "./styles";
import { GradientBox } from "../shared/gradient-box";

export function Schedule() {
  return (
    <S.Container id="schedule">
      <h1>Cronograma</h1>
      <GradientBox>
        <S.ScheduleList>
          <li>
            <p>
              O curso terá a duração de duas horas. começando as 9:00 da manhã
              com previsão de duração até às 11:00 horas.
            </p>
          </li>
          <li>
            <p>
              Durante a primeira hora do curso ocorrerá uma apresentação da
              linguagem HTML e como ela pode ser acessada em um computador.
            </p>
          </li>
          <li>
            <p>
              Na última hora restante do curso, será mostrado como essa
              linguagem é estruturada em uma página web e como usar as suas
              funções.
            </p>
          </li>
        </S.ScheduleList>
      </GradientBox>
    </S.Container>
  );
}