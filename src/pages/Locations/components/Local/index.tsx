import { NavLink } from 'react-router-dom'
import { LocalContainer } from './styles'

export function Local() {
  return (
    <NavLink to="/">
      <LocalContainer>
        <h1>Earth (C-137)</h1>
        <p>Planet</p>
      </LocalContainer>
    </NavLink>
  )
}
