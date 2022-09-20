import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CharactersContextProvider } from './Contexts/CharacterContext/context'
import { EpisodesContextProvider } from './Contexts/EpisodesContext/context'
import { LocationsContextProvider } from './Contexts/LocationsContext/context'
import { Router } from './Router'
import { GlobalStyle } from './styles/Global'
import { defaultTheme } from './styles/themes/default'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CharactersContextProvider>
          <EpisodesContextProvider>
            <LocationsContextProvider>
              <Router />
            </LocationsContextProvider>
          </EpisodesContextProvider>
        </CharactersContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
