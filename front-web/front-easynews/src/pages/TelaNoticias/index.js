import React from "react";
import { Body, Card, Text, Title} from "./styles";
import LogoNoticias from "../../assets/Images/LogoNoticias.png";
import UserLogo from "../../assets/Images/UserLogo.svg";
import Modal from "../../Modal/index.js";
import {
  Header,
  Image,
  AddNews,
  UserIcon,
  UserGreeting,
} from "../../Components/HeaderStyle";

export default class TelaNoticias extends React.Component {
  constructor(props) {
    super(props);

    this.state = { show: false };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <>
        <Header>
          <div style={{ display: "flex", alignItems: "center" }}>
            <a href="/">
              <Image src={LogoNoticias} alt="logo" width="150" />
            </a>
            <Modal show={this.state.show} handleClose={this.hideModal}></Modal>
            <AddNews onClick={this.showModal}>Adicionar notícias</AddNews>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <UserIcon src={UserLogo} alt="logo" width="50" />
            <UserGreeting>Seja Bem Vindo Will</UserGreeting>
          </div>
        </Header>
        <Body>
        <Card>
          <Title>TITULO</Title>
            <Text>
              Em linguística, a noção de texto é ampla e ainda aberta a uma
              definição mais precisa. Grosso modo, pode ser entendido como
              manifestação linguística das ideias de um autor
            </Text>
          </Card>
        </Body>
      </>
    );
  }
}
