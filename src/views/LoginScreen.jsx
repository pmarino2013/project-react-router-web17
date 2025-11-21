import "../css/login.css";

const LoginScreen = () => {
  return (
    <div className="container-fluid fondo">
      <div className="row vh-100  align-items-center">
        <div className="col-12 col-md-6 offset-md-3  p-4 rounded-5 form-fondo">
          <h1 className="text-center my-5">Inicia tu sesión</h1>
            <form className="">
              <div className="mb-3">
                <label>Correo electrónico</label>
                <input type="email" className="form-control" name="correo" />
              </div>
              <div className="mb-3">
                <label>Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                />
              </div>
              <div className="mb-3 d-grid">
                <button className="btn btn-success">Iniciar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default LoginScreen;
