import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'

import { api } from '../lib/axios'

type locationType = {
  name: string
  url: string
}

type OrigionType = {
  name: string
  url: string
}

interface CharactersProps {
  created: string
  episode: string[]
  gender: string
  id: number
  image: string
  location: locationType
  name: string
  origin: OrigionType
  species: string
  status?: string
  type?: string
  url: string
}

interface EpisodesProps {
  id: 1
  name: string
  episode: string
  characters: string[]
  url: string
  created: string
}

interface LocationProps {
  id: number
  name: string
  type: string
}

interface CharacterContextType {
  Characters: CharactersProps[]
  Character: CharactersProps
  Episodes: EpisodesProps[]
  Episode: EpisodesProps
  Location: LocationProps[]
  fetchCharacterInfo: (data: number) => void
  fetchEpisodesInfo: (data: number) => void
  fetchLocalInfo: (data: number) => void
}

interface childrenProps {
  children: ReactNode
}

export const CardsContext = createContext({} as CharacterContextType)

export function CardsContextProvider({ children }: childrenProps) {
  const [Characters, setCharacters] = useState<CharactersProps[]>([])
  const [Character, setCharacter] = useState({} as CharactersProps)
  const [Episodes, setEpisodes] = useState<EpisodesProps[]>([])
  const [Episode, setEpisode] = useState({} as EpisodesProps)
  const [Location, setLocation] = useState<LocationProps[]>([])

  const fetchCharacters = useCallback(async () => {
    const response = await api.get('character')
    const getCharacters = response.data.results

    setCharacters(getCharacters)
  }, [])

  const fetchCharacterInfo = async (data: number) => {
    const response = await api.get(`character/${data}`)
    const getCharacter = response.data

    setCharacter(getCharacter)
  }

  const fetchEpisodes = useCallback(async () => {
    const response = await api.get('episode')
    const getEpisodes = response.data.results

    setEpisodes(getEpisodes)
  }, [])

  const fetchEpisodesInfo = async (data: number) => {
    const response = await api.get(`episodes/${data}`)
    const getEpisode = response.data

    setEpisode(getEpisode)
  }

  const fetchLocations = useCallback(async () => {
    const response = await api.get('episode')
    const getLocations = response.data.results

    setLocation(getLocations)
  }, [])

  const fetchLocalInfo = async (data: number) => {
    const response = await api.get(`character/${data}`)
    const getLocal = response.data.results

    setLocation(getLocal)
  }

  useEffect(() => {
    fetchCharacters()
    fetchEpisodes()
    fetchLocations()
  }, [fetchCharacters, fetchEpisodes, fetchLocations])

  return (
    <CardsContext.Provider
      value={{
        Characters,
        Character,
        Episodes,
        Episode,
        Location,
        fetchCharacterInfo,
        fetchEpisodesInfo,
        fetchLocalInfo,
      }}
    >
      {children}
    </CardsContext.Provider>
  )
}
