import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import "./App.css";
import "./fonts.css";
import Home from "Home";

function App() {
  return (
    <BrowserRouter>
      <Route render={(props) => <Home {...props} />} />
    </BrowserRouter>
  );
}

export default App;
