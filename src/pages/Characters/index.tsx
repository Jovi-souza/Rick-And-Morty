import HomeLogo from '../../assets/HomeSvg.svg'
import { ButtonloadMore } from '../../components/buttonLoadMore/styles'
import { Inputs } from '../../components/Input/styles'
import { CharacterCard } from '../../components/CharacterCard'
import {
  CharactersContainer,
  CharactersContent,
  InputsSearchContainer,
} from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CharacterContext } from '../../Contexts/CharacterContext/context'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'

const searchFormSchema = zod.object({
  queryName: zod.string(),
})
type searchFormInputs = zod.infer<typeof searchFormSchema>

export function Characters() {
  const { Characters, searchCharacters } = useContext(CharacterContext)

  function handleSearchCharacters(data: searchFormInputs) {
    searchCharacters(data.queryName)
    console.log('data')
  }

  const { register, handleSubmit } = useForm<searchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  return (
    <CharactersContainer>
      <img src={HomeLogo} alt="" />
      <InputsSearchContainer onSubmit={handleSubmit(handleSearchCharacters)}>
        <Inputs
          type="text"
          placeholder="Filter by name"
          {...register('queryName')}
        />
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
