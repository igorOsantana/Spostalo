import { ThemeProvider, DefaultTheme } from 'styled-components';
import { usePersistedState } from '../utils/usePersistedState';
import GlobalStyle from '../styles/global';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';
import ToggleContext from '../contexts/ToggleContext';
import { BrowserRouter, Router, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <ToggleContext.Provider value={{ toggleTheme }}>
              <GlobalStyle />
              {isMounted && <Component {...pageProps} />}
            </ToggleContext.Provider>
            </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default MyApp
