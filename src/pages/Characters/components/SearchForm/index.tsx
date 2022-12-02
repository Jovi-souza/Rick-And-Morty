import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { CharacterContext } from '../../../../Contexts/CharacterContext/context'
import { Button } from '../../../../components/Buttons/button'

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
    <form
      onSubmit={handleSubmit(handleSearchCharacters)}
      className="flex flex-col gap-4 w-full max-w-[20rem] justify-center lg:flex-row"
    >
      <input
        type="text"
        placeholder="Filter by name"
        {...register('queryName')}
        className="border px-4 py-1 rounded outline-green-500"
      />
      <input
        type="text"
        placeholder="Species"
        {...register('querySpecies')}
        className="border px-4 py-1 rounded outline-green-500"
      />
      <input
        type="text"
        placeholder="Gender"
        {...register('queryGender')}
        className="border px-4 py-1 rounded outline-green-500"
      />
      <input
        type="text"
        placeholder="Status"
        {...register('queryStatus')}
        className="border px-4 py-1 rounded outline-green-500"
      />
      <Button content="Seatch" type="submit" model="Search" />
    </form>
  )
}
