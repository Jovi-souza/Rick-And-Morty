import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CardsContextProvider } from './Contexts/characterContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/Global'
import { defaultTheme } from './styles/themes/default'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CardsContextProvider>
          <Router />
        </CardsContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
