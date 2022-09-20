import { useContext } from 'react'
import RickAndMorty from '../../assets/RickAndMorty.svg'
import { ButtonloadMore } from '../../components/buttonLoadMore/styles'
import { Inputs } from '../../components/Input/styles'
import { CardsContext } from '../../Contexts/characterContext'
import { EpisodeInfo } from './Episodes'
import { EpisodesContainer, ListOfEpisodesContainer } from './styles'

export function Episodes() {
  const { Episodes } = useContext(CardsContext)

  return (
    <EpisodesContainer>
      <img src={RickAndMorty} alt="" />
      <Inputs placeholder="Filter by name or episode (ex. S01 or S01E02)" />
      <ListOfEpisodesContainer>
        {Episodes.map(({ id, name, episode }) => {
          return <EpisodeInfo key={id} id={id} name={name} episode={episode} />
        })}
      </ListOfEpisodesContainer>
      <ButtonloadMore>Load More</ButtonloadMore>
    </EpisodesContainer>
  )
}
