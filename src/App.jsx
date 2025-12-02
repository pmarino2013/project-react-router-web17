import { BrowserRouter, data } from "react-router-dom";
import RoutesPrincipal from "./routes/RoutesPrincipal";
import 'bootstrap/dist/js/bootstrap.bundle.min';


const App = () => {
  return (
    <BrowserRouter>
      <RoutesPrincipal />
    </BrowserRouter>
  );
};

export default App;
