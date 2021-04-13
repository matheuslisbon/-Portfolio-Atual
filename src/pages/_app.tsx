import React, { useState } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import dark from '../styles/themes/dark'
import light from '../styles/themes/light'
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(dark)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} togleTheme={toggleTheme} theme={theme.title} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
