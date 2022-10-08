import { createContext, ReactNode, useEffect, useState } from 'react'
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

interface queryProps {
  query: string
}

interface EpisodesContextType {
  Episodes: EpisodesProps[]
  Episode: EpisodesProps
  fetchEpisodesInfo: (data: number) => void
  searchEpisode: (query: queryProps) => void
  NextPage: () => void
}

export const EpisodesContext = createContext({} as EpisodesContextType)

interface childrenProps {
  children: ReactNode
}

export function EpisodesContextProvider({ children }: childrenProps) {
  const [Episodes, setEpisodes] = useState<EpisodesProps[]>([])
  const [Episode, setEpisode] = useState({} as EpisodesProps)
  const [nextPage, setNextPage] = useState('')

  async function fetchEpisodes() {
    const response = await api.get('episode')
    const getEpisodes = response.data.results
    const pages = response.data.info.next

    setEpisodes(getEpisodes)
    setNextPage(pages)
  }

  async function searchEpisode(query: queryProps) {
    const response = await api.get('episode', {
      params: {
        name: query.query,
      },
    })
    const getEpisodes = response.data.results
    const pages = response.data.info.next

    setEpisodes(getEpisodes)
    setNextPage(pages)
  }

  const fetchEpisodesInfo = async (data: number) => {
    const response = await api.get(`episode/${data}`)
    const getEpisode = response.data

    setEpisode(getEpisode)
  }

  async function NextPage() {
    const response = await api.get(`${nextPage}`)
    const results = response.data.results
    const pages = response.data.info.next

    setEpisodes(results)
    setNextPage(pages)
  }

  useEffect(() => {
    fetchEpisodes()
  }, [])

  return (
    <EpisodesContext.Provider
      value={{
        Episodes,
        Episode,
        NextPage,
        searchEpisode,
        fetchEpisodesInfo,
      }}
    >
      {children}
    </EpisodesContext.Provider>
  )
}
