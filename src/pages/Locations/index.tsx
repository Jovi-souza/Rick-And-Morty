import { Inputs } from '../../components/Input/styles'
import { InputsContainer, LocalContainer, LocationsContainer } from './styles'
import Portal from '../../assets/Portal.svg'
import { Local } from './components/Local'
import { ButtonloadMore } from '../../components/buttonLoadMore/styles'
import { api } from '../../lib/axios'
import { useEffect, useState } from 'react'

interface LocationProps {
  id: number
  name: string
  type: string
}

export function Locations() {
  const [location, setLocation] = useState<LocationProps[]>([])

  async function fetchCharacters() {
    const response = await api.get('location')
    const results = response.data.results
    setLocation(results)
  }

  useEffect(() => {
    fetchCharacters()
  }, [])

  return (
    <LocationsContainer>
      <img src={Portal} alt="" />
      <InputsContainer>
        <Inputs type="text" placeholder="Filter by name" />
        <Inputs type="text" />
        <Inputs type="text" />
      </InputsContainer>
      <LocalContainer>
        {location.map(({ id, name, type }) => {
          return <Local key={id} planet={type} name={name} />
        })}
      </LocalContainer>
      <ButtonloadMore>Load More</ButtonloadMore>
    </LocationsContainer>
  )
}
