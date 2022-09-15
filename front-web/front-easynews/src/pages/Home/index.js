import React from "react";
import { Link } from "react-router-dom";
//import "./styles.css";
//import "../../pages/global.css";
import logo from "../../assets/Images/Logo.svg";
import globo from "../../assets/Images/globo.svg";
import globo2 from "../../assets/Images/globo2.svg";

import {
  Container,
  Image,
  LinkSobre,
  LinkMapa,
  LinkEntrar,
  Header,
  Main,
  Left,
  Right,
  Slogan,
} from "./styles";

function Home() {
  return (
    <Container>

      <Header>
        <LinkSobre href="">
          Sobre
        </LinkSobre>
        <LinkEntrar href="/Cadastro">Entrar</LinkEntrar>
      </Header>

      <Main>

        <Left>
          <Image src={logo} alt="globo" width="578"/>
          <Slogan>Tornando seu caminho melhor
          com informações do dia-a dia</Slogan>
          <Image src={globo2} alt="globo" width="739"/>
        </Left>

        <Right>
          <Image src={globo} alt="globo" style={{marginRight:38}} width="710"/>
          <LinkMapa href="/telanoticias">Mapa</LinkMapa>
        </Right>

      </Main>

    </Container>
  );
}
export default Home;
