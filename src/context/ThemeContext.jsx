// src/contexts/ThemeContext.js
import { createContext, useContext } from 'react';

// Define our theme constants
export const theme = {
  colors: {
    primary: {
      from: 'from-rose-400',
      to: 'to-purple-500',
      text: 'text-rose-400'
    },
    background: {
      main: 'bg-[#030712]',
      secondary: 'bg-gray-900'
    },
    text: {
      primary: 'text-white',
      secondary: 'text-gray-300'
    },
    button: {
      primary: 'bg-gradient-to-r from-rose-400 to-purple-500',
      hover: 'from-purple-500 to-rose-400'
    }
  },
  typography: {
    heading: 'font-extralight tracking-tight',
    body: 'font-light tracking-wide'
  },
  animation: {
    transition: 'transition-all duration-500'
  }
};

// Create the context
const ThemeContext = createContext(theme);

// Create a provider component
export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create a hook to use the theme
export const useTheme = () => useContext(ThemeContext);