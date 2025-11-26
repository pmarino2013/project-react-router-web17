import CardProject from './CardProject'
import proyectosData from '/src/db/data.js';

const ProjectList = () => {
  const proyectos = proyectosData.proyectos;
  return (
    <div className='container-fluid '>
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

export default ProjectList