import { useContext } from 'react'
import { CardsContext } from '../../../../Contexts/characterContext'
import {
  AvatarIcon,
  CharacterCardInfoContainer,
  CharacterCardInfoContent,
  TablesInfo,
  TablesRows,
} from './styles'

export function CharacterCardInfo() {
  const { Character } = useContext(CardsContext)
  return (
    <CharacterCardInfoContainer>
      <AvatarIcon>
        <img src={Character.image} alt="" />
        <h1>{Character.name}</h1>
      </AvatarIcon>
      <CharacterCardInfoContent>
        <TablesInfo>
          <h1>Informations</h1>
          <div>
            <TablesRows>
              <p>Gender</p>
              <p>{Character.gender}</p>
            </TablesRows>
            <TablesRows>
              <p>Status</p>
              <p>{Character.status}</p>
            </TablesRows>
            <TablesRows>
              <p>Specie</p>
              <p>{Character.species}</p>
            </TablesRows>
            <TablesRows>
              <p>Origin</p>
              <p></p>
            </TablesRows>
            <TablesRows>
              <p>Type</p>
              <p>{Character.type}</p>
            </TablesRows>
            <TablesRows>
              <p>Locations</p>
              <p></p>
            </TablesRows>
          </div>
        </TablesInfo>
        <TablesInfo>
          <h1>Episodes</h1>
          <div>
            <TablesRows>
              <p>S01E01</p>
              <p>Pilot</p>
              <p>DECEMBER 2.2013</p>
            </TablesRows>
          </div>
        </TablesInfo>
      </CharacterCardInfoContent>
    </CharacterCardInfoContainer>
  )
}
