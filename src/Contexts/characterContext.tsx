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

interface CharacterContextType {
  Characters: CharactersProps[]
}

interface childrenProps {
  children: ReactNode
}

export const CharacterContext = createContext({} as CharacterContextType)

export function CardsContext({ children }: childrenProps) {
  const [Characters, setCharacters] = useState<CharactersProps[]>([])

  const fetchCharacters = useCallback(async () => {
    const response = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
      },
    })

    const results = response.data.results

    setCharacters(results)
  }, [])
  useEffect(() => {
    fetchCharacters()
  }, [])

  return (
    <CharacterContext.Provider value={{ Characters }}>
      {children}
    </CharacterContext.Provider>
  )
}
