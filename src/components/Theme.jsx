import { useEffect } from "react";
import { MainContext, useContext } from "../hooks/Context";

function Theme() {
  const { theme, setTheme, toggleTheme } = useContext(MainContext);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, [setTheme]);

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return (
    <>
      <button
        onClick={toggleTheme}
        className="nav-item nav-link ms-auto d-flex align-self-end justify-content-center"
      >
        {theme === "light" ? (
          <i className="bi bi-moon-stars-fill text-primary fs-4"></i>
        ) : (
          <i className="bi bi-brightness-high-fill text-primary fs-4"></i>
        )}
      </button>
    </>
  );
}

export default Theme;
