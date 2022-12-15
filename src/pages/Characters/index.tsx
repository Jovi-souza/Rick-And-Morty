import { useContext } from 'react'
import { CharacterContext } from '../../Contexts/CharacterContext/context'

import { CharacterCard } from '../../components/CharacterCard'
import { SearchForm } from './components/SearchForm'
import { Button } from '../../components/Buttons/button'

import HomeLogo from '../../assets/HomeSvg.svg'

export function Characters() {
  const { fetchCharacters, isPreviousData, NextPage, PrevPage, page } =
    useContext(CharacterContext)

  const disableButton = page === 1

  return (
    <div className="flex flex-col gap-8 p-4 items-center justify-center">
      <img src={HomeLogo} alt="" className="mt-4" />
      <SearchForm />
      <div className="flex flex-wrap gap-8 items-center justify-center max-w-[110rem]">
        {fetchCharacters?.results.map(
          ({ id, image, name, species, status }) => {
            return (
              <CharacterCard
                key={id}
                url={image}
                id={id}
                nickName={name}
                species={species}
                status={status}
              />
            )
          },
        )}
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
          disabled={isPreviousData || !fetchCharacters?.info.next}
          model="page"
          type="button"
        />
      </div>
    </div>
  )
}
