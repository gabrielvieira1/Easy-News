import React from "react";
import { Body, Card, Cards } from "./styles";
import LogoNoticias from "../../assets/Images/LogoNoticias.png";
import UserLogo from "../../assets/Images/UserLogo.svg";
import {
  Header,
  Image,
  MapButton,
  AddNews,
  UserIcon,
  UserGreeting,
} from "../../Components/HeaderStyle";

export default class TelaNoticias extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image src={LogoNoticias} alt="logo" width="150" />
            <MapButton>Mapa</MapButton>
            <AddNews>Adicionar notícias</AddNews>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <UserIcon src={UserLogo} alt="logo" width="50" />
            <UserGreeting>Seja Bem Vindo Will</UserGreeting>
          </div>
        </Header>
        <Body>
          <Card>Noticias</Card>
          <Card>Noticias</Card>
          <Card>Noticias</Card>
          <Card>Noticias</Card>
          <Card>Noticias</Card>
          <Card>Noticias</Card>
          <Card>Noticias</Card>
          <Card>Noticias</Card>
          <Card>Noticias</Card>
        </Body>
      </>
    );
  }
}
