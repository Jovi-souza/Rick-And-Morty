import {
  AvatarIcon,
  CharacterCardInfoContainer,
  CharacterCardInfoContent,
  TablesInfo,
  TablesRows,
} from './styles'
import Rick from '../../../../assets/CharacterAvatar.svg'
export function CharacterCardInfo() {
  return (
    <CharacterCardInfoContainer>
      <AvatarIcon>
        <img src={Rick} alt="" />
        <h1>Rick Sanchez</h1>
      </AvatarIcon>
      <CharacterCardInfoContent>
        <TablesInfo>
          <h1>Informations</h1>
          <tbody>
            <TablesRows>
              <td>Gender</td>
              <td>Male</td>
            </TablesRows>
            <TablesRows>
              <td>Status</td>
              <td>Alive</td>
            </TablesRows>
            <TablesRows>
              <td>Specie</td>
              <td>Human</td>
            </TablesRows>
            <TablesRows>
              <td>Origin</td>
              <td>Earth (C-137)</td>
            </TablesRows>
            <TablesRows>
              <td>Type</td>
              <td>Unknown</td>
            </TablesRows>
            <TablesRows>
              <td>Locations</td>
              <td>Earth (Replacement Dimension)</td>
            </TablesRows>
          </tbody>
        </TablesInfo>
        <TablesInfo>
          <h1>Episodes</h1>
          <tbody>
            <TablesRows>
              <td>S01E01</td>
              <td>Pilot</td>
              <td>DECEMBER 2.2013</td>
            </TablesRows>
          </tbody>
        </TablesInfo>
      </CharacterCardInfoContent>
    </CharacterCardInfoContainer>
  )
}
