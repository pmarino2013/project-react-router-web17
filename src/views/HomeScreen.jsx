import React from "react";
import '../css/HomeScreen.css'

const HomeScreen = () => {
  return <section className="HomeScreen container-fluid d-flex flex-column gap-3 justify-content-center align-items-center">

    <div className="row HomeScreen-Principal align-self-center container h-100 p-5">
      <div className="col-12 text-center">
        <p className="display-3 fw-bold">RollingCode School</p>
      </div>
      <div className="col-12 text-center">
        <p className="h6 fw-semibold">Comisión 17 de la carrera de programación Web</p>
      </div>
    </div>

    <div className="container row">
      
      <div className="align-self-center col-3 d-none d-md-block">
        <div>
          <img className="w-100" src="/src/assets/coding-1853305_1280.jpg" alt="imagen" />
        </div>
      </div>
      
      <div className="col-md-7 col-sm-12 fw-semibold">

        <div className="row">
          <div className="col-12">
            <p>Objetivos</p>
          </div>
          <div className="col-12">
            <ul className="list-unstyled">
              <li className="m-2">
                Mostrar tareas y proyectos realizados por los alumnos de la comisión 17 de la carrera de programación Web.
              </li>
              <li className="m-2">
                Mostrar el avance de los alumnos con respecto al uso de las herramientas utilizadas en el desarrollo web como Bootstrap, Javascript, React, etc.
              </li>
              <li className="m-2">
                Mostrar los temas que se pueden aprender en el curso de programaciónm web.
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>

  </section>
};

export default HomeScreen;