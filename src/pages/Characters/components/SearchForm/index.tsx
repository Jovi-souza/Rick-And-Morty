import { InputsSearchContainer } from './styles'
import { Inputs } from '../../../../components/Input/styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { CharacterContext } from '../../../../Contexts/CharacterContext/context'

const searchFormSchema = zod.object({
  queryName: zod.string(),
  querySpecies: zod.string(),
  queryGender: zod.string(),
  queryStatus: zod.string(),
})

type searchFormInputs = zod.infer<typeof searchFormSchema>

export function SearchForm() {
  const { searchCharacters } = useContext(CharacterContext)
  const { register, handleSubmit, reset } = useForm<searchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleSearchCharacters(query: searchFormInputs) {
    searchCharacters(query)
    reset()
  }

  return (
    <InputsSearchContainer onSubmit={handleSubmit(handleSearchCharacters)}>
      <Inputs
        type="text"
        placeholder="Filter by name"
        {...register('queryName')}
      />
      <Inputs type="text" placeholder="Species" {...register('querySpecies')} />
      <Inputs type="text" placeholder="Gender" {...register('queryGender')} />
      <Inputs type="text" placeholder="Status" {...register('queryStatus')} />
      <button type="submit">Search</button>
    </InputsSearchContainer>
  )
}
