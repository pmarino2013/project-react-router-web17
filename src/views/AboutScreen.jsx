import React from "react";

const alumnos = [
  {
    nombre: "Juan Manuel Vargas",
    descripcion: "Estudiante de desarrollo web.",
    foto: "https://avatars.githubusercontent.com/u/71360998?v=4",
    github:"https://github.com/juanmv32",
    linkedin: "https://www.linkedin.com/in/juan-manuel-vargas-32b462268/"
  },
  {
    nombre: "Benjamin Ignacio Pogonza",
    descripcion: "Estudiante de desarrollo web.",
    foto:"https://avatars.githubusercontent.com/u/104796060?v=4",
    github:"https://github.com/benja78945",
    linkedin: "https://www.linkedin.com/in/benjamin-pogona/"
  },
  {
    nombre: "Martin Hernan Rodriguez Mayol",
    descripcion: "Estudiante de desarrollo web.",
    foto: "https://avatars.githubusercontent.com/u/220537658?v=4",
    github:"https://github.com/Nitram135",
    linkedin: "https://www.linkedin.com/in/martin-hernan-rodriguez-mayol-4a4a4a4a/"
  },
  {
    nombre: "Cristian Miguel Bustos",
    descripcion: "Estudiante de desarrollo web.",
    foto: "https://avatars.githubusercontent.com/u/225981118?v=4",
    github:"https://github.com/Cristhianbsts",
    linkedin: "https://www.linkedin.com/in/cristian-miguel-bustos-a8019426a/"
    
  }
];

