import SetTechColor from "./SetTechColor"

function UserProfileProjects({elemento}) {
    return <>
        <div className="card">
            <div className="card-body">
                <p className="fw-bolder card-title">{elemento.nombre}</p>
                <p className="card-text">{elemento.descripcion}</p>
                {
                    elemento.tecnologias.map( (tech,index) => (
                        <SetTechColor tech={tech} key={index} />
                     ) )
                }
            </div>
        </div>
    </>
}

export default UserProfileProjects