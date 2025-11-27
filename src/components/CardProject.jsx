import "../css/cardProjects.css"
const CardProject = ({ proyecto }) => {
    const {
        nombre_proyecto,
        descripcion_proyecto,
        imagen_muestra,
        tecnologias_usadas,
        url,
        participantes
    } = proyecto;
    return (
        <div className='m-2'>
            <div className="card tarjeta col-sm-12 col-md-2 h-100 rounded-4 overflow-hidden" style={{ width: '18rem' }}>
                <img src={imagen_muestra} className="card-img-top img-fluid" alt={nombre_proyecto}/>
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title"> {nombre_proyecto}</h5>
                        <h6>{participantes}</h6>
                        <p className="card-text"> {descripcion_proyecto}</p>
                        <small>{tecnologias_usadas}</small>
                        
                        <a href={url} className="btn btn-primary mt-auto " target="_blank">Ver más</a>
                    </div>
            </div>
        </div>
    )
}

export default CardProject