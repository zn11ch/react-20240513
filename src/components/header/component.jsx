import { ScrollProgressBar } from "../scroll-progress-bar/component";
import { ThemeToggle } from "../themeToggle/component.jsx";
import { LoginButton } from "../loginButton/component.jsx";
import { CartButtonContainer } from "../cartButton/container.jsx";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="header-menu">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/contacts">Contacts</Link>
          </div>
          <div>
            <Link to="/restaurants">Restaurants </Link>
          </div>
        </div>
        <div className="header-buttons">
          <ThemeToggle />
          <LoginButton />
          <CartButtonContainer />
        </div>
      </div>
      <ScrollProgressBar />
    </div>
  );
};
