import { Outlet } from "react-router-dom";
import FooterApp from "../components/FooterApp";
import NavBarApp from "../components/NavBarApp";

const PagesLayout = () => {
  return (
    <>
      <header>
        <NavBarApp/>
        </header>
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
