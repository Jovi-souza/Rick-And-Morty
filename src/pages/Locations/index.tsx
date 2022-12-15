import Portal from '../../assets/Portal.svg'
import { Local } from './components/Local'
import { useContext } from 'react'
import { LocationsContext } from '../../Contexts/LocationsContext/context'
import { Button } from '../../components/Buttons/button'
import { SearchForm } from './components/SearchForm'

export function Locations() {
  const { fetchLocation, page, isPreviousData, NextPage, PrevPage } =
    useContext(LocationsContext)

  const disableButton = page === 1

  return (
    <div className="flex flex-col gap-4 justify-center items-center p-4">
      <img src={Portal} alt="" />
      <SearchForm />
      <div className="flex flex-wrap justify-center gap-4">
        {fetchLocation?.results.map(({ id, name, type }) => {
          return <Local key={id} id={id} planet={type} name={name} />
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
          disabled={isPreviousData || !fetchLocation?.info.next}
          model="page"
          type="button"
        />
      </div>
    </div>
  )
}
