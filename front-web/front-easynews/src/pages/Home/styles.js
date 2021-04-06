import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
`;

export const ContainerImage = styled.div`
  position: fixed;
  max-width: 100vw;
  max-height: 100vh;
  z-index: -1;
`;

export const ButtonMapa = styled.button`
  bottom: 40px;
  margin-left: 80%;
  position: absolute;
  width: 135.35px;
  height: 86.14px;
  outline: none;

  background: #818dff;
  border-radius: 2.9rem;
  transform: rotate(0.09deg);
  font-style: normal;
  font-weight: bold;
  font-size: 35px;

  color: #ffffff;
`;

export const ButtonEntrar = styled.button`
  margin-left: 80%;
  margin-top: 2%;
  position: absolute;
  width: 184.47px;
  height: 54.47px;
  outline: none;

  background: #818dff;
  border-radius: 2.9rem;
  transform: rotate(0.09deg);

  font-style: normal;
  font-weight: bold;
  font-size: 35px;

  color: #ffffff;
`;

export const LinkSobre = styled.a`
  margin-left: 73%;
  margin-top: 2.6%;
  position: absolute;
  color: #818dff;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  text-decoration: none;
  &:hover {
    transition: 0.3s;
    color: #818dffcc !important;
  }
`;
