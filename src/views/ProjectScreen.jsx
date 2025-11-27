
import CardProject from '../components/CardProject';
import proyectosData from '/src/db/data.js';

const ProjectScreen = () => {
  const proyectos = proyectosData.proyectos;
  return (
    <div className='container d-flex flex-wrap justify-content-center'>
      {
        proyectos.map((proyecto, index) => {
          return (
            <CardProject key={index} proyecto={proyecto}/>
          );
        })
      }
    </div>
  )
}

export default ProjectScreen