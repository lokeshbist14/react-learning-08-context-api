import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import "../ThemeExample.css";


function ThemeExample() {
    const {darkMode, setDarkMode} = useContext(ThemeContext);

  return (
    <div className={darkMode ? "dark" : "Light"}>
    <h2>Theme Example</h2>  

    <p>Current theme: {darkMode ? "Dark" : "Light"}</p>

    <button onClick={() => setDarkMode(!darkMode)}>
        Change Theme
    </button>
    </div>
  );
}

export default ThemeExample;
