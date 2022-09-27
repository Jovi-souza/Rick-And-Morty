import { useContext } from 'react'
import RickAndMorty from '../../assets/RickAndMorty.svg'
import { ButtonloadMore } from '../../components/buttonLoadMore/styles'
import { EpisodesContext } from '../../Contexts/EpisodesContext/context'
import { EpisodeInfo } from './components/Episodes'
import { EpisodesContainer, ListOfEpisodesContainer } from './styles'
import { SearchForm } from './components/SearchEpsisode'

export function Episodes() {
  const { Episodes } = useContext(EpisodesContext)

  return (
    <EpisodesContainer>
      <img src={RickAndMorty} alt="" />
      <SearchForm />
      <ListOfEpisodesContainer>
        {Episodes.map(({ id, name, episode }) => {
          return <EpisodeInfo key={id} id={id} name={name} episode={episode} />
        })}
      </ListOfEpisodesContainer>
      <ButtonloadMore>Load More</ButtonloadMore>
    </EpisodesContainer>
  )
}
