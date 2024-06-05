import { Button } from "../button/component";
import { useTheme } from "../../contexts/theme/hooks";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const themeChange = (theme) => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <Button
      onClick={() => {
        themeChange(theme);
      }}
    >
      Switch theme
    </Button>
  );
};
