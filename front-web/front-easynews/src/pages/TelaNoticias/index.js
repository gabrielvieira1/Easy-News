import React from "react";
import HeaderComponent from "../../Components/HeaderComponent";
import NewsField from "../../Components/NewsField";

export default class TelaNoticias extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <header style={{ height: "84.34px" }}>
          <HeaderComponent />
        </header>
        <NewsField />
      </>
    );
  }
}
