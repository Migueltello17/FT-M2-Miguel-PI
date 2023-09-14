import React, { useState } from "react";
import validation from "./Validation";

const Form = ({ login }) => {
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(validation({
      ...userData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email" style={{ color: "white" }}> Email: </label>
      <input
        type="email"
        name="email"
        style={{
          color: "white",         // Cambia el color del texto a blanco
          backgroundColor: "black", // Cambia el color de fondo a negro
          // Puedes agregar más propiedades CSS según sea necesario
        }}
        value={userData.email}
        onChange={handleChange}
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>} <hr />
      <label htmlFor="password" style={{ color: "white" }}> Password: </label>
      <input
        type="password"         // Cambia el tipo a "password"
        name="password"
        style={{
          color: "white",         // Cambia el color del texto a blanco
          backgroundColor: "black", // Cambia el color de fondo a negro
          // Puedes agregar más propiedades CSS según sea necesario
        }}
        value={userData.password}
        onChange={handleChange}
      />
      {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

      <button
        type="submit"
        style={{
          backgroundColor: "blue", // Cambia el color de fondo del botón
          color: "white",          // Cambia el color del texto a blanco
          // Agrega más propiedades CSS según sea necesario
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
