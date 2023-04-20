import React from "react";
import "./Header.css";
import logo from "./assets/img/ataque-inicio.jpg"

function Header() {
  return (
    <header>
      <img src={logo} className="logo"/>
      <a href="#">Inicio</a>
      <a href="#">El juego</a>
      <a href="#">Reglas</a>
      <a href="#">Nosotros</a>
    </header>
  );
}

export default Header;