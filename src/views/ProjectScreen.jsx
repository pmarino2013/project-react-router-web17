
import CardProject from '../components/CardProject';
import proyectosData from '/src/db/data.js';
import "../css/ProjectScreen.css"
import SearchBar from '../components/SearchBar';
import { useState } from 'react';

const ProjectScreen = () => {
  const proyectos = proyectosData.proyectos;
  const [busqueda, setBusqueda] = useState("");
  
  const filtro = proyectos.filter((p)=>
    p.nombre_proyecto.toLowerCase().includes(busqueda.toLowerCase())
);

   return (
    <div className='container-fluid fondo-projects text-white '>

      <div className=" mb-4">
        <h1>Nuestros Proyectos Destacados</h1>
        <p>Rolling Code School - <span style={{ color: "#3EA3EB" }}> Comisión Web 17</span></p>
      </div>
      <div>
        <SearchBar onSearch={setBusqueda}/>
      </div>
      <div className="d-flex flex-wrap justify-content-center gap-4">

        {filtro.length > 0 ? (
          filtro.map((proyecto, index) => (
          <CardProject key={index} proyecto={proyecto} />
        ))
        ):(<h4>No se encontraron proyectos</h4>)
        }
      </div>
    </div>
  );
};

export default ProjectScreen