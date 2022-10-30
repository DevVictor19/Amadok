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
            Para fazer a inscrição, clique no botão e responda o formulário
            confirmando a sua presença.
          </p>
        </li>
        <li>
          <p>
            Caso seja menor de idade, é necessário que seja apresentado o termo
            de responsabilidade para menores de 18 anos. Clique no botão e faça
            o download.
          </p>
        </li>
      </ul>
      <S.Actions>
        <Button
          onClick={() => {
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSedIbFAGn0IQdfddec6AZJ1HyEjbH19BSm170n5ngAATZmR0w/viewform"
            );
          }}
        >
          Inscrever-se
        </Button>
        <Button
          className="outlined"
          onClick={() => {
            window.open(
              "termo-de-responsabilidade-para-menores-de-18-anos.pdf"
            );
          }}
        >
          Baixar Termo
        </Button>
      </S.Actions>
    </S.Container>
  );
}
