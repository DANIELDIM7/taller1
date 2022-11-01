import React from "react";
import {
  CiUser,
  CiMail,
  CiCalendarDate,
  CiLocationOn,
  CiPhone,
  CiLock,
} from "react-icons/ci";
import "../styles/perfil.css";

class Perfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "Daniel Cuellar",
      correo: "ingdanielcuellar4737@gmail.com",
      cumpleaños: "25 of July",
      direccion: "Calle 49 AA #98 CC 113",
      telefono: '+57 314 6847483',
      clave: "********",
      a: "",
    };
  }

  handleClick1 = (e) => {
    this.props.onChange(this.state.nombre);
    this.setState({
      a: "My name is:",
    });
  };

  handleClick2 = (e) => {
    this.props.onChange(this.state.correo);
    this.setState({
      a: "My email is:",
    });
  };

  handleClick3 = (e) => {
    this.props.onChange(this.state.cumpleaños);
    this.setState({
      a: "My birthday is on:",
    });
  };

  handleClick4 = (e) => {
    this.props.onChange(this.state.direccion);
    this.setState({
      a: "My address is:",
    });
  };

  handleClick5 = (e) => {
    this.props.onChange(this.state.telefono);
    this.setState({
      a: "My prone number is:",
    });
  };

  handleClick6 = (e) => {
    this.props.onChange(this.state.clave);
    this.setState({
      a: "My password is:",
    });
  };





  render() {
    return (
      <div className="contenedor-principal">
        <div className="contenedor-contenedor-foto-perfil">
          <div className="contenedor-foto-perfil">
            <img
              className="foto-perfil"
              src={require("../img/foto-perfil.jpg")}
            />
          </div>
        </div>

        <div className="contenedor-descripcion">
          <p>{this.state.a}</p>
          <h1>{this.props.textoH1}</h1>
          <div className="contenedor-iconos">
            <ul>
              <li>
                {" "}
                <a href="#" onClick={this.handleClick1}>
                  <CiUser className="icon icon-desktop" />
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#" onClick={this.handleClick2}>
                  <CiMail className="icon icon-mail" />
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#" onClick={this.handleClick3}>
                  {" "}
                  <CiCalendarDate className="icon icon-calendar" />
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#" onClick={this.handleClick4}>
                  {" "}
                  <CiLocationOn className="icon icon-location" />
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#" onClick={this.handleClick5}>
                  {" "}
                  <CiPhone className="icon icon-phone" />
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#" onClick={this.handleClick6}>
                  {" "}
                  <CiLock className="icon icon-lock" />
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Perfil;
