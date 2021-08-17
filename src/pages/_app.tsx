import { useEffect, useState } from 'react';
import { usePersistedState } from '../hooks/usePersistedState';
import ToggleContext from '../contexts/ToggleContext';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../store';

import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from '../styles/global';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

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
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <ToggleContext.Provider value={{ toggleTheme }}>
          <GlobalStyle />
          {isMounted && <Component {...pageProps} />}
        </ToggleContext.Provider>
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default MyApp;
