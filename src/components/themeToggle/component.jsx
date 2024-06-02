import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";

export const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const themeChange = (theme) => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <button
      onClick={() => {
        themeChange(theme);
      }}
    >
      Switch theme
    </button>
  );
};
