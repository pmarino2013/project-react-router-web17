import SetTechColor from "./SetTechColor";

function UserProfileProjects({ proyecto }) {
  return (
    <div className="col">
      <div className="card h-100">
        <div className="card-body d-flex flex-column justify-content-between">
          <h4 className="card-title">{proyecto.nombre}</h4>
          <p className="card-text">{proyecto.descripcion}</p>
          <div>
            {proyecto.tecnologias.map((tech, index) => (
              <SetTechColor tech={tech} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfileProjects;
