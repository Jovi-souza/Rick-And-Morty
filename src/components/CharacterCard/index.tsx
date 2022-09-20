import { CharacterCardContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CardsContext } from '../../Contexts/characterContext'

interface CharactersProps {
  name: string
  species: string
  url: string
  id: number
}

export function CharacterCard({ id, url, name, species }: CharactersProps) {
  const { fetchCharacterInfo } = useContext(CardsContext)
  const teste = () => {
    fetchCharacterInfo(id)
  }

  return (
    <CharacterCardContainer>
      <NavLink to="/Characters/Info" onClick={teste}>
        <img src={url} alt="" />
      </NavLink>
      <div>
        <h2>{name}</h2>
        <span>{species}</span>
      </div>
    </CharacterCardContainer>
  )
}
