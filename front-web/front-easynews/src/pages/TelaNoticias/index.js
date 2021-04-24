import React from "react";
import HeaderComponent from "../../Components/home/HeaderComponent";

import {} from "./styles";

export default class TelaNoticias extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  render() {
    return (
      <HeaderComponent/>
    );
  }
}

