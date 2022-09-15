import React, {Component, useEffect} from "react";
import { Body, Card, Text, Title} from "./styles";
import LogoNoticias from "../../assets/Images/LogoNoticias.png";
import UserLogo from "../../assets/Images/UserLogo.svg";
import Modal from "../../Modal/index.js";
import { buscarNoticia } from "../../services/cadastroNoticia";
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

    this.state = { noticias:[]};
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

async componentDidMount(){
  const getNoticias = async() =>{
    const noticias = await buscarNoticia();
    this.setState({noticias:noticias})
  }
  await getNoticias() 
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
          {this.state.noticias.length > 0 && this.state.noticias.map(noticia=>(
          <Card>
          <Title>{noticia.title}</Title>
            <Text>{noticia.description}</Text>
          </Card>))}
        </Body>
      </>
    );
  }
}
