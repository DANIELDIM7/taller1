import React from "react";
import {
  CiDesktop,
  CiMail,
  CiCalendarDate,
  CiLocationOn,
  CiPhone,
  CiLock,
} from "react-icons/ci";
import "../styles/perfil.css";

class Perfil extends React.Component {
  
  constructor(props){
    
    super(props)
    this.state = {
      nombre: 'Daniel Cuellar',
      correo: 'ingdanielcuellar4737@gmail.com',
      cumpleaños: '25 de Julio',
      direccion: 'Calle 49 AA #98 CC 113',
      telefono: 3146847483,
      contraseña: '123456da',
      a:''

    }
    
  }

  
  
  handleClick1 = (e) =>{
  this.props.onChange(this.state.nombre)
  this.setState({
    a: 'My nombre es'

    })
  
  }
    
  


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
                  <CiDesktop className="icon icon-desktop" />
                  
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#" >
                  <CiMail className="icon icon-mail" />
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <CiCalendarDate className="icon icon-calendar" />
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <CiLocationOn className="icon icon-location" />
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <CiPhone className="icon icon-phone" />
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">
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
