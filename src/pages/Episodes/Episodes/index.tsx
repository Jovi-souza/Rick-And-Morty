import { NavLink } from 'react-router-dom'
import { EpisodeInfoContainer } from './styles'

export function EpisodeInfo() {
  return (
    <NavLink to="/Episodes/info">
      <EpisodeInfoContainer>
        <h1>Pilot</h1>
        <p>December 2, 2013</p>
        <p>SE01E01</p>
      </EpisodeInfoContainer>
    </NavLink>
  )
}
