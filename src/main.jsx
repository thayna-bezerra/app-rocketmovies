import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/theme'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

import {Details} from './pages/Details'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Details />
    </ThemeProvider>
  </React.StrictMode>,
)
