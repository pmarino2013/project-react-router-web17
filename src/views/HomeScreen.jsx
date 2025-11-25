import React from "react";
import '../css/HomeScreen.css'

const HomeScreen = () => {
  return <>
    <section className="HomeScreen container my-2">

      <div className="row HomeScreen-Principal d-flex flex-column justify-content-center">
        <div className="col-12 text-center">
          <p className="display-3 fw-bold">RollingCode School</p>
        </div>
        <div className="col-12 text-center">
          <p className="h6 fw-semibold">Comisión 17 de la carrera de programación Web</p>
        </div>
      </div>

      <div className="row mt-2 container">

        <div className="col-md-3 d-none d-md-block">
          <div className="HomeScreen-Objetivos-imagen">
            
          </div>
        </div>

        <div className="col-md-7 col-sm-12 fw-semibold">

          <div className="row">

            <div className="col-12">
              <p className="m-2">Objetivos</p>
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