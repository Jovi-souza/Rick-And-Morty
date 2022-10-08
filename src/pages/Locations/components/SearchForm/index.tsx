import { useContext } from 'react'
import { Inputs } from '../../../../components/Input/styles'
import { FormContainer } from './styles'
import { LocationsContext } from '../../../../Contexts/LocationsContext/context'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'

const searchFormSchema = zod.object({
  name: zod.string(),
})

type searchFormInputs = zod.infer<typeof searchFormSchema>

export function SearchForm() {
  const { searchLocations } = useContext(LocationsContext)
  const { register, handleSubmit, reset } = useForm<searchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleSearchLocations(query: searchFormInputs) {
    searchLocations(query)
    reset()
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleSearchLocations)}>
      <Inputs
        placeholder="Filter by name or episode (ex. S01 or S01E02)"
        {...register('name')}
      />
    </FormContainer>
  )
}
