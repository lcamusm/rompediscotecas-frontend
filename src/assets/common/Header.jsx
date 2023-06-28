import React from "react";
import "./Header.css";
import logo from '../img/logo.jpg'

function Header() {
  return (
    <header>
      <img src={logo} className="logo"/>
      <a href="/">Inicio</a>
      <a href="/login">Log in</a>
      <a href="/el-juego">El juego</a>
      <a href="/instrucciones">Instrucciones</a>
      <a href="/nosotros">Nosotros</a>
    </header>
  );
}

export default Header;