import { useMemo, useState } from "react";
import { THEMES } from "./constants";
import { ThemeContext } from "./context";

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEMES.light);

  //   const toggleTheme = () => {
  //     setTheme(() => (theme === THEMES.light ? THEMES.dark : THEMES.light));
  //   };

  const contextValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  // note: we are passing the context value to the provider wrapped in useMemo to avoid creating a new object  and triggering a re-render all child components every time when the theme changes
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
