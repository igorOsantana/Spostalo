import { ThemeProvider } from 'styled-components';
import { usePersistedState } from '../utils/usePersistedState';
import GlobalStyle from '../styles/global';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';
import ToggleContext from '../contexts/ToggleContext'

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = usePersistedState('theme', light);
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
