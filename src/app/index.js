import React from 'react'
import ReactDOM from 'react-dom'
import WebFont from 'webfontloader'
import { ThemeProvider } from "styled-components";

import darkTheme from "app/themes/dark";
import lightTheme from 'app/themes/light'

import Router from 'app/components/Router'
import GlobalStyles from 'app/helpers/globalStyles'
import { generateStore } from 'app/redux'
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
  
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Provider store={store}>
        <GlobalStyles />
        <Router setIsDarkMode={setIsDarkMode} />
      </Provider>
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
