import { useContext } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { EpisodesContext } from '../../../../Contexts/EpisodesContext/context'

const searchFormSchema = zod.object({
  name: zod.string(),
})

type searchFormInput = zod.infer<typeof searchFormSchema>

export function SearchForm() {
  const { GetFilter } = useContext(EpisodesContext)
  const { register, handleSubmit, reset } = useForm<searchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleSearchEpisode(query: searchFormInput) {
    GetFilter(query.name)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(handleSearchEpisode)}>
      <input
        placeholder="Filter by name or episode (ex. S01 or S01E02)"
        {...register('name')}
        className="px-4 py-1 border border-gray-400 rounded outline-green-500"
      />
    </form>
  )
}
