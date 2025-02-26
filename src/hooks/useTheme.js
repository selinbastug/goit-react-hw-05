import { useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return { theme, setTheme, toggleTheme };
};

export default useTheme;
