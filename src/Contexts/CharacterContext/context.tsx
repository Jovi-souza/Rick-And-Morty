import { createContext, ReactNode, useState } from 'react'

import { useQuery } from 'react-query'
import { api } from '../../lib/axios'

interface filtersType {
  name: string
  species: string
  gender: string
  status: string
}

interface CharactersProps {
  info: {
    next: string
    prev: string
  }
  results: {
    created: string
    episode: string[]
    gender: string
    id: number
    image: string
    location: { name: string; url: string }
    name: string
    origin: { name: string; url: string }
    species: string
    status: string
    type: string
    url: string
  }[]
}

interface CharacterContextType {
  fetchCharacters: CharactersProps | undefined
  filters: filtersType
  isPreviousData: boolean
  page: number
  NextPage: () => void
  PrevPage: () => void
  getFilters: (filters: filtersType) => void
}

interface childrenProps {
  children: ReactNode
}

export const CharacterContext = createContext({} as CharacterContextType)

export function CharactersContextProvider({ children }: childrenProps) {
  const [page, setPage] = useState(1)
  const [filters, setFilters] = useState({} as filtersType)

  function getFilters(filters: filtersType) {
    setFilters(filters)
    setPage(1)
  }

  const { data: fetchCharacters, isPreviousData } = useQuery<CharactersProps>(
    ['characters', page, filters],
    async () => {
      const { name, gender, species, status } = filters
      const { data } = await api.get(`character/?page=${page}`, {
        params: {
          name,
          status,
          species,
          gender,
        },
      })
      const results = data
      return results
    },
    {
      keepPreviousData: true,
    },
  )

  function NextPage() {
    if (!isPreviousData && fetchCharacters?.info.next) {
      setPage((old) => old + 1)
    }
  }

  function PrevPage() {
    setPage((old) => Math.max(old - 1, 0))
  }

  return (
    <CharacterContext.Provider
      value={{
        fetchCharacters,
        filters,
        page,
        isPreviousData,
        getFilters,
        NextPage,
        PrevPage,
      }}
    >
      {children}
    </CharacterContext.Provider>
  )
}
