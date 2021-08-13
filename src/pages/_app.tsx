import { ThemeProvider, DefaultTheme } from 'styled-components';
import { usePersistedState } from '../hooks/usePersistedState';
import GlobalStyle from '../global/styles/global';
import light from '../global/styles/themes/light';
import dark from '../global/styles/themes/dark';
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
    <>
      <ThemeProvider theme={theme}>
        <ToggleContext.Provider value={{ toggleTheme }}>
          <GlobalStyle />
          {isMounted && <Component {...pageProps} />}
        </ToggleContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
