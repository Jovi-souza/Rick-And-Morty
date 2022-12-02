import { BrowserRouter } from 'react-router-dom'
import { CharactersContextProvider } from './Contexts/CharacterContext/context'
import { EpisodesContextProvider } from './Contexts/EpisodesContext/context'
import { LocationsContextProvider } from './Contexts/LocationsContext/context'
import { Router } from './Router'

export default function App() {
  return (
    <BrowserRouter>
      <CharactersContextProvider>
        <EpisodesContextProvider>
          <LocationsContextProvider>
            <Router />
          </LocationsContextProvider>
        </EpisodesContextProvider>
      </CharactersContextProvider>
    </BrowserRouter>
  )
}
