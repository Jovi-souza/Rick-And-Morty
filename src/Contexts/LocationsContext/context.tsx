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

interface queryProps {
  name: string
  type: string
  dimension: string
}

interface LocationsContextType {
  Location: LocationProps[]
  Local: LocationProps
  fetchLocalInfo: (data: number) => void
  searchLocations: (query: queryProps) => void
}

interface childrenProps {
  children: ReactNode
}

export const LocationsContext = createContext({} as LocationsContextType)

export function LocationsContextProvider({ children }: childrenProps) {
  const [Location, setLocation] = useState<LocationProps[]>([])
  const [Local, setLocal] = useState({} as LocationProps)

  async function fetchLocations() {
    const response = await api.get('location')
    const getLocations = response.data.results

    setLocation(getLocations)
  }

  async function searchLocations(query: queryProps) {
    const response = await api.get(`location/?name=${query.name}`)
    const results = response.data.results

    setLocation(results)
  }

  const fetchLocalInfo = async (data: number) => {
    const response = await api.get(`location/${data}`)
    const getLocal = response.data

    setLocal(getLocal)
  }

  useEffect(() => {
    fetchLocations()
  }, [])

  return (
    <LocationsContext.Provider
      value={{
        Location,
        Local,
        searchLocations,
        fetchLocalInfo,
      }}
    >
      {children}
    </LocationsContext.Provider>
  )
}
