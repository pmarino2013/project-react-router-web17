function SetTechColor({ tech }) {
  function SetColor(tech) {
    switch (tech) {
      case "react":
        return (
          <div className="badge ms-1 rounded-pill bg-success text-white">
            React
          </div>
        );
        break;
      case "vite":
        return (
          <div className="badge ms-1 rounded-pill bg-danger text-white">
            Vite
          </div>
        );
        break;
      case "node.js":
        return (
          <div className="badge ms-1 rounded-pill bg-success text-dark bg-opacity-50">
            Node.js
          </div>
        );
        break;
      case "mongoDB":
        return (
          <div className="badge ms-1 rounded-pill bg-primary text-white">
            mongoDB
          </div>
        );
        break;
      case "javascript":
        return (
          <div className="badge ms-1 rounded-pill bg-warning text-dark">
            Javascript
          </div>
        );
        break;
      case "bootstrap":
        return (
          <div className="badge ms-1 rounded-pill bg-dark text-white">
            Bootstrap
          </div>
        );
        break;
      case "css":
        return (
          <div className="badge ms-1 rounded-pill bg-info text-dark">css</div>
        );
        break;
      case "html":
        return (
          <div className="badge ms-1 rounded-pill bg-danger text-white">
            html
          </div>
        );
        break;
      default:
        return (
          <div className="badge ms-1 rounded-pill bg-transparent text-dark">
            {tech}
          </div>
        );
        break;
    }
  }

  return SetColor(tech);
}

export default SetTechColor;
