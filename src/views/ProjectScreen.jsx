
import CardProject from '../components/CardProject';
import proyectosData from '/src/db/data.js';
import "../css/ProjectScreen.css"

const ProjectScreen = () => {
  const proyectos = proyectosData.proyectos;
   return (
    <div className='container-fluid fondo-projects text-white '>

      <div className=" mb-4">
        <h1>Nuestros Proyectos Destacados</h1>
        <p>Rolling Code School - <span style={{ color: "#3EA3EB" }}> Comisión Web 17</span></p>
      </div>

      <div className="d-flex flex-wrap justify-content-center gap-4">
        {proyectos.map((proyecto, index) => (
          <CardProject key={index} proyecto={proyecto} />
        ))}
      </div>
    </div>
  );
};

export default ProjectScreen