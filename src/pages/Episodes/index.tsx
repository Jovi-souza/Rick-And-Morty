import { useEffect, useState } from 'react'
import RickAndMorty from '../../assets/RickAndMorty.svg'
import { ButtonloadMore } from '../../components/buttonLoadMore/styles'
import { Inputs } from '../../components/Input/styles'
import { api } from '../../lib/axios'
import { EpisodeInfo } from './Episodes'
import { EpisodesContainer, ListOfEpisodesContainer } from './styles'

interface EpisodesProps {
  id: 1
  name: string
  episode: string
  characters: string[]
  url: string
  created: string
}

export function Episodes() {
  const [episodes, setEpisodes] = useState<EpisodesProps[]>([])

  async function fetchCharacters() {
    const response = await api.get('episode')
    const results = response.data.results
    console.log(results)
    setEpisodes(results)
  }

  useEffect(() => {
    fetchCharacters()
  }, [])

  return (
    <EpisodesContainer>
      <img src={RickAndMorty} alt="" />
      <Inputs placeholder="Filter by name or episode (ex. S01 or S01E02)" />
      <ListOfEpisodesContainer>
        {episodes.map(({ id, name, episode }) => {
          return <EpisodeInfo key={id} name={name} episode={episode} />
        })}
      </ListOfEpisodesContainer>
      <ButtonloadMore>Load More</ButtonloadMore>
    </EpisodesContainer>
  )
}
