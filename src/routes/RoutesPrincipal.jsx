import { Routes, Route } from "react-router-dom";
import PagesLayout from "../layout/PagesLayout";
import HomeScreen from "../views/HomeScreen";
import AboutScreen from "../views/AboutScreen";
import Error404Screen from "../views/Error404Screen";

const RoutesPrincipal = () => {
  return (
    <Routes>
      <Route path="/" element={<PagesLayout />}>
        <Route index element={<HomeScreen />} />
        <Route path="about" element={<AboutScreen />} />
      </Route>
       <Route path="*" element={<Error404Screen />} />
    </Routes>
  );
};

export default RoutesPrincipal;
