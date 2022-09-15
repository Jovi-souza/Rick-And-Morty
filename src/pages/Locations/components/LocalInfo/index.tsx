import {
  Content,
  InfoContent,
  InfoHeaderContainer,
  LocalInfoContainer,
} from './styles'
import { ArrowLeft } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { CharacterCard } from '../../../../components/CharacterCard'
export function LocalInfo() {
  return (
    <LocalInfoContainer>
      <NavLink to="/Locations">
        <button>
          <ArrowLeft size={24} weight="bold" />
          Go Back
        </button>
      </NavLink>
      <InfoHeaderContainer>
        <h1>Earth (Replacement Dimension)</h1>
        <div>
          <div>
            <span>Type</span>
            <span>Planet</span>
          </div>
          <div>
            <span>Dimension</span>
            <span>Replacement Dimension</span>
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
    </LocalInfoContainer>
  )
}
