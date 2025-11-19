import { Outlet } from "react-router-dom";

const PagesLayout = () => {
  return (
    <>
      <header>{/* componente navbar  */}</header>
      <main>
        <Outlet />
      </main>
      <footer>{/* componente footer  */}</footer>
    </>
  );
};

export default PagesLayout;
