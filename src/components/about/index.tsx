import React from "react";

import amadokImg from "../../assets/amadok.png";
import { GradientBox } from "../shared/gradient-box";

import * as S from "./styles";

export function About() {
  return (
    <S.Container id="about">
      <GradientBox>
        <S.AboutWrapper>
          <S.AboutInfo>
            <h1>Sobre o programa</h1>
            <p>
              O projeto Amadok em parceria com a faculdade Uninassau, tem o
              objetivo de ensinar os primeiros passos na linguagem HTML. A ideia
              do projeto, além de ensinar as primeiras etapas principais para
              quem quer conhecer mais sobre esta linguagem, pensando na
              oportunidade de trazer mais mulheres para a área de tecnologia,
              visa priorizar o público feminino. Uma vez que a maior parte das
              carreiras e cursos de TI são compostas pelo público masculino.
            </p>
            <p>
              Os alunos do curso de sistema de informação irão apresentar nos
              laboratórios da faculdade, os passos básicos para quem quer
              aprender mais sobre a linguagem de marcação html e como
              desenvolver conteúdos nela, auxiliando e tirando dúvidas que
              poderão surgir durante toda a duração do curso.
            </p>
          </S.AboutInfo>
          <S.AboutImg>
            <img
              src={amadokImg}
              alt="Logo do Amadok, escola de programação para mulheres"
            />
          </S.AboutImg>
        </S.AboutWrapper>
      </GradientBox>
    </S.Container>
  );
}
