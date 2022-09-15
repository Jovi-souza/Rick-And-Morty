import HomeLogo from '../../assets/HomeSvg.svg'
import { ButtonloadMore } from '../../components/buttonLoadMore/styles'
import { Inputs } from '../../components/Input/styles'
import { CharacterCard } from './components/CharacterCard'
import {
  CharactersContainer,
  CharactersContent,
  InputsSearchContainer,
} from './styles'

export function Characters() {
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
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
      </CharactersContent>

      <ButtonloadMore>Load More</ButtonloadMore>
    </CharactersContainer>
  )
}
