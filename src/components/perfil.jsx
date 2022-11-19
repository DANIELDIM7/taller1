import { useState } from "react";
import {
  CiUser,
  CiMail,
  CiCalendarDate,
  CiLocationOn,
  CiPhone,
  CiLock,
} from "react-icons/ci";
import "../styles/perfil.css";

const Perfil = ({ picture, name, email, dob, location, phone, login }) => {
  const [textParagraph, setTextParagraph] = useState("");
  const [textoTitle, setTextoTitle] = useState("");

  const handleClick1 = (e) => {
    setTextParagraph("My name is: ");
    setTextoTitle(`${name.first} ${name.last}`);
  };

  const handleClick2 = (e) => {
    setTextParagraph("My email is: ");
    setTextoTitle(email);
  };

  const handleClick3 = (e) => {
    setTextParagraph(" My Date of Birth is: ");
    setTextoTitle(dob.date);
  };

  const handleClick4 = (e) => {
    setTextParagraph("My addres is:");
    setTextoTitle(
      `${location.street.number} ${location.street.name}, ${location.city}. ${location.country}`
    );
  };

  const handleClick5 = (e) => {
    setTextParagraph(" My phone number is: ");
    setTextoTitle(phone);
  };

  const handleClick6 = (e) => {
    setTextParagraph(" My password is: ");
    setTextoTitle(login.password);
  };

  return (
    <>
      <div className="contenedor-principal">
        <div className="contenedor-contenedor-foto-perfil">
          <div className="contenedor-foto-perfil">
            <img className="foto-perfil" src={picture.large} />
          </div>
        </div>{" "}
        <div className="contenedor-descripcion">
          <p>{textParagraph}</p>
          <h1>{textoTitle}</h1>{" "}
          <div className="contenedor-iconos">
            {" "}
            <ul>
              {" "}
              <li>
                {" "}
                <a href="#" onClick={handleClick1}>
                  <CiUser className="icon icon-desktop" />{" "}
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a href="#" onClick={handleClick2}>
                  <CiMail className="icon icon-mail" />{" "}
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a href="#" onClick={handleClick3}>
                  <CiCalendarDate className="icon icon-calendar" />{" "}
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a href="#" onClick={handleClick4}>
                  <CiLocationOn className="icon icon-location" />{" "}
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a href="#" onClick={handleClick5}>
                  <CiPhone className="icon icon-phone" />{" "}
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a href="#" onClick={handleClick6}>
                  <CiLock className="icon icon-lock" />{" "}
                </a>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
};

export default Perfil;
