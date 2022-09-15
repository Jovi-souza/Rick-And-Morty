import { CharacterCardContainer } from "./styles";
import CharacterAvatar from '../../../../assets/CharacterAvatar.svg'
import { NavLink } from "react-router-dom";
export function CharacterCard() {
  return(
    <NavLink to='/Characters/Info'>
      <CharacterCardContainer>
        <img src={CharacterAvatar}/>
        <div>
          <h1>Rick Sanches</h1>
          <span>Human</span>
        </div>
      </CharacterCardContainer>
    </NavLink>
  )
}