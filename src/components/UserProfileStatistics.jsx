import UserProfileProjects from "./UserProfileProject";

function UserProfileStatistics({ usuario }) {
  const {
    estadistica: { proyectos, progreso },
  } = usuario;
  return (
    <div className="container flex-column my-3 gap-3">
      {/* Número de proyectos */}
      <label className="fs-5 fw-bolder">Proyectos ({proyectos.length})</label>
      {/* Lista de proyectos */}
      <div className="row row-cols-1 flex-wrap row-gap-2">
        {proyectos.map((proyecto, index) => (
          <UserProfileProjects proyecto={proyecto} key={index} />
        ))}
      </div>
      {/* Progreso de módulos */}
      <div className="row row-cols-3 my-3">
        <div className="col flex-column">
          <p className="fw-bolder text-center">Módulo 1</p>
          <p className="fs-6 gorder rounded bg-secondary text-center text-center text-white p-2">
            {progreso.modulo1}
          </p>
        </div>
        <div className="col flex-column align-content-center">
          <p className="fw-bolder text-center">Módulo 2</p>
          <p className="fs-6 gorder rounded bg-secondary text-center text-center text-white p-2">
            {progreso.modulo2}
          </p>
        </div>
        <div className="col flex-column align-content-center">
          <p className="fw-bolder text-center">Módulo 3</p>
          <p className="fs-6 border rounded bg-secondary text-center text-center text-white p-2">
            {progreso.modulo3}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserProfileStatistics;
