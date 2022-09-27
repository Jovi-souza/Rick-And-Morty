import { useContext } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { Inputs } from '../../../../components/Input/styles'
import { EpisodesContext } from '../../../../Contexts/EpisodesContext/context'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type searchFormInput = zod.infer<typeof searchFormSchema>

export function SearchForm() {
  const { searchEpisode } = useContext(EpisodesContext)
  const { register, handleSubmit } = useForm<searchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleSearchEpisode(query: searchFormInput) {
    searchEpisode(query)
  }

  return (
    <form onSubmit={handleSubmit(handleSearchEpisode)}>
      <Inputs
        placeholder="Filter by name or episode (ex. S01 or S01E02)"
        {...register('query')}
      />
    </form>
  )
}
