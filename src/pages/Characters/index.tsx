import { useEffect, useState } from 'react'
import HomeLogo from '../../assets/HomeSvg.svg'
import { ButtonloadMore } from '../../components/buttonLoadMore/styles'
import { Inputs } from '../../components/Input/styles'
import { CharacterCard } from '../../components/CharacterCard'
import { api } from '../../lib/axios'
import {
  CharactersContainer,
  CharactersContent,
  InputsSearchContainer,
} from './styles'

type locationType = {
  name: string
  url: string
}

type OrigionType = {
  name: string
  url: string
}

interface CharactersProps {
  created: string
  episode: string[]
  gender: string
  id: number
  image: string
  location: locationType
  name: string
  origin: OrigionType
  species: string
  status?: string
  type?: string
  url: string
}

export function Characters() {
  const [Characters, setCharacters] = useState<CharactersProps[]>([])

  async function fetchCharacters() {
    const response = await api.get('/character')
    const results = response.data.results
    setCharacters(results)
  }

  useEffect(() => {
    fetchCharacters()
  }, [])

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
            <CharacterCard key={id} url={image} name={name} species={species} />
          )
        })}
      </CharactersContent>

      <ButtonloadMore>Load More</ButtonloadMore>
    </CharactersContainer>
  )
}
