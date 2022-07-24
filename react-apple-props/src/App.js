import React, { Component } from "react";
import NavBar from "./components/Header/NavBar";
import Alert from "./components/Alert/Alert";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Grids from "./components/Grids/Grids";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Alert />
        <Main />
        <Grids />
        <Footer />
      </div>
    );
  }
}

export default App;
