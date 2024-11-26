// "light" === lightMode, "dark" === darkMode
import { createContext, useState } from "react";

export const ThemeContext = createContext({});

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    console.log("Updated theme:",theme === "light" ? "dark" : "light");
    setTheme(theme === "light" ? "dark" : "light");
  };
  
  return (
    <div>
      <ThemeContextProvider value={{ theme, toggleTheme: toggleTheme }}>
        {children}
      </ThemeContextProvider>
    </div>
  );
}

// export default ThemeContext;
