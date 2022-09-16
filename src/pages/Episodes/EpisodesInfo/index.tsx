import { ArrowLeft } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { CharacterCard } from '../../../components/CharacterCard'
import {
  Content,
  EpisodesInfocontainer,
  InfoContent,
  InfoHeaderContainer,
} from './styles'

export function EpisodesInfo() {
  return (
    <EpisodesInfocontainer>
      <NavLink to="/Episodes">
        <button>
          <ArrowLeft size={24} weight="bold" />
          Go Back
        </button>
      </NavLink>
      <InfoHeaderContainer>
        <h1>Pilot</h1>
        <div>
          <div>
            <span>Episode</span>
            <span>SE01E01</span>
          </div>
          <div>
            <span>Date</span>
            <span>December 2, 2013</span>
          </div>
        </div>
      </InfoHeaderContainer>
      <InfoContent>
        <h1>Residents</h1>
        <Content>
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
        </Content>
      </InfoContent>
    </EpisodesInfocontainer>
  )
}
