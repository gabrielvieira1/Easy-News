import React from "react";

export default class NomeField extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <label> Nome </label>
        <input
          type="text"
          name="name"
          placeholder="Digite seu nome aqui"
          className="Btn"
        />
      </div>
    );
  }
}
