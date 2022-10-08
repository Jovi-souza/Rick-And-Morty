import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../../lib/axios'

interface LocationProps {
  created: string
  dimension: string
  id: number
  name: string
  residents: string[]
  type: string
  url: string
}

interface queryTypes {
  name: string
}

interface LocationsContextType {
  Location: LocationProps[]
  Local: LocationProps
  fetchLocalInfo: (data: number) => void
  searchLocations: (query: queryTypes) => void
  NextPage: () => void
}

interface childrenProps {
  children: ReactNode
}

export const LocationsContext = createContext({} as LocationsContextType)

export function LocationsContextProvider({ children }: childrenProps) {
  const [Location, setLocation] = useState<LocationProps[]>([])
  const [Local, setLocal] = useState({} as LocationProps)
  const [nextPage, setNextPage] = useState('')

  async function fetchLocations() {
    const response = await api.get('location')
    const getLocations = response.data.results
    const pages = response.data.info.next

    setLocation(getLocations)
    setNextPage(pages)
  }

  async function searchLocations(query: queryTypes) {
    const response = await api.get('location', {
      params: {
        name: query.name,
      },
    })

    const results = response.data.results
    const pages = response.data.info.next

    setLocation(results)
    setNextPage(pages)
  }

  const fetchLocalInfo = async (data: number) => {
    const response = await api.get(`location/${data}`)
    const getLocal = response.data

    setLocal(getLocal)
  }

  async function NextPage() {
    const response = await api.get(`${nextPage}`)
    const results = response.data.results
    const pages = response.data.info.next
    setLocation(results)
    setNextPage(pages)
  }

  useEffect(() => {
    fetchLocations()
  }, [])

  return (
    <LocationsContext.Provider
      value={{
        Location,
        Local,
        NextPage,
        searchLocations,
        fetchLocalInfo,
      }}
    >
      {children}
    </LocationsContext.Provider>
  )
}
