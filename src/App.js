import "./App.css";
import Perfil from "./components/perfil.jsx";
import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  //  Aquí traemos los datos de la API

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=1"
        ); //results=10 nos indica que queremos traer solamente 10 usuarios aleatorios (se pueden traer hasta 5000)
        const { results } = response.data; //uso desesctructuración para obtener el arreglo de results de response.data
        setUsers(results);
        console.log(results);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      {users.map((item, index) => (
        <Perfil key={index} {...item} />
      ))}
    </>
  );
};

export default App;
