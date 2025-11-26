import React from 'react'

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
        <div>

            <div className="card" style={{ width: '18rem' }}>
                <img src={imagen_muestra} className="card-img-top" alt={nombre_proyecto}/>
                    <div className="card-body">
                        <h5 className="card-title"> {nombre_proyecto}</h5>
                        <h6>{participantes}</h6>
                        <p className="card-text"> {descripcion_proyecto}</p>
                        <small>{tecnologias_usadas}</small>
                        
                        <a href={url} className="btn btn-primary">Ver más</a>
                    </div>
            </div>
        </div>
    )
}

export default CardProject