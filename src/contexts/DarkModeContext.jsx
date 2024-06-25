import { useState, useEffect, createContext } from "react";

export const DarkModeContext = createContext();

const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
      const savedDarkMode = localStorage.getItem("darkMode");
      if (savedDarkMode === "enabled") {
        setDarkMode(true);
      }
    }, []);

   const toggleDarkMode = () => {
     setDarkMode((prevDarkMode) => {
       const isDarkMode = !prevDarkMode;
       localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
       return isDarkMode;
     });
   };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
