import React from "react";
import { Link } from "react-router-dom";
import logoAmarelo from "../../assets/Images/LogoAmarelo.svg";
import mapWoman from "../../assets/Images/mapWoman.svg";
import TextField from "@material-ui/core/TextField";

import {
  Container,
  Image,
  Main,
  Left,
  Right,
  Slogan,
  LinkGoogle,
  LinkCadastro,
  Form,
  Input,
  Fieldset,
  FieldsetEmail,
  Label,
  Top,
} from "./styles";

function Cadastro() {
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
            <h1>Inscreva-se no Easy N3ws </h1>
            <LinkGoogle href="/">Cadastre-se com o Google</LinkGoogle>
          </Top>
          <Form>
            <Fieldset>
              <div>
                <Label> Nome </Label>
                <Input
                  type="text"
                  name="nome"
                  placeholder="Digite seu nome aqui"
                />
              </div>
              <div>
                <Label> Nome e usuário </Label>
                <Input
                  type="text"
                  name="usuario"
                  placeholder="Digite sua nome de usuario"
                />
              </div>
            </Fieldset>

            <FieldsetEmail>
              <Label> E-mail </Label>
              <Input
                type="e-mail"
                name="email"
                placeholder="Digite seu e-mail"
              />
              <Label> Senha </Label>
              <Input
                type="password"
                name="senha"
                placeholder="Digite sua senha"
              />
            </FieldsetEmail>
            <LinkCadastro href="/">Cadastrar</LinkCadastro>
          </Form>
        </Right>
      </Main>
    </Container>
  );
}
export default Cadastro;
