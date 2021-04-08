import React from "react";
import { Link } from "react-router-dom";
import logoAmarelo from "../../assets/Images/LogoAmarelo.svg";
import mapWoman from "../../assets/Images/mapWoman.svg";

import {
  Container,
  Image,
  Main,
  Left,
  Right,
  Slogan,
  LinkGoogle,
  LinkCadastro,
  } from "./styles";

  function Cadastro() {
    return (
      <Container>
        <Main>

          <Left>
            <Image src={logoAmarelo} alt="logo" width="353"/>
            <Slogan>Você está a um passo de definir o seu destino.</Slogan>
            <Image src={mapWoman} alt="mulher usando mapa" width="650"/>
          </Left>
  
          <Right>
            <h1>Inscreva-se no Easy N3ws </h1>
            <LinkGoogle href="/">Cadastre-se com o Google</LinkGoogle>
            <LinkCadastro href="/">Cadastrar</LinkCadastro>
          </Right>
  
        </Main>
  
      </Container>
    );
  }
  export default Cadastro;