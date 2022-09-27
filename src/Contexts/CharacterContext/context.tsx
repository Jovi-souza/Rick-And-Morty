import { createContext, ReactNode, useEffect, useState } from 'react'
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

interface queryProps {
  queryName: string
  querySpecies?: string
  queryGender?: string
  queryStatus?: string
}

interface CharacterContextType {
  Characters: CharactersProps[]
  Character: CharactersProps
  searchCharacters: (query: queryProps) => void
  fetchCharacterInfo: (data: number) => void
}

interface childrenProps {
  children: ReactNode
}

export const CharacterContext = createContext({} as CharacterContextType)

export function CharactersContextProvider({ children }: childrenProps) {
  const [Characters, setCharacters] = useState<CharactersProps[]>([])
  const [Character, setCharacter] = useState({} as CharactersProps)

  async function fetchCharacters() {
    const response = await api.get('character')
    const results = response.data.results

    setCharacters(results)
  }

  async function searchCharacters(query: queryProps) {
    const { queryName, queryStatus, queryGender, querySpecies } = query
    const response = await api.get(
      `character/?name=${queryName}
      &status=${queryStatus}
      &species=${querySpecies}
      &gender=${queryGender}`,
    )
    const results = response.data.results
    setCharacters(results)
  }

  const fetchCharacterInfo = async (data: number) => {
    const response = await api.get(`character/${data}`)
    const results = response.data

    setCharacter(results)
  }

  useEffect(() => {
    fetchCharacters()
  }, [])

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
