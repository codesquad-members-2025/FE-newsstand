import { useContext } from "react";
import { ThemeContext } from "../../utils/ThemeContext";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>{theme === "light" ? "🌙" : "☀️"}</button>
  );
}
