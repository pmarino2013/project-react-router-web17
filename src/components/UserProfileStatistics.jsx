import UserProfileProjects from "./UserProfileProject";

function UserProfileStatistics({ usuario }) {

    return <>

        <div className="d-flex flex-column my-3 gap-3">
            <label className="fw-bolder">Asistencia: {usuario.estadistica.asistencia}</label>
            <label className="fs-5 fw-bolder">Proyectos</label>
            <div className="d-flex flex-wrap gap-2">
                {
                    usuario.estadistica.proyectos.map((elemento, index) => (
                        <UserProfileProjects elemento={elemento} key={index} />
                    ))
                }
            </div>
            <div className="d-flex flex-wrap gap-3">
                <div className="d-flex flex-column align-items-center px-2">
                    <p className="fw-bolder">Modulo 1</p>
                    <p className="fs-6 gorder rounded bg-secondary text-white p-2">{usuario.estadistica.progreso.modulo1}</p>
                </div>
                <div className="d-flex flex-column align-items-center px-2">
                    <p className="fw-bolder">Modulo 2</p>
                    <p className="fs-6 gorder rounded bg-secondary text-white p-2">{usuario.estadistica.progreso.modulo2}</p>
                </div>
                <div className="d-flex flex-column align-items-center px-2">
                    <p className="fw-bolder text-wrap">Proyecto Final</p>
                    <p className="fs-6 gorder rounded bg-secondary text-white p-2">{usuario.estadistica.progreso.proyecto}</p>
                </div>
            </div>
        </div>

    </>
}

export default UserProfileStatistics