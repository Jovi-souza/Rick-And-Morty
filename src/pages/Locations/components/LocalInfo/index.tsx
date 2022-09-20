import {
  Content,
  InfoContent,
  InfoHeaderContainer,
  LocalInfoContainer,
} from './styles'
import { ArrowLeft } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CardsContext } from '../../../../Contexts/characterContext'
export function LocalInfo() {
  const { Local } = useContext(CardsContext)
  return (
    <LocalInfoContainer>
      <NavLink to="/Locations">
        <button>
          <ArrowLeft size={24} weight="bold" />
          Go Back
        </button>
      </NavLink>
      <InfoHeaderContainer>
        <h1>{Local.name}</h1>
        <div>
          <div>
            <span>Type</span>
            <span>{Local.type}</span>
          </div>
          <div>
            <span>Dimension</span>
            <span>{Local.dimension}</span>
          </div>
        </div>
      </InfoHeaderContainer>
      <InfoContent>
        <h1>Residents</h1>
        <Content></Content>
      </InfoContent>
    </LocalInfoContainer>
  )
}
