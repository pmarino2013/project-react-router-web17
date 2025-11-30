import { BrowserRouter, data } from "react-router-dom";
import RoutesPrincipal from "./routes/RoutesPrincipal";
import ProjectList from "./components/ProjectList";

const App = () => {
  return (
    <BrowserRouter>
      <RoutesPrincipal />
      <ProjectList />
    </BrowserRouter>
  );
};

export default App;
