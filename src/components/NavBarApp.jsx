import React from "react";
import { Link } from "react-router-dom";


const NavBarApp = () => {
  


  return (

 <div>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src="https://cdn-icons-png.flaticon.com/512/6062/6062646.png" alt="Logo web17" width="40" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="#">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="favorite">Favoritos</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://web.rollingcodeschool.com/" to="#" target="blank">Contacto</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-disabled="true"
          to="About">Sobre Nosotros</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-disabled="true">Cerrar Sesion</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

   </div>

  )
  
  
  
  ;
};

export default NavBarApp;
