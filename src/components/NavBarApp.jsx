import React from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css"


const NavBarApp = () => {
  


  return (

 <div>
<nav className="navbar navbar-expand-lg navbar-app">
  <div className="container-fluid m-3 d-flex gap-3"> 
    <Link className="navbar-brand" to="/"><img src="https://cdn-icons-png.flaticon.com/512/6062/6062646.png" alt="Logo web17" width="50" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav" >
      <ul className="navbar-nav w-100 fs-4 gap-3">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="favorite">Favoritos</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://web.rollingcodeschool.com/"  target="_blank">Contacto</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-disabled="true"
          to="About">Sobre Nosotros</Link>
        </li>
        <li className="nav-item" id="iniciar">
          <Link className="nav-link" to="profile" aria-disabled="true">Perfil</Link>
        </li>
          <li className="nav-item me-auto " id="iniciar">
          <Link className="nav-link" to="projects" aria-disabled="true">Projectos</Link>
        </li>
        <li className="nav-item " id="iniciar">
          <Link className="nav-link" to="login" aria-disabled="true">Iniciar Sesion</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
</div>
  );
};

export default NavBarApp;
