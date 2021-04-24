import React from "react";
import LogoNoticias from "../../assets/Images/LogoNoticias.svg";
import from "../";s

export default class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header>
          <Image src={LogoNoticias} alt="logo" width="353" />
        </Header>
      </div>
    );
  }
}
