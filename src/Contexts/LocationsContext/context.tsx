import { createContext, ReactNode, useState } from 'react'
import { api } from '../../lib/axios'
import { useQuery } from 'react-query'

interface LocationProps {
  info: {
    next: string
    prev: string
  }
  results: {
    created: string
    dimension: string
    id: number
    name: string
    residents: string[]
    type: string
    url: string
  }[]
}

interface LocationsContextType {
  fetchLocation: LocationProps | undefined
  page: number
  isPreviousData: boolean
  GetFilter: (query: string) => void
  NextPage: () => void
  PrevPage: () => void
}

interface childrenProps {
  children: ReactNode
}

export const LocationsContext = createContext({} as LocationsContextType)

export function LocationsContextProvider({ children }: childrenProps) {
  const [filter, setFilter] = useState<string>()
  const [page, setPage] = useState(1)

  function GetFilter(query: string) {
    setFilter(query)
    setPage(1)
  }

  const { data: fetchLocation, isPreviousData } = useQuery<LocationProps>(
    ['episodes', page, filter],
    async () => {
      const { data } = await api.get(`location/?page=${page}`, {
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
    if (!isPreviousData && fetchLocation?.info.next) {
      setPage((old) => old + 1)
    }
  }

  function PrevPage() {
    setPage((old) => Math.max(old - 1, 0))
  }

  return (
    <LocationsContext.Provider
      value={{
        fetchLocation,
        page,
        isPreviousData,
        GetFilter,
        NextPage,
        PrevPage,
      }}
    >
      {children}
    </LocationsContext.Provider>
  )
}
