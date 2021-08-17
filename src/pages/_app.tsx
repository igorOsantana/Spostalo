import { ThemeProvider, DefaultTheme } from 'styled-components';
import { usePersistedState } from '../hooks/usePersistedState';
import GlobalStyle from '../styles/global';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';
import ToggleContext from '../contexts/ToggleContext';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ToggleContext.Provider value={{ toggleTheme }}>
        <GlobalStyle />
        {isMounted && <Component {...pageProps} />}
      </ToggleContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
