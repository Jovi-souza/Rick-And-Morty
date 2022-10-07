import { LocalContainer, LocationsContainer } from './styles'
import Portal from '../../assets/Portal.svg'
import { Local } from './components/Local'
import { ButtonloadMore } from '../../components/buttonLoadMore/styles'
import { useContext } from 'react'
import { LocationsContext } from '../../Contexts/LocationsContext/context'
import { SearchForm } from './components/SearchForm'

export function Locations() {
  const { Location, NextPage } = useContext(LocationsContext)

  return (
    <LocationsContainer>
      <img src={Portal} alt="" />
      <SearchForm />
      <LocalContainer>
        {Location.map(({ id, name, type }) => {
          return <Local key={id} id={id} planet={type} name={name} />
        })}
      </LocalContainer>
      <ButtonloadMore onClick={NextPage}>Load More</ButtonloadMore>
    </LocationsContainer>
  )
}
