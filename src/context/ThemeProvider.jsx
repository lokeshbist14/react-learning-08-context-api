import React, { useState } from 'react'
import ThemeContext from './ThemeContext';

function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        {children}
    </ThemeContext.Provider>  
    </div>
  );
}

export default ThemeProvider;