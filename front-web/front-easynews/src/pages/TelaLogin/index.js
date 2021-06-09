import React, { useState } from "react";
import LogoBlue from "../../assets/Images/LogoBlue.svg";
import phoneGuy from "../../assets/Images/phoneGuy.svg";
import linkedin from "../../assets/Images/linkedin.svg";
import github from "../../assets/Images/github.svg";
import { logarUsuario } from "../../services/loginUsuarioService";

import {
  FieldsetEmail,
  LinkCadastro,
  LinkGoogle,
  LinkEntrar,
  ImageGit,
  Container,
  Fieldset,
  Slogan,
  Header,
  Right,
  Image,
  Input,
  Label,
  Main,
  Icons,
  Form,
  Left,
  Top,
  H1,
  P,
} from "./styles";

export default class TelaLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = () => {
    let formValid = true;
    let login = this.state;

    if (login.email == null || login.email == "") {
      formValid = false;
    }

    if (login.password == null || login.password == "") {
      formValid = false;
    }

    if (formValid) {
      logarUsuario(this.state);
    } else {
      console.log("Error");
    }
  };

  render() {
    return (
      <Container>
        <Main>
          <Left>
            <a href="/">
              <Image src={LogoBlue} alt="logo" width="653" />
            </a>
            <Image src={phoneGuy} alt="mulher usando mapa" width="650" />
          </Left>

          <Right>
            <Top>
              <Icons>
                <Image src={github} alt="logo" width="40" />
                <Image src={linkedin} alt="logo" width="40" />
              </Icons>
              <Header>
                <P>Não possui conta?</P>
                <LinkEntrar href="/cadastro">CADASTRE-SE</LinkEntrar>
              </Header>
              <H1>Login em Easy N3ws </H1>
              <LinkGoogle href="/telanoticias">Entrar com o Google</LinkGoogle>
            </Top>
            <Form>
              <FieldsetEmail>
                <Label> Usuário ou endereço de E-mail </Label>
                <Input
                  type="e-mail"
                  name="email"
                  placeholder="Digite seu e-mail ou usuário"
                  onBlur={this.changeHandler}
                />
                <Label> Senha </Label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Digite sua senha"
                  onBlur={this.changeHandler}
                />
              </FieldsetEmail>
              <LinkCadastro onClick={this.submitHandler}>Entrar</LinkCadastro>
            </Form>
          </Right>
        </Main>
      </Container>
    );
  }
}
