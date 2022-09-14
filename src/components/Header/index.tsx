import { HeaderContainer, LinksContainer } from "./styles";
import Logo from '../../assets/Logo.svg'
import { NavLink } from "react-router-dom";

export function Header() {
  return(
    <HeaderContainer>
    <img src={Logo} alt="" />
    <div>
      <LinksContainer>
        <li>
          <NavLink to='/' title=''>Characters</NavLink>
        </li>
        <li>
          <NavLink to='/Locations' title=''>Locations</NavLink>
        </li>
        <li>
          <NavLink to='/Episodes' title=''>Episodes</NavLink>
        </li>
      </LinksContainer>
    </div>
  </HeaderContainer>
  )
}