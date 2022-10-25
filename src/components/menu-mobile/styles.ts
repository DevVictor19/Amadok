import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;

  background-color: rgba(15, 7, 34, 0.8);
  backdrop-filter: blur(1px);
`;

export const CloseBtn = styled.button`
  all: unset;
  position: absolute;
  top: 12px;
  right: 24px;
  cursor: pointer;

  height: 32px;
  width: 32px;

  span {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;

    display: block;
    background: linear-gradient(90deg, #d23bff 35.94%, #38fbff 100%);
    height: 5px;
    width: 100%;
    border-radius: 4px;
  }

  span:first-of-type {
    transform: rotate(-45deg);
  }

  span:last-of-type {
    transform: rotate(45deg);
  }
`;
