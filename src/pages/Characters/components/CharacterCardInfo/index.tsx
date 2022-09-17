import { useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'
import {
  AvatarIcon,
  CharacterCardInfoContainer,
  CharacterCardInfoContent,
  TablesInfo,
  TablesRows,
} from './styles'

type locationType = {
  name: string
  url: string
}

type OrigionType = {
  name: string
  url: string
}

interface CharacterProps {
  created: string
  episode: string[]
  gender: string
  id: number
  image: string
  location: locationType
  name: string
  origin: OrigionType
  species: string
  status?: string
  type?: string
  url: string
}

export function CharacterCardInfo() {
  const [Character, setCharacter] = useState({} as CharacterProps)
  async function fetchCharacters() {
    const response = await api.get(`character/${85}`)
    const results = response.data
    console.log(results)
    setCharacter(results)
  }

  useEffect(() => {
    fetchCharacters()
  }, [])

  const { image, name, gender, status, species, type } = Character

  return (
    <CharacterCardInfoContainer>
      <AvatarIcon>
        <img src={image} alt="" />
        <h1>{name}</h1>
      </AvatarIcon>
      <CharacterCardInfoContent>
        <TablesInfo>
          <h1>Informations</h1>
          <div>
            <TablesRows>
              <p>Gender</p>
              <p>{gender}</p>
            </TablesRows>
            <TablesRows>
              <p>Status</p>
              <p>{status}</p>
            </TablesRows>
            <TablesRows>
              <p>Specie</p>
              <p>{species}</p>
            </TablesRows>
            <TablesRows>
              <p>Origin</p>
              <p></p>
            </TablesRows>
            <TablesRows>
              <p>Type</p>
              <p>{type}</p>
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
