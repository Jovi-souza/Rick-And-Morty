import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CardsContext } from '../../../../Contexts/characterContext'
import { LocalContainer } from './styles'

interface LocalProps {
  name: string
  planet: string
  id: number
}

export function Local({ id, name, planet }: LocalProps) {
  const { fetchLocalInfo } = useContext(CardsContext)
  const getLocal = () => {
    fetchLocalInfo(id)
  }
  return (
    <NavLink to="/Locations/Info" onClick={getLocal}>
      <LocalContainer>
        <h1>{name}</h1>
        <p>{planet}</p>
      </LocalContainer>
    </NavLink>
  )
}
