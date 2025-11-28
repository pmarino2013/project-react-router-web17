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
      <div
        className="card tarjeta col-sm-12 col-md-2 h-100 rounded-4 overflow-hidden"
        style={{ width: "18rem" }}
      >
        <img
          src={imagen_muestra}
          className="card-img-top img-fluid"
          alt={nombre_proyecto}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title"> {nombre_proyecto}</h5>
            {participantes.map((participante,index) =>(
                <div key={index}>
                    <p className="fw-medium m-0">{participante} </p>
                </div>
            ))}
          
          
          <p className="card-text"> {descripcion_proyecto}</p>
          {tecnologias_usadas.map((tec, index) => (
            <div key={index}>
              <small className="badge rounded-pill text-bg-success p-2">{tec.html}</small> 
              <small className="badge rounded-pill text-bg-warning p-2 text-white m-1">{tec.css}</small>
              <small className="badge rounded-pill text-bg-danger p-2 text-white">{tec.react}</small>
            </div>
          ))}

          <a href={url} className="btn btn-primary mt-auto " target="_blank">
            Ver más
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
