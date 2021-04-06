import React from "react";
//import "./styles.css";
//import "../../pages/global.css";
import image from "../../assets/Images/background.png";
import {
  Container,
  ContainerImage,
  LinkSobre,
  ButtonMapa,
  ButtonEntrar,
} from "./styles";

function Home() {
  return (
    <Container>
      <main>
        <ContainerImage>
          <img src={image} alt="nuvem" />
        </ContainerImage>
      </main>
      <ButtonMapa>Mapa</ButtonMapa>
      <ButtonEntrar>Entrar</ButtonEntrar>
      <LinkSobre href="">
        <h5>Sobre</h5>
      </LinkSobre>
    </Container>
  );
}
export default Home;
