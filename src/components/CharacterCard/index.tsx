import { CharacterCardContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CharacterContext } from '../../Contexts/CharacterContext/context'

interface CharactersProps {
  nickName: string
  species: string
  url: string
  id: number
}

export function CharacterCard({ id, url, nickName, species }: CharactersProps) {
  const { fetchCharacterInfo } = useContext(CharacterContext)
  const getCharacter = () => {
    fetchCharacterInfo(id)
  }

  return (
    <CharacterCardContainer>
      <NavLink to="/Characters/Info" onClick={getCharacter}>
        <img src={url} alt="" />
      </NavLink>
      <div>
        <h2>{nickName}</h2>
        <span>{species}</span>
      </div>
    </CharacterCardContainer>
  )
}
