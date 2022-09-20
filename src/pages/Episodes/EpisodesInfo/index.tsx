import { ArrowLeft } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { EpisodesContext } from '../../../Contexts/EpisodesContext/context'
import {
  Content,
  EpisodesInfocontainer,
  InfoContent,
  InfoHeaderContainer,
} from './styles'

export function EpisodesInfo() {
  const { Episode } = useContext(EpisodesContext)

  return (
    <EpisodesInfocontainer>
      <NavLink to="/Episodes">
        <button>
          <ArrowLeft size={24} weight="bold" />
          Go Back
        </button>
      </NavLink>
      <InfoHeaderContainer>
        <h1>{Episode.name}</h1>
        <div>
          <div>
            <span>Episode</span>
            <span>{Episode.episode}</span>
          </div>
          <div>
            <span>Date</span>
            <span>{Episode.air_date}</span>
          </div>
        </div>
      </InfoHeaderContainer>
      <InfoContent>
        <h1>Residents</h1>
        <Content></Content>
      </InfoContent>
    </EpisodesInfocontainer>
  )
}
