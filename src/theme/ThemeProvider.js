import React, { useState, useMemo } from 'react';
import { ThemeProvider } from '@mui/material';
import { themeCreator } from './base';
import { StylesProvider } from '@mui/styles';

export const ThemeContext = React.createContext();




const ThemeProviderWrapper = function (props) {

  const curThemeName = localStorage.getItem('appTheme') || 'Dark';
  // check the the theme name if there is any any theme avialable 
  const [themeName, _setThemeName] = useState(curThemeName);

  


  const themeMode = useMemo(

      () => ({
        switchMode: () => {
        
            _setThemeName((prev) => ( prev === "Dark" ? "Light" : "Dark" ));
            localStorage.setItem('appTheme', themeName);
       
            }
     
        }),
      []
    );


 

  
  const theme = themeCreator(themeName);
  const setThemeName = (themeName) => {
    localStorage.setItem('appTheme', themeName);
    _setThemeName(themeName);
  };
  
  return (
    <StylesProvider injectFirst>
      <ThemeContext.Provider value={{setThemeName, themeMode, themeName}}>
        <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
      </ThemeContext.Provider>
    </StylesProvider>
  );
};

export default ThemeProviderWrapper;
