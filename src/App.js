import "./App.css";
import Perfil from "./components/perfil.js";
import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre:''
    };
  }

  handleClick = (formvalues) => {
    this.setState({
      nombre:formvalues

      })
    
  }

  render() {
    
    return (
      <div>
        <Perfil
          onChange={this.handleClick}
          textoParrafo={Object.keys(this.state)}
          textoH1={this.state.nombre}
        />
      </div>
    );
  }
}

export default App;
