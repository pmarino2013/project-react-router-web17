import { Outlet } from "react-router-dom";
import FooterApp from "../components/FooterApp";

const PagesLayout = () => {
  return (
    <>
      <header>{/* componente navbar  */}</header>
      <main>
        <Outlet />
      </main>
      <footer>
        <FooterApp />
      </footer>
    </>
  );
};

export default PagesLayout;
