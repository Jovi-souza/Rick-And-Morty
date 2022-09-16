import { Route, Routes } from 'react-router'
import { DefaultLayout } from './Layout/default'
import { Characters } from './pages/Characters'
import { CharacterCardInfo } from './pages/Characters/components/CharacterCardInfo'
import { Episodes } from './pages/Episodes'
import { EpisodesInfo } from './pages/Episodes/EpisodesInfo'
import { Locations } from './pages/Locations'
import { LocalInfo } from './pages/Locations/components/LocalInfo'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Characters />} />
        <Route path="/Characters/Info" element={<CharacterCardInfo />} />
        <Route path="/Locations" element={<Locations />} />
        <Route path="/Locations/Info" element={<LocalInfo />} />
        <Route path="/Episodes" element={<Episodes />} />
        <Route path="/Episodes/Info" element={<EpisodesInfo />} />
      </Route>
    </Routes>
  )
}
