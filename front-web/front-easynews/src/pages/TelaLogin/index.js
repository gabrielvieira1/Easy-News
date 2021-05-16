import React from "react";
import { colors } from "@material-ui/core";
import { Link } from "react-router-dom";
import LogoBlue from "../../assets/Images/LogoBlue.svg";
import phoneGuy from "../../assets/Images/phoneGuy.svg";
import linkedin from "../../assets/Images/linkedin.svg";
import github from "../../assets/Images/github.svg";
import TextField from "@material-ui/core/TextField";

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

function Cadastro() {
  return (
    <Container>
      <Main>
        <Left>
          <Image src={LogoBlue} alt="logo" width="653" />
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
              <LinkEntrar href="/">CADASTRE-SE</LinkEntrar>
            </Header>
            <H1>Login em Easy N3ws </H1>
            <LinkGoogle href="/">Entrar com o Google</LinkGoogle>
          </Top>
          <Form>
            <FieldsetEmail>
              <Label> Usuário ou endereço de E-mail </Label>
              <Input
                type="e-mail"
                name="email"
                placeholder="Digite seu e-mail ou usuário"
              />
              <Label> Senha </Label>
              <Input
                type="password"
                name="senha"
                placeholder="Digite sua senha"
              />
            </FieldsetEmail>
            <LinkCadastro href="/">Entrar</LinkCadastro>
          </Form>
        </Right>
      </Main>
    </Container>
  );
}
export default Cadastro;
