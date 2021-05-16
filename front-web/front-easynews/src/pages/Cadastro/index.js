import React from "react";
import { colors } from "@material-ui/core";
import { Link } from "react-router-dom";
import logoAmarelo from "../../assets/Images/LogoAmarelo.svg";
import mapWoman from "../../assets/Images/mapWoman.svg";
import linkedin from "../../assets/Images/linkedin.svg";
import github from "../../assets/Images/github.svg";
import TextField from "@material-ui/core/TextField";
import { api } from "../../services/api";
import { cadastrarUsuario } from "../../services/cadastroUsuarioService";

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

export default class Cadastro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      userName: "",
      email: "",
      password: "",
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler = (event) => {
    event.preventDefault();
    cadastrarUsuario(this.state);
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Container>
        <Main>
          <Left>
            <Image src={logoAmarelo} alt="logo" width="353" />
            <Slogan>Você está a um passo de definir o seu destino.</Slogan>
            <Image src={mapWoman} alt="mulher usando mapa" width="650" />
          </Left>

          <Right>
            <Top>
              <Icons>
                <Image src={github} alt="logo" width="40" />
                <Image src={linkedin} alt="logo" width="40" />
              </Icons>
              <Header>
                <P>Já possui conta?</P>
                <LinkEntrar href="/TelaLogin">ENTRE</LinkEntrar>
              </Header>
              <h1>Inscreva-se no Easy N3ws </h1>
              <LinkGoogle href="/">Cadastre-se com o Google</LinkGoogle>
            </Top>
            <Form>
              <Fieldset>
                <div>
                  <Label> Nome </Label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Digite seu nome aqui"
                    onBlur={this.changeHandler}
                  />
                </div>
                <div>
                  <Label> Nome e usuário </Label>
                  <Input
                    type="text"
                    name="userName"
                    placeholder="Digite sua nome de usuario"
                    onBlur={this.changeHandler}
                  />
                </div>
              </Fieldset>

              <FieldsetEmail>
                <Label> E-mail </Label>
                <Input
                  type="e-mail"
                  name="email"
                  placeholder="Digite seu e-mail"
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
              <LinkCadastro onClick={this.submitHandler}>
                Cadastrar
              </LinkCadastro>
            </Form>
          </Right>
        </Main>
      </Container>
    );
  }
}
