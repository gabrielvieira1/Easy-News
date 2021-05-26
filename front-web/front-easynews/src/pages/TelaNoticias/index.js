import React from "react";
import { Body, Card, Text, Badge, Badges } from "./styles";
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
          <Card>
            <Text>
              Em linguística, a noção de texto é ampla e ainda aberta a uma
              definição mais precisa. Grosso modo, pode ser entendido como
              manifestação linguística das ideias de um autor, que serão
              interpretadas pelo leitor de acordo com seus conhecimentos
              linguísticos e culturais. Seu tamanho é variável
            </Text>
            <Badges>
            <Badge>
              Protesto
            </Badge>
            <Badge>
              Briga
            </Badge>
            <Badge>
              Gritaria
            </Badge>
            <Badge>
              Dedo no c#
            </Badge>
            </Badges>
          </Card>
          <Card>
            <Text>Noticias</Text>
          </Card>
          <Card>
            <Text>Noticias</Text>
          </Card>
          <Card>
            <Text>Noticias</Text>
          </Card>
          <Card>
            <Text>Noticias</Text>
          </Card>
          <Card>
            <Text>Noticias</Text>
          </Card>
          <Card>
            <Text>Noticias</Text>
          </Card>
          <Card>
            <Text>Noticias</Text>
          </Card>
          <Card>
            <Text>Noticias</Text>
          </Card>
          <Card>
            <Text>Noticias</Text>
          </Card>
        </Body>
      </>
    );
  }
}
