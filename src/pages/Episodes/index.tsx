import { useContext } from 'react'
import RickAndMorty from '../../assets/RickAndMorty.svg'
import { Button } from '../../components/Buttons/button'
import { EpisodesContext } from '../../Contexts/EpisodesContext/context'
import { EpisodeInfo } from './components/Episodes'
import { SearchForm } from './components/SearchEpsisode'

export function Episodes() {
  const { fetchEpisodes, page, isPreviousData, NextPage, PrevPage } =
    useContext(EpisodesContext)

  const disableButton = page === 1

  return (
    <div className="flex flex-col gap-4 justify-center items-center p-4">
      <img src={RickAndMorty} alt="" />
      <SearchForm />
      <div className="flex flex-wrap justify-center gap-4">
        {fetchEpisodes?.results.map((item) => {
          return (
            <EpisodeInfo
              key={item.id}
              episode={item.episode}
              id={item.id}
              name={item.name}
            />
          )
        })}
      </div>
      <div className="flex justify-center gap-4 w-full">
        <Button
          content="Prev"
          onclick={PrevPage}
          model="page"
          type="button"
          disabled={disableButton}
        />
        <Button
          content="Next"
          onclick={NextPage}
          disabled={isPreviousData || !fetchEpisodes?.info.next}
          model="page"
          type="button"
        />
      </div>
    </div>
  )
}
