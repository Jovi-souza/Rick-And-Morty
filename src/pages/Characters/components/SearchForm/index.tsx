import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { CharacterContext } from '../../../../Contexts/CharacterContext/context'
import { Button } from '../../../../components/Buttons/button'

const searchFormSchema = zod.object({
  name: zod.string(),
  species: zod.string(),
  gender: zod.string(),
  status: zod.string(),
})

type searchFormInputs = zod.infer<typeof searchFormSchema>

export function SearchForm() {
  const { getFilters } = useContext(CharacterContext)
  const { register, handleSubmit, reset } = useForm<searchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleGetFilters(filters: searchFormInputs) {
    getFilters(filters)
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(handleGetFilters)}
      className="flex flex-col gap-4 w-full max-w-[20rem] justify-center lg:flex-row"
    >
      <input
        type="text"
        placeholder="Filter by name"
        {...register('name')}
        className="border px-4 py-1 rounded outline-green-500"
      />
      <input
        type="text"
        placeholder="Species"
        {...register('species')}
        className="border px-4 gender-1 rounded outline-green-500"
      />
      <input
        type="text"
        placeholder="Gender"
        {...register('gender')}
        className="border px-4 py-1 rounded outline-green-500"
      />
      <input
        type="text"
        placeholder="Status"
        {...register('status')}
        className="border px-4 py-1 rounded outline-green-500"
      />
      <Button content="Seatch" type="submit" model="Search" />
    </form>
  )
}
