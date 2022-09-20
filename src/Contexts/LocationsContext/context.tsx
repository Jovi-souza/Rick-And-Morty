import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
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

interface LocationsContextType {
  Location: LocationProps[]
  Local: LocationProps
  fetchLocalInfo: (data: number) => void
}

interface childrenProps {
  children: ReactNode
}

export const LocationsContext = createContext({} as LocationsContextType)

export function LocationsContextProvider({ children }: childrenProps) {
  const [Location, setLocation] = useState<LocationProps[]>([])
  const [Local, setLocal] = useState({} as LocationProps)

  const fetchLocations = useCallback(async () => {
    const response = await api.get('location')
    const getLocations = response.data.results

    setLocation(getLocations)
  }, [])

  const fetchLocalInfo = async (data: number) => {
    const response = await api.get(`location/${data}`)
    const getLocal = response.data

    setLocal(getLocal)
  }

  useEffect(() => {
    fetchLocations()
  }, [fetchLocations])

  return (
    <LocationsContext.Provider
      value={{
        Location,
        Local,
        fetchLocalInfo,
      }}
    >
      {children}
    </LocationsContext.Provider>
  )
}
