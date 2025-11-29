import "../css/cardProjects.css";

const CardProject = ({ proyecto }) => {
  const {
    nombre_proyecto,
    descripcion_proyecto,
    imagen_muestra,
    tecnologias_usadas,
    url,
    participantes,
  } = proyecto;
  return (
    <div className="m-2">
      <div className="card tarjeta col-sm-12 col-md-2  h-100 p-3 rounded-2 overflow-hidden text-white " style={{ width: "18rem" }}>
        <img src={imagen_muestra} className="card-img-top  rounded-2 " alt={nombre_proyecto} />
        <div className="card-body  mt-1">
          <h5 className="card-title fw-light p-0"> {nombre_proyecto}</h5>
          <a href={url} className="btn btn-outline-info boton  rounded-5" target="_blank">
          Ver más
          </a>
        </div>
      </div>

    </div>
  );
};

export default CardProject;



