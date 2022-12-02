import { useContext } from 'react'
import { CharacterContext } from '../../../../Contexts/CharacterContext/context'

export function CharacterCardInfo() {
  const { Character } = useContext(CharacterContext)
  return (
    <div className="flex flex-col gap-12 justify-center items-center p-4">
      <div className="flex flex-col justify-center items-center">
        <img src={Character.image} alt="" className="rounded-full" />
        <h1 className="text-center text-xl font-semibold">{Character.name}</h1>
      </div>
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <div>
          <h1 className="text-xl font-semibold">Informations</h1>
          <div className="flex flex-col gap-4">
            <div className="border-b border-gray-500">
              <p>Gender</p>
              <p className="text-gray-400">{Character.gender}</p>
            </div>
            <div className="border-b border-gray-500">
              <p>Status</p>
              <p className="text-gray-400">{Character.status}</p>
            </div>
            <div className="border-b border-gray-500">
              <p>Specie</p>
              <p className="text-gray-400">{Character.species}</p>
            </div>
            <div className="border-b border-gray-500">
              <p>Origin</p>
              <p className="text-gray-400">{Character.origin?.name}</p>
            </div>
            <div className="border-b border-gray-500">
              <p>Locations</p>
              <p className="text-gray-400">{Character.location?.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
