import { Inputs } from '../../components/Input/styles'
import { InputsContainer, LocalContainer, LocationsContainer } from './styles'
import Portal from '../../assets/Portal.svg'
import { Local } from './components/Local'
import { ButtonloadMore } from '../../components/buttonLoadMore/styles'
import { useContext } from 'react'
import { CardsContext } from '../../Contexts/characterContext'

export function Locations() {
  const { Location } = useContext(CardsContext)

  return (
    <LocationsContainer>
      <img src={Portal} alt="" />
      <InputsContainer>
        <Inputs type="text" placeholder="Filter by name" />
        <Inputs type="text" />
        <Inputs type="text" />
      </InputsContainer>
      <LocalContainer>
        {Location.map(({ id, name, type }) => {
          return <Local key={id} id={id} planet={type} name={name} />
        })}
      </LocalContainer>
      <ButtonloadMore>Load More</ButtonloadMore>
    </LocationsContainer>
  )
}
