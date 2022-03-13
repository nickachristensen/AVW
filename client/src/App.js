import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";

function App() {

  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}

export default App;