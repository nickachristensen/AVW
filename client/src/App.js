import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Portfolio from "./Portfolio";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
