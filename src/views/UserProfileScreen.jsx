import React, { useEffect, useState } from "react";
import "../css/UserProfile.css";

const UserProfileScreen = () => {
  function getUsuarioDatos() {
    let usuarioDatos = localStorage.getItem("usuarioDatos");
    return usuarioDatos
      ? JSON.parse(usuarioDatos)
      : {
          id: null,
          nombre: "",
          foto: "",
          correo: "",
          ciudad: "",
          rol: "",
          compania: "",
        };
  }
  const [usuario, setUsuario] = useState(getUsuarioDatos());
  const [editar, setEditar] = useState(false);
  let cargando = true;

  //Perfil ejemplo
  const usuarioEjemplo = {
    id: 47,
    nombre: "John Doe",
    foto: "https://images.pexels.com/photos/8644073/pexels-photo-8644073.jpeg",
    correo: "hale-ny@outlook.com",
    ciudad: "Nueva York, EEUU",
    rol: "Usuario",
    compania: "RollingCode",
  };

  //Conseguir el perfil del localstorage/base de datos
  useEffect(() => {
    let usuarioInfo = JSON.parse(localStorage.getItem("usuarioDatos"));

    if (usuarioInfo) {
      setUsuario(usuarioInfo);
    } else {
      setUsuario(usuarioEjemplo);
      localStorage.setItem("usuarioDatos", JSON.stringify(usuarioEjemplo));
    }
    cargando = false;
  }, []);

  //Change, submit y cancelar
  const handleChange = ({ target }) => {
    setUsuario({ ...usuario, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      usuario.nombre &&
      usuario.foto &&
      usuario.correo &&
      usuario.ciudad &&
      usuario.compania
    ) {
      localStorage.setItem("usuarioDatos", JSON.stringify(usuario));
      setEditar(!editar);
    } else {
      alert("Quedan campos sin llenar.");
    }
  };

  const handleCancel = () => {
    setUsuario(JSON.parse(localStorage.getItem("usuarioDatos")));
    setEditar(!editar);
  };

  return (
    <div className="user-profile container-lg my-5 py-2">
      {cargando ? (
        <div className="row flex-column flex-md-row">
          {/* Sección con los datos del usuario */}
          <aside className="col-10 col-md-4 align-self-center">
            <div className="imagen d-flex flex-column mb-2">
              {/* Nombre, foto y rol */}
              <h1 className="text-center">{usuario.nombre}</h1>
              <img
                className="rounded-circle align-self-center"
                src={usuario.foto ? usuario.foto : "placeholder"}
                alt={usuario.nombre}
              />
              <p className="text-center">Usuario</p>
              <div className="row row-cols-1 justify-content-center info">
                {/* Ciudad, Correo y Companía */}
                <span className="col">
                  <i className="col fa fa-map-marker" aria-hidden="true"></i>
                  {usuario.ciudad}
                </span>
                <span className="col">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  {usuario.correo}
                </span>
                <span className="col">
                  <i className="fa fa-building" aria-hidden="true"></i>
                  {usuario.compania}
                </span>
              </div>
            </div>
            <div className="col d-flex justify-content-center">
              {/* Abrir y cerrar la zona para editar */}
              <button
                type="button"
                className="btn btn-secondary editar"
                onClick={() => setEditar(!editar)}
              >
                Editar Perfil
              </button>
            </div>
            {editar && (
              //Formulario para editar los datos
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label>Nombre:</label>
                  <input
                    type="text"
                    value={usuario.nombre}
                    name="nombre"
                    className="form-control"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-2">
                  <label>Correo:</label>
                  <input
                    type="email"
                    value={usuario.correo}
                    name="correo"
                    className="form-control"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label>Foto de Perfil:</label>
                  <input
                    type="text"
                    value={usuario.foto}
                    name="foto"
                    className="form-control"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="col fa fa-map-marker" aria-hidden="true"></i>
                  </span>
                  <input
                    type="text"
                    value={usuario.ciudad}
                    name="ciudad"
                    className="form-control"
                    aria-describedby="basic-addon1"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="fa fa-building" aria-hidden="true"></i>
                  </span>
                  <input
                    type="text"
                    value={usuario.compania}
                    name="compania"
                    className="form-control"
                    aria-describedby="basic-addon1"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <button type="submit" className="btn btn-success me-2">
                    Subir
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleCancel}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            )}
          </aside>
          <div className="estadistica col-10 col-md-8">
            {/* Aquí va el componente de estadísticas */}
            <p>Aquí va el componente de estadística</p>
          </div>
        </div>
      ) : (
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default UserProfileScreen;
