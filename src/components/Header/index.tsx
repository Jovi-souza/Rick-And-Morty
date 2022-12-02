import Logo from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <img src={Logo} alt="" />
      <ul className="flex gap-4 items-center text-sm md:text-lg md:gap-8">
        <li>
          <NavLink to="/" title="">
            Characters
          </NavLink>
        </li>
        <li>
          <NavLink to="/Locations" title="">
            Locations
          </NavLink>
        </li>
        <li>
          <NavLink to="/Episodes" title="">
            Episodes
          </NavLink>
        </li>
      </ul>
    </header>
  )
}
