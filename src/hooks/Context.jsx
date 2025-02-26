import { useContext, createContext, useState } from "react";
import useTheme from "./useTheme";

const MainContext = createContext();

const MainProvider = ({ children }) => {
  //useTheme() ile handle edildi.
  const { theme, setTheme, toggleTheme } = useTheme();
  //
  const [loading, setLoading] = useState(false);
  const [searchMovies, setSearchMovies] = useState([]);

  const data = {
    theme,
    setTheme,
    toggleTheme,
    loading,
    setLoading,
    searchMovies,
    setSearchMovies,
  };

  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};

export { MainProvider, MainContext, useContext };
