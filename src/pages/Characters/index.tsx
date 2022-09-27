import { useContext } from 'react'
import HomeLogo from '../../assets/HomeSvg.svg'
import { ButtonloadMore } from '../../components/buttonLoadMore/styles'
import { CharacterCard } from '../../components/CharacterCard'
import { CharacterContext } from '../../Contexts/CharacterContext/context'
import { SearchForm } from './components/SearchForm'
import { CharactersContainer, CharactersContent } from './styles'

export function Characters() {
  const { Characters } = useContext(CharacterContext)
  return (
    <CharactersContainer>
      <img src={HomeLogo} alt="" />
      <SearchForm />
      <CharactersContent>
        {Characters.map(({ id, image, name, species }) => {
          return (
            <CharacterCard
              key={id}
              url={image}
              id={id}
              nickName={name}
              species={species}
            />
          )
        })}
      </CharactersContent>
      <ButtonloadMore>Load More</ButtonloadMore>
    </CharactersContainer>
  )
}
