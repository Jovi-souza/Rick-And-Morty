import RickAndMorty from '../../assets/RickAndMorty.svg'
import { ButtonloadMore } from '../../components/buttonLoadMore/styles'
import { Inputs } from '../../components/Input/styles'
import { EpisodeInfo } from './Episodes'
import { EpisodesContainer, ListOfEpisodesContainer } from './styles'

export function Episodes() {
  return (
    <EpisodesContainer>
      <img src={RickAndMorty} alt="" />
      <Inputs placeholder="Filter by name or episode (ex. S01 or S01E02)" />
      <ListOfEpisodesContainer>
        <EpisodeInfo />
        <EpisodeInfo />
        <EpisodeInfo />
        <EpisodeInfo />
      </ListOfEpisodesContainer>
      <ButtonloadMore>Load More</ButtonloadMore>
    </EpisodesContainer>
  )
}
