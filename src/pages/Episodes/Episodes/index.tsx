import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { EpisodesContext } from '../../../Contexts/EpisodesContext/context'
import { EpisodeInfoContainer } from './styles'

interface EpisodeProps {
  name: string
  episode: string
  id: number
}

export function EpisodeInfo({ episode, name, id }: EpisodeProps) {
  const { fetchEpisodesInfo } = useContext(EpisodesContext)
  const getEpisode = () => {
    fetchEpisodesInfo(id)
  }
  return (
    <NavLink to="/Episodes/info" onClick={getEpisode}>
      <EpisodeInfoContainer>
        <h2>{name}</h2>
        <p>{episode}</p>
      </EpisodeInfoContainer>
    </NavLink>
  )
}
