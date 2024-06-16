import { Outlet } from "react-router-dom";
import { Footer } from "../footer/component";
import { Header } from "../header/component";

export const Layout = () => {
  return (
    <div>
      <div id="modal-root" style={{ position: "relative", zIndex: 2 }}></div>
      <div id="layout">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
