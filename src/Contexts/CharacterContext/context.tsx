import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../../lib/axios'

type locationType = {
  name: string | undefined
  url: string | undefined
}

type OriginType = {
  name: string | undefined
  url: string | undefined
}

interface CharactersProps {
  created: string
  episode: string[]
  gender: string
  id: number
  image: string
  location: locationType
  name: string
  origin: OriginType
  species: string
  status: string
  type: string
  url: string
}

interface queryProps {
  queryName: string
  querySpecies: string
  queryGender: string
  queryStatus: string
}

interface CharacterContextType {
  Characters: CharactersProps[]
  Character: CharactersProps
  NextPage: () => void
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
  const [nextPage, setNextPage] = useState('')

  async function fetchCharacters() {
    const response = await api.get('character')
    const results = response.data.results
    const pages = response.data.info.next

    setCharacters(results)
    setNextPage(pages)
  }

  async function searchCharacters(query: queryProps) {
    const { queryName, queryStatus, queryGender, querySpecies } = query
    const response = await api.get('character', {
      params: {
        name: queryName,
        status: queryStatus,
        species: querySpecies,
        gender: queryGender,
      },
    })
    const pages = response.data.info.next
    const results = response.data.results
    setNextPage(pages)
    setCharacters(results)
  }

  async function fetchCharacterInfo(data: number) {
    const response = await api.get(`character/${data}`)
    const results = response.data
    setCharacter(results)
  }

  async function NextPage() {
    const response = await api.get(`${nextPage}`)
    const results = response.data.results
    const pages = response.data.info.next
    setCharacters(results)
    setNextPage(pages)
  }

  useEffect(() => {
    fetchCharacters()
  }, [])

  return (
    <CharacterContext.Provider
      value={{
        Characters,
        Character,
        NextPage,
        searchCharacters,
        fetchCharacterInfo,
      }}
    >
      {children}
    </CharacterContext.Provider>
  )
}
