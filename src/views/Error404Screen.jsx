import React from "react";
import { Link } from "react-router-dom";

const Error404Screen = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center text-center min-vh-100">
      {/* <h1 className="display-4 fw-bold">404</h1> */}
      <div>
      <img src="src/assets/404.webp" className="img-fluid" /* style={{margin:"-100px"}} */ alt="" />

      <p className="lead">
        Al parecer hubo un problema con tu pedido😢.
      </p>
      </div>

      <Link to="/" className="btn btn-dark mt-3">
        Volver al inicio
      </Link>
    </div>
  );
};

export default Error404Screen;
