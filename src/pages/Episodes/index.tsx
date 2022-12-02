import { useContext } from 'react'
import RickAndMorty from '../../assets/RickAndMorty.svg'
import { Button } from '../../components/Buttons/button'
import { EpisodesContext } from '../../Contexts/EpisodesContext/context'
import { EpisodeInfo } from './components/Episodes'
import { SearchForm } from './components/SearchEpsisode'

export function Episodes() {
  const { Episodes, NextPage } = useContext(EpisodesContext)

  return (
    <div className="flex flex-col gap-4 justify-center items-center p-4">
      <img src={RickAndMorty} alt="" />
      <SearchForm />
      <div className="flex flex-wrap justify-center gap-4">
        {Episodes.map(({ id, name, episode }) => {
          return <EpisodeInfo key={id} id={id} name={name} episode={episode} />
        })}
      </div>
      <Button onclick={NextPage} type="button" content="Load more" />
    </div>
  )
}
