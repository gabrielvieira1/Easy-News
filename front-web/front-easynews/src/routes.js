import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Cadastro from "./pages/Cadastro/index";
import TelaLogin from "./pages/TelaLogin/index";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/telalogin" component={TelaLogin} />
      </Switch>
    </BrowserRouter>
  );
}
