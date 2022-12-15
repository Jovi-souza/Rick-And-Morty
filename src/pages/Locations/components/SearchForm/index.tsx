import { useContext } from 'react'
import { LocationsContext } from '../../../../Contexts/LocationsContext/context'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'

const searchFormSchema = zod.object({
  name: zod.string(),
})

type searchFormInputs = zod.infer<typeof searchFormSchema>

export function SearchForm() {
  const { GetFilter } = useContext(LocationsContext)
  const { register, handleSubmit, reset } = useForm<searchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleSearchLocations(query: searchFormInputs) {
    GetFilter(query.name)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(handleSearchLocations)}>
      <input
        placeholder="Filter by name or episode (ex. S01 or S01E02)"
        {...register('name')}
        className="px-4 py-1 border border-gray-400 rounded outline-green-500"
      />
    </form>
  )
}
