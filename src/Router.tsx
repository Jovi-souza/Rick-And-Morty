import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './Layout/default'
import { Characters } from './pages/Characters'
import { CharacterCardInfo } from './pages/Characters/components/CharacterCardInfo'
import { Episodes } from './pages/Episodes'
import { EpisodesInfo } from './pages/Episodes/components/EpisodesInfo'
import { Locations } from './pages/Locations'
import { LocalInfo } from './pages/Locations/components/LocalInfo'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Characters />} />
        <Route path="/Characters/Info/:id" element={<CharacterCardInfo />} />
        <Route path="/Locations" element={<Locations />} />
        <Route path="/Locations/Info/:id" element={<LocalInfo />} />
        <Route path="/Episodes" element={<Episodes />} />
        <Route path="/Episodes/Info/:id" element={<EpisodesInfo />} />
      </Route>
    </Routes>
  )
}
