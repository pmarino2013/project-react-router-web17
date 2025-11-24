import React from "react";
import '../css/HomeScreen.css'

const HomeScreen = () => {
  return <>
    <section className="HomeScreen container-fluid d-flex h-100 flex-column gap-3 justify-content-center align-items-center">

      <div className="row HomeScreen-Principal align-self-center container p-5">
        <div className="col-12 text-center">
          <p className="display-3 fw-bold">RollingCode School</p>
        </div>
        <div className="col-12 text-center">
          <p className="h6 fw-semibold">Comisión 17 de la carrera de programación Web</p>
        </div>
      </div>

      <div className="container row">

        <div className="col-3 align-self-center d-none d-md-block">
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
                  Crear un portafolio o galería donde se exhiban los trabajos realizados por los alumnos de la comisión 17 de la carrera de programación Web.
                </li>
                <li className="m-2">
                  Incluir descripciones, capturas de pantalla y enlaces a los proyectos.
                </li>
                <li className="m-2">
                  Facilitar la revisión y evaluación del progreso de los alumnos.
                </li>
                <li className="m-2">
                  Implementar secciones que muestren el nivel de dominio en tecnologías como Bootstrap, JavaScript, React, entre otras.
                </li>
                <li className="m-2">
                  Elaborar un listado de los contenidos y módulos del curso.
                </li>
                <li className="m-2">
                  Incluir descripciones breves de cada tema, desde conceptos básicos hasta avanzados.
                </li>
                <li className="m-2">
                  Añadir recursos adicionales, como enlaces a tutoriales, documentación o ejemplos prácticos.
                </li>

              </ul>
            </div>
            
          </div>

        </div>

      </div>

    </section >
  </>
};

export default HomeScreen;