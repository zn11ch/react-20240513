import { useTheme } from "../../contexts/theme/hooks";

export const Button = ({ children, ...props }) => {
  const { theme } = useTheme();

  return (
    <button
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        border: theme === "light" ? "1px solid black" : "1px solid white",
      }}
      {...props}
    >
      {children}
    </button>
  );
};
