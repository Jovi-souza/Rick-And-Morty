import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../../lib/axios'

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

interface CharacterContextType {
  Characters: CharactersProps[]
  Character: CharactersProps
  searchCharacters: (query?: string) => void
  fetchCharacterInfo: (data: number) => void
}

interface childrenProps {
  children: ReactNode
}

export const CharacterContext = createContext({} as CharacterContextType)

export function CharactersContextProvider({ children }: childrenProps) {
  const [Characters, setCharacters] = useState<CharactersProps[]>([])
  const [Character, setCharacter] = useState({} as CharactersProps)

  const fetchCharacters = useCallback(async () => {
    const response = await api.get('character')

    const getCharacters = response.data.results

    setCharacters(getCharacters)
  }, [])

  const fetchCharacterInfo = async (data: number) => {
    const response = await api.get(`character/${data}`)
    const getCharacter = response.data

    setCharacter(getCharacter)
    console.log(getCharacter)
  }

  const searchCharacters = async (query?: string) => {
    const response = await api.get(`character/?name=${query}&status=alive`)
    const getCharacter = response.data

    setCharacter(getCharacter)
    console.log(getCharacter)
  }

  useEffect(() => {
    fetchCharacters()
  }, [fetchCharacters])

  return (
    <CharacterContext.Provider
      value={{
        Characters,
        Character,
        searchCharacters,
        fetchCharacterInfo,
      }}
    >
      {children}
    </CharacterContext.Provider>
  )
}
