import { ScrollProgressBar } from "../scroll-progress-bar/component";
import { ThemeToggle } from "../themeToggle/component.jsx";
import { LoginButton } from "../loginButton/component.jsx";

import { CartButton } from "../cartButton/component.jsx";

export const Header = () => {


  
  return (
    <div className="header-wrapper">
      <div className="header">
        <h3>Header</h3>
        <div className="header-buttons">
          <ThemeToggle />
          <LoginButton />
          <CartButton />
        </div>

      </div>
      <ScrollProgressBar />
    </div>
  );
};
