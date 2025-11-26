import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";

const LoginScreen = () => {
   const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
  correo: "",
  password: ""
});
  const handleChamge=(e)=> setFormValue({...formValue,[e.target.name]: e.target.value})
  const usuarios = [
    {
      id: 1,
      correo: "lucas@gmail.com",
      password: "123456",
      rol: "admin",
      nombre: "Lucas"
    },
    {
      id: 2,
      correo: "maria@gmail.com",
      password: "contra2025",
      rol: "usuario",
      nombre: "María"
    },
    {
      id: 3,
      correo: "facundo@gmail.com",
      password: "pass789",
      rol: "editor",
      nombre: "Facundo"
    },
    {
      id: 4,
      correo: "sofia@gmail.com",
      password: "abc123",
      rol: "usuario",
      nombre: "Sofía"
    },
    {
      id: 5,
      correo: "juan@gmail.com",
      password: "juanito",
      rol: "moderador",
      nombre: "Juan"
    }
  ];
  const handleSubmit = (e) => {
    e.preventDefault();

    if(formValue.correo && formValue.password){
      const usuarioEncontrado = usuarios.find(
          (u) => 
            u.correo === formValue.correo &&
          u.password === formValue.password
        );  
      if(usuarioEncontrado){
        navigate("/");
      } else{
        alert("Usuario o contraseña incorrectos");
      }
    }else{
      alert("Correo o password vacio");
    }
  };
  return (
    <div className="container-fluid fondo">
      <div className="row vh-100  align-items-center">
        <div className="col-12 col-md-6 offset-md-3  p-4 rounded-5 form-fondo">
          <h1 className="text-center my-5">Inicia tu sesión</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Correo electrónico</label>
              <input type="email" 
              className="form-control" 
              name="correo"
              value={formValue.correo}  
              onChange={handleChamge} />
            </div>
            <div className="mb-3">
              <label>Contraseña</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={handleChamge}
                value={formValue.password}
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
