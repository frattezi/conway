import React from 'react'
import ReactDOM from 'react-dom'
import WebFont from 'webfontloader'
import { ThemeProvider } from "styled-components";

import darkTheme from "app/themes/dark";
import lightTheme from 'app/themes/light'

import Router from 'app/components/Router'
import GlobalStyles from 'app/helpers/globalStyles'
import { generateStore } from 'app/redux'
import {  useTheme } from 'app/redux/theme'
import { Provider } from 'react-redux'

WebFont.load({
  google: {
    families: [
      'Space Mono: 300,400,500,600,700,800',
      'Roboto: 300,400,500,600,700,800',
      'Montserrat: 300,400,500'
    ]
  }
})
const App = () => {
  const store = generateStore()
  const { isDarkMode } = useTheme()

  return (
    <Provider store={store}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
