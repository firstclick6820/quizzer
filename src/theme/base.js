
// Dark Theme
import { Dark } from './schemes/Dark';



// White Theme
import {Light } from './schemes/Light';



export function themeCreator(theme) {
  return ThemesList[theme];
}

const ThemesList = {
  Dark: Dark,
  Light: Light
};
