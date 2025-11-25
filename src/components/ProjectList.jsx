import CardProject from './CardProject'
import proyectosData from '/src/db/data.js';

const ProjectList = () => {
  const proyectos = proyectosData.proyectos;
  return (
    <div>
      {
        // 1. Corregido el orden: (elemento, índice)
        proyectos.map((proyecto, index) => {
          return (
            // 2. 'key' recibe el índice (número).
            // 3. 'proyecto' recibe el objeto completo.
            <CardProject key={index} proyecto={proyecto}/>
          );
        })
      }
    </div>
  )
}

export default ProjectList