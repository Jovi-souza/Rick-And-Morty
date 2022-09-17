import { CharacterCardContainer } from './styles'
import { NavLink } from 'react-router-dom'

interface CharactersProps {
  name: string
  species: string
  url: string
}

export function CharacterCard({ url, name, species }: CharactersProps) {
  return (
    <CharacterCardContainer>
      <NavLink to="/Characters/Info">
        <img src={url} alt="" />
      </NavLink>
      <div>
        <h2>{name}</h2>
        <span>{species}</span>
      </div>
    </CharacterCardContainer>
  )
}
