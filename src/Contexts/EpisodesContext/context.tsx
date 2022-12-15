import { createContext, ReactNode, useState } from 'react'
import { api } from '../../lib/axios'
import { useQuery } from 'react-query'

interface EpisodesProps {
  info: {
    next: string
    prev: string
  }
  results: {
    id: number
    name: string
    episode: string
  }[]
}

interface EpisodesContextType {
  fetchEpisodes: EpisodesProps | undefined
  page: number
  NextPage: () => void
  PrevPage: () => void
  isPreviousData: boolean
  GetFilter: (query: string) => void
}

interface childrenProps {
  children: ReactNode
}

export const EpisodesContext = createContext({} as EpisodesContextType)

export function EpisodesContextProvider({ children }: childrenProps) {
  const [filter, setFilter] = useState<string>()
  const [page, setPage] = useState(1)

  function GetFilter(query: string) {
    setFilter(query)
    setPage(1)
  }

  const { data: fetchEpisodes, isPreviousData } = useQuery<EpisodesProps>(
    ['episodes', page, filter],
    async () => {
      const { data } = await api.get(`episode/?page=${page}`, {
        params: {
          name: filter,
        },
      })
      return data
    },
    {
      keepPreviousData: true,
    },
  )

  function NextPage() {
    if (!isPreviousData && fetchEpisodes?.info.next) {
      setPage((old) => old + 1)
    }
  }

  function PrevPage() {
    setPage((old) => Math.max(old - 1, 0))
  }

  return (
    <EpisodesContext.Provider
      value={{
        fetchEpisodes,
        page,
        isPreviousData,
        NextPage,
        PrevPage,
        GetFilter,
      }}
    >
      {children}
    </EpisodesContext.Provider>
  )
}
// 93
