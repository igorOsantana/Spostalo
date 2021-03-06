//import '../styles/global.css';

import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(light);
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }
  return (
    <div>
      <ThemeProvider theme={theme}>

        <GlobalStyle />
        <Component toggleTheme={toggleTheme} {...pageProps} />
      </ThemeProvider>

    </div>
  )
}

export default MyApp
