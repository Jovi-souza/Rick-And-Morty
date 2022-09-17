import { NavLink } from 'react-router-dom'
import { EpisodeInfoContainer } from './styles'

interface EpisodeProps {
  name: string
  episode: string
}

export function EpisodeInfo({ episode, name }: EpisodeProps) {
  return (
    <NavLink to="/Episodes/info">
      <EpisodeInfoContainer>
        <h2>{name}</h2>
        <p>{episode}</p>
      </EpisodeInfoContainer>
    </NavLink>
  )
}
