import { AvatarIcon, CharacterCardInfoContainer, CharacterCardInfoContent } from "./styles";
import Rick from '../../../../assets/CharacterAvatar.svg'
export function CharacterCardInfo() {
  return(
    <CharacterCardInfoContainer>
      <AvatarIcon>
        <img src={Rick} alt="" />
        <h1>Rick Sanchez</h1>
      </AvatarIcon>
      <CharacterCardInfoContent>
        <div>
          <h1>Informations</h1>
          <tbody>
            <tr>
              <td>Gender</td>
              <td>Male</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>Alive</td>
            </tr>
            <tr>
              <td>Specie</td>
              <td>Human</td>
            </tr>
            <tr>
              <td>Origin</td>
              <td>Earth (C-137)</td>
            </tr>
            <tr>
              <td>Type</td>
              <td>Unknown</td>
            </tr>
            <tr>
              <td>Locations</td>
              <td>Earth (Replacement Dimension)</td>
            </tr>
          </tbody>
        </div>
        <div>
          <h1>Episodes</h1>
          <tbody>
            <tr>
              <td>S01E01</td>
              <td>Pilot</td>
              <td>DECEMBER 2.2013</td>
            </tr>
          </tbody>
        </div>
      </CharacterCardInfoContent>
    </CharacterCardInfoContainer>
  )
}