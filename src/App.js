import "./App.css";
import Perfil from "./components/perfil.js";
import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salida: "",
    };
  }

  handleClick = (formvalues) => {
    this.setState({
      salida: formvalues,
    });
  };

  render() {
    return (
      <div>
        <Perfil 
        onChange={this.handleClick} 
        textoH1={this.state.salida} />
      </div>
    );
  }
}

export default App;
