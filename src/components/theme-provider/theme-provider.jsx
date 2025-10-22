import { useCallback, useState } from "react";
import { ThemeContext } from ".";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = useCallback(
    () => setTheme((current) => (current === "dark" ? "light" : "dark")),
    []
  );
  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
};
