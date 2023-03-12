import { useEffect } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import moment from 'moment'
import 'moment/locale/pt-br'

import theme from '../src/theme'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme.black};
    background-color: ${props => props.theme.background};
  }

  a {
    color: #8933CD;
    font-weight: bold;
    text-decoration: none;
  }
`

function App ({ Component, pageProps }) {
  useEffect(() => {
    moment.locale('pt-br')
  }, [])
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
    
  )
}

export default App