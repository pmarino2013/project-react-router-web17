import { Routes, Route } from "react-router-dom";
import PagesLayout from "../layout/PagesLayout";
import HomeScreen from "../views/HomeScreen";
import AboutScreen from "../views/AboutScreen";
import Error404Screen from "../views/Error404Screen";
import LoginScreen from "../views/LoginScreen";
import UserProfileScreen from "../views/UserProfileScreen";
import ProjectScreen from "../views/ProjectScreen";

const RoutesPrincipal = () => {
  return (
    <Routes>
      <Route path="/" element={<PagesLayout />}>
        <Route index element={<HomeScreen />} />
        <Route path="about" element={<AboutScreen />} />
        <Route path="profile" element={<UserProfileScreen />} />
        <Route path="projects" element={<ProjectScreen />} />
      </Route>
      <Route path="login" element={<LoginScreen />} />
      <Route path="*" element={<Error404Screen />} />
    </Routes>
  );
};

export default RoutesPrincipal;
