import { Inputs } from '../../components/Input/styles'
import { InputsContainer, LocalContainer, LocationsContainer } from './styles'
import Portal from '../../assets/Portal.svg'
import { Local } from './components/Local'
import { ButtonloadMore } from '../../components/buttonLoadMore/styles'
export function Locations() {
  return (
    <LocationsContainer>
      <img src={Portal} alt="" />
      <InputsContainer>
        <Inputs type="text" placeholder="Filter by name" />
        <Inputs type="text" />
        <Inputs type="text" />
      </InputsContainer>
      <LocalContainer>
        <Local />
        <Local />
        <Local />
        <Local />
      </LocalContainer>
      <ButtonloadMore>Load More</ButtonloadMore>
    </LocationsContainer>
  )
}
