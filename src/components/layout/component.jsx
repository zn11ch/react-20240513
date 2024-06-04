import { Footer } from "../footer/component";
import { Header } from "../header/component";

export const Layout = ({ children }) => {
  return (
    <div>
      <div id="modal-root" style={{ position: "relative", zIndex: 2 }}></div>
      <div id="layout">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};
