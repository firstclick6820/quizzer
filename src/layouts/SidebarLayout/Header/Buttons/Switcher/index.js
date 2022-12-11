import {useContext} from 'react'


import {
    IconButton,
  
  } from '@mui/material';
  
  
 import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
 import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
  

 import {ThemeContext} from '../../../../../theme/ThemeProvider'



  function Switcher() {
    const { themeMode, themeName} = useContext(ThemeContext);
    
   


    return (
      <>
        <IconButton onClick={themeMode.switchMode}>
          {themeName === "Dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>

      </>
    );
  }
  
  export default Switcher;
  