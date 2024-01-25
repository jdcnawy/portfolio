import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from '../app';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../app/styles/themes';
import { CssBaseline } from '@mui/material';

const IndexPage: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const theme = darkMode ? darkTheme : lightTheme;

  useEffect(() => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
      const root = createRoot(rootElement);
      root.render(
        <React.StrictMode>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App toggleDarkMode={toggleDarkMode} />
          </ThemeProvider>
        </React.StrictMode>
      );
    }
  }, [theme]);

  return <div id="root"></div>;
};

export default IndexPage;






