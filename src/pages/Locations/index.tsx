import Portal from '../../assets/Portal.svg'
import { Local } from './components/Local'
import { useContext } from 'react'
import { LocationsContext } from '../../Contexts/LocationsContext/context'
import { SearchForm } from './components/SearchForm'
import { Button } from '../../components/Buttons/button'

export function Locations() {
  const { Location, NextPage } = useContext(LocationsContext)

  return (
    <div className="flex flex-col gap-4 justify-center items-center p-4">
      <img src={Portal} alt="" />
      <SearchForm />
      <div className="flex flex-wrap justify-center gap-4">
        {Location.map(({ id, name, type }) => {
          return <Local key={id} id={id} planet={type} name={name} />
        })}
      </div>
      <Button content="Load More" onclick={NextPage} type="button" />
    </div>
  )
}
