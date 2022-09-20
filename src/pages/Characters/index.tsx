import HomeLogo from '../../assets/HomeSvg.svg'
import { ButtonloadMore } from '../../components/buttonLoadMore/styles'
import { Inputs } from '../../components/Input/styles'
import { CharacterCard } from '../../components/CharacterCard'
import {
  CharactersContainer,
  CharactersContent,
  InputsSearchContainer,
} from './styles'
import { useContext } from 'react'
import { CharacterContext } from '../../Contexts/CharacterContext/context'

export function Characters() {
  const { Characters } = useContext(CharacterContext)

  return (
    <CharactersContainer>
      <img src={HomeLogo} alt="" />
      <InputsSearchContainer>
        <Inputs type="text" placeholder="Filter by name" />
        <Inputs type="text" placeholder="Species" />
        <Inputs type="text" placeholder="Gender" />
        <Inputs type="text" placeholder="Status" />
      </InputsSearchContainer>
      <CharactersContent>
        {Characters.map(({ id, image, name, species }) => {
          return (
            <CharacterCard
              key={id}
              url={image}
              id={id}
              name={name}
              species={species}
            />
          )
        })}
      </CharactersContent>
      <ButtonloadMore>Load More</ButtonloadMore>
    </CharactersContainer>
  )
}
