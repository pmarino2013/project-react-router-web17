import "../css/cardProjects.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

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
          <button className="btn btn-outline-info boton  rounded-5" data-bs-toggle="modal" data-bs-target={`#modal-${nombre_proyecto.replaceAll(" ", "_")}`}>
            Ver más
          </button>
        </div>
      </div>
    {/* Modal */}
      <div className="modal  fade"id={`modal-${nombre_proyecto.replaceAll(" ", "_")}`} tabindex="-1">
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content fondo-modal text-white">
            <div className="modal-header">
              <h5 className="modal-title">{nombre_proyecto}</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body  p-2">
                 <img src={imagen_muestra} className="card-img-top  rounded-2 " alt={nombre_proyecto} />
              {descripcion_proyecto}
                <h5>Participantes:</h5>
                {participantes.map((participante,index) =>(
                <div key={index}>
                    <p className="fw-medium m-0">{participante} </p>
                </div>
            ))}
             {tecnologias_usadas.map((tec, index) => (
            <div key={index} className="">
              <small className="badge rounded-pill text-bg-success p-2">{tec.html}</small> 
              <small className="badge rounded-pill text-bg-warning p-2 text-white m-1">{tec.css}</small>
               <small className="badge rounded-pill text-bg-info p-2 text-white">{tec.bootstrap}</small>
              <small className="badge rounded-pill text-bg-danger p-2 text-white">{tec.react}</small>
               <a href={url} className="btn btn-primary  boton p-1 rounded-5 " target="_blank">
            Ver demo
          </a>
            </div>
          ))}
         
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;