const AboutScreen = () => {
  return (
   <div className="container py-5">
    <h1 className="text-center mb-4">Comisión Web17</h1>
    <p className="text-center lead mb-5">
      La Comisión Web17 de RollingCode School es un grupo de estudiantes que está cursando la Carrera de Programación Full Stack que ofrece la institución.
      Esta carrera de 9 meses está diseñada para formar desarrolladores Full Stack, enseñándoles a programar desde cero para que puedan integrarse a la industria tecnológica.
    </p>

     {/* MENTOR */}
      <div className="card mb-4 shadow-sm">
      <h2 className=" text-center card-header">Mentor</h2>
        <div className="row g-0">
          <div className="col-md-3 ">
            <img
              src="https://avatars.githubusercontent.com/u/35234004?v=4"
              className="img-fluid w-100 h-100 object-fit-cover "
              alt="Mentor"
            />
          </div>

          <div className="col-md-9 d-flex align-items-center">
            <div className="card-body px-2 py-0">
              <h4 className="card-title">Pablo Daniel Marino</h4>
              <p className="card-text">
                Mentor encargado de guiar el proyecto, resolver dudas complejas y orientar a los
                estudiantes en buenas prácticas de desarrollo.<br/>
                💻 Desarrollador web, 🤖 Facilitador de conocimiento y 🤓Academy manager en @rollingcodeschool
              </p>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-primary">Mentor</span>
                <span className="badge bg-info text-dark">React</span>
                <span className="badge bg-dark">Node.js</span>
                <span className="badge bg-success">MongoDB</span>
                <span className="badge bg-warning text-dark">JavaScript</span>
                <span className="badge bg-secondary">Express</span>
              </div>
                <div className="d-flex flex-wrap gap-2 mt-2">                      
                <a href="https://github.com/pmarino2013" target="blanck">
                <img src="https://cdn-icons-png.flaticon.com/128/733/733609.png" alt="Github" width={"35px"} />
                </a>
                <a href="https://www.linkedin.com/in/pablomarinotech/" target="blanck">
                <img src="https://cdn-icons-png.flaticon.com/128/145/145807.png" alt="linkedin" width={"35px"} /></a>     
                </div>
            </div>
          </div>
        </div>

      </div>

      {/* TUTOR */}
      <div className="card mb-5 shadow-sm">
      <h2 className="text-center card-header">Tutor</h2>
        <div className="row g-0">
          <div className="col-md-3">
            <img
              src="https://avatars.githubusercontent.com/u/174360040?v=4"
              className="img-fluid w-100 h-100 object-fit-cover"
              alt="Tutor"
            />
          </div>

          <div className="col-md-9 d-flex align-items-center">
            <div className="card-body">
              <h4 className="card-title">Mateo Lopez Yapur</h4>
              <p className="card-text">
                Tutor responsable de acompañar día a día a los estudiantes, asistir en ejercicios,
                prácticas y ayudar a la resolución de problemas técnicos.<br/>
                🚀 Especializado en el stack MERN, con enfoque en crear aplicaciones que resuelvan problemas reales.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-success">Tutor</span>
                <span className="badge bg-info text-dark">React</span>
                <span className="badge bg-dark">Node.js</span>
                <span className="badge bg-success">MongoDB</span>
                <span className="badge bg-warning text-dark">JavaScript</span>
                <span className="badge bg-secondary">Express</span>
              </div>
                <div className="d-flex flex-wrap gap-2 mt-2">                      
                <a href="https://github.com/Yappur" target="blanck">
                <img src="https://cdn-icons-png.flaticon.com/128/733/733609.png" alt="Github" width={"35px"} />
                </a>
                <a href="https://www.linkedin.com/in/mateoyapur/" target="blanck">
                <img src="https://cdn-icons-png.flaticon.com/128/145/145807.png" alt="linkedin" width={"35px"} /></a>     
                </div>
            </div>
          </div>
        </div>
      </div>
{/* agregar de que se encargo cada grupo??? */}
    {/* ESTUDIANTES */}
    <h2 className="mb-4">Grupo 3</h2>  
    <div className="row g-4">
      {alumnos.map((alumno,index)=> (
        <div key={index} className="col-md-3">
          <div className="card h-100 shadow-sm d-flex flex-column">
            <img src={alumno.foto} className="card-img-top" alt={alumno.nombre} />
            <div className="card-body d-flex flex-column bg-body-secondary bg-gradient bg-opacity-1">
              <h5 className="card-title">{alumno.nombre}</h5>
              <p className="card-text flex-grow-1 overflow-hidden">{alumno.descripcion}</p>
              <div className="card container-fluid" /* style={{width: "auto"}} */>
                <ul className="list-group list-group-flush ">
                  <li className="list-group-item d-flex justify-content-start align-items-center gap-3 p-2 ">
                    <a href={alumno.github} target="blanck">
                      <img src="https://cdn-icons-png.flaticon.com/128/733/733609.png" alt="github" width={"30px"}  />
                    </a>
                    <a href={alumno.linkedin} target="blanck">
                      <img src="https://cdn-icons-png.flaticon.com/128/145/145807.png" alt="linkedin" width={"30px"} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* TECNOLOGIAS   */}
    <h2 className=" text-center mt-5 mb-4">Tecnologías Utilizadas</h2>
    <ul className="list-group mb-5">
        
        <li className="list-group-item">
          <strong>⚛️ React</strong>
          <br /> 
          Librería de JavaScript para construir interfaces de usuario (UI) mediante componentes reutilizables. Utiliza el Virtual DOM para un renderizado eficiente.
        </li>
        
        <li className="list-group-item">
          <strong>🔀 React Router DOM</strong>
          <br /> 
          Librería estándar para manejar el enrutamiento (navegación entre URLs) en aplicaciones React de una sola página (SPAs), sin recargar la página completa.
        </li>
         
        <li className="list-group-item">
          <strong>🚀 Vite</strong>
          <br /> 
          Herramienta de construcción (build tool) de nueva generación. Ofrece un arranque del servidor de desarrollo casi instantáneo y una recarga de módulos (HMR) extremadamente rápida.
        </li>
    
        <li className="list-group-item">
          <strong>🎨 Bootstrap 5</strong>
          <br /> 
          Framework de CSS popular para crear diseños web responsivos y "mobile-first". Proporciona componentes pre-diseñados y un sistema de cuadrícula (Grid System).
        </li>
        
        <li className="list-group-item">
          <strong>📁 Git / GitHub</strong>
          <br /> 
          Git es un Sistema de Control de Versiones (VCS) para rastrear cambios en el código. GitHub es la plataforma web más usada para alojar y colaborar en proyectos que usan Git.
        </li>
      </ul>
   </div> 
  );
};

export default AboutScreen;
