//import '../styles/global.css';

import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';
import ToggleContext from '../contexts/ToggleContext'

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(light);
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <ToggleContext.Provider value={{ toggleTheme }}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ToggleContext.Provider>
      </ThemeProvider>


    </div>
  )
}

export default MyApp
