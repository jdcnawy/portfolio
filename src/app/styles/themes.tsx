import React, { createContext, useContext, ReactNode } from 'react';
import { createTheme, Theme, ThemeOptions, PaletteOptions, TypeBackground } from '@mui/material/styles';

interface CustomTypeBackground extends TypeBackground {
  dark?: string;
  light?: string;
}

interface CustomPaletteOptions extends PaletteOptions {
  background?: CustomTypeBackground;
}

interface ExtendedPaletteOptions extends CustomPaletteOptions {
  background?: CustomTypeBackground;
}

type CustomTheme = Theme & {
  palette: ExtendedPaletteOptions;
};

type ThemeContextType = {
  theme: CustomTheme;
  toggleDarkMode: () => void;
};

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#ff4081',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#333',
      secondary: '#757575',
    },
  } as ExtendedPaletteOptions, // Type assertion
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#333',
      dark: '#111',
    } as CustomTypeBackground,
    text: {
      primary: '#ffffff',
      secondary: '#bdbdbd',
    },
  } as ExtendedPaletteOptions, // Type assertion
});

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const currentTheme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { lightTheme, darkTheme };