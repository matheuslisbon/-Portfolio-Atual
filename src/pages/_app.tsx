import React, { useState } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import dark from '../styles/themes/dark'
import light from '../styles/themes/light'
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
    console.log('a')
  }
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} togleTheme={toggleTheme} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
