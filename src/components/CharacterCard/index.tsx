import { CharacterCardContainer } from './styles'
import { NavLink } from 'react-router-dom'

interface CharactersProps {
  name: string
  species: string
  url: string
}

export function CharacterCard({ url, name, species }: CharactersProps) {
  return (
    <NavLink to="/Characters/Info">
      <CharacterCardContainer>
        <img src={url} alt="" />
        <div>
          <h2>{name}</h2>
          <span>{species}</span>
        </div>
      </CharacterCardContainer>
    </NavLink>
  )
}
