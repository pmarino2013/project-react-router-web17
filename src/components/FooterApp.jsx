import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";

const FooterApp = () => {
  return (
    <div className="py-3 footer-app">
      <div className="container">
        {/* Links a las otras páginas */}
        <ul className="nav justify-content-center pb-3 mb-3">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="about">
              Sobre nosotros
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="project">
              Proyectos
            </Link>
          </li>
        </ul>
        {/* Copyright y redes */}
        <div className="row flex-column-reverse flex-sm-row justify-content-between align-items-center pb-1">
          <div className="col-10 col-sm-8 d-flex my-2 justify-content-center justify-content-sm-start ">
            <img
              src="https://universe.rollingcodeschool.com/assets/rolling-logo-2697050d.png"
              alt="rolling"
              width="25px"
            />
            <span> &#169; 2025 - RollingCode School</span>
          </div>
          <div className="col-12 col-sm-4 d-flex justify-content-center justify-content-sm-end social">
            <a
              href="https://www.instagram.com/rollingcodeschool/"
              target="_blank"
            >
              <i className="fa fa-2x fa-instagram" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/rollingcodeschool/posts/?feedView=all"
              target="_blank"
            >
              <i className="fa fa-2x fa-linkedin-square" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.facebook.com/RollingCodeSchool"
              target="_blank"
            >
              <i
                className="fa fa-2x fa-facebook-official"
                aria-hidden="true"
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterApp;
