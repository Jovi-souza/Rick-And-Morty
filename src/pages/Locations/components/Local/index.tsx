import { NavLink } from 'react-router-dom'
import { LocalContainer } from './styles'

interface LocalProps {
  name: string
  planet: string
}

export function Local({ name, planet }: LocalProps) {
  return (
    <NavLink to="/Locations/Info">
      <LocalContainer>
        <h1>{name}</h1>
        <p>{planet}</p>
      </LocalContainer>
    </NavLink>
  )
}
