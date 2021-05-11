import React from "react";
import LogoNoticias from "../../assets/Images/LogoNoticias.svg";
import UserLogo from "../../assets/Images/UserLogo.svg";
import {
  Header,
  Image,
  MapButton,
  AddNews,
  Main,
  UserIcon,
  UserGreeting,
} from "./HeaderStyle";

export default class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Header>
        <Main>
          <div style={{display: "flex",  alignItems: "center"}}>
            <Image src={LogoNoticias} alt="logo" width="150" />
            <MapButton>Mapa</MapButton>
            <AddNews>Adicionar notícias</AddNews>
          </div>
          <div style={{display: "flex", alignItems: "center"}}>
            <UserIcon src={UserLogo} alt="logo" width="50" />
            <UserGreeting>Seja Bem Vindo Will</UserGreeting>
          </div>
        </Main>
      </Header>
    );
  }
}
