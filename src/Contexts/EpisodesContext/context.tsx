import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../../lib/axios'

interface EpisodesProps {
  id: 1
  name: string
  episode: string
  characters: string[]
  url: string
  created: string
  air_date: string
}

interface EpisodesContextType {
  Episodes: EpisodesProps[]
  Episode: EpisodesProps
  fetchEpisodesInfo: (data: number) => void
}

export const EpisodesContext = createContext({} as EpisodesContextType)

interface childrenProps {
  children: ReactNode
}

export function EpisodesContextProvider({ children }: childrenProps) {
  const [Episodes, setEpisodes] = useState<EpisodesProps[]>([])
  const [Episode, setEpisode] = useState({} as EpisodesProps)

  const fetchEpisodes = useCallback(async () => {
    const response = await api.get('episode')
    const getEpisodes = response.data.results

    setEpisodes(getEpisodes)
  }, [])

  const fetchEpisodesInfo = async (data: number) => {
    const response = await api.get(`episode/${data}`)
    const getEpisode = response.data

    setEpisode(getEpisode)
  }

  useEffect(() => {
    fetchEpisodes()
  }, [fetchEpisodes])

  return (
    <EpisodesContext.Provider
      value={{
        Episodes,
        Episode,
        fetchEpisodesInfo,
      }}
    >
      {children}
    </EpisodesContext.Provider>
  )
}
