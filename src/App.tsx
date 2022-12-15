import { BrowserRouter } from 'react-router-dom'
import { CharactersContextProvider } from './Contexts/CharacterContext/context'
import { EpisodesContextProvider } from './Contexts/EpisodesContext/context'
import { LocationsContextProvider } from './Contexts/LocationsContext/context'
import { Router } from './Router'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './utils/queryClient'
export default function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <CharactersContextProvider>
          <EpisodesContextProvider>
            <LocationsContextProvider>
              <Router />
            </LocationsContextProvider>
          </EpisodesContextProvider>
        </CharactersContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  )
}
