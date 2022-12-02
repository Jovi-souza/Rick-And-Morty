import HomeLogo from '../../assets/HomeSvg.svg'

import { useContext } from 'react'
import { CharacterContext } from '../../Contexts/CharacterContext/context'
import { CharacterCard } from '../../components/CharacterCard'
import { SearchForm } from './components/SearchForm'
import { Button } from '../../components/Buttons/button'

export function Characters() {
  const { Characters, NextPage } = useContext(CharacterContext)
  return (
    <div className="flex flex-col gap-8 p-4 items-center justify-center">
      <img src={HomeLogo} alt="" className="mt-4" />
      <SearchForm />
      <div className="flex flex-wrap gap-8 items-center justify-center max-w-[110rem]">
        {Characters.map(({ id, image, name, species, status }) => {
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
        })}
      </div>
      <Button
        content="Load more"
        onclick={NextPage}
        model="page"
        type="button"
      />
    </div>
  )
}
