import { NavLink } from 'react-router-dom'

interface CharactersProps {
  nickName: string
  species: string
  url: string
  id: number
  status: string
}

export function CharacterCard({
  id,
  url,
  nickName,
  species,
  status,
}: CharactersProps) {
  return (
    <div className="flex flex-col rounded-lg shadow-lg">
      <NavLink to={`/Characters/info/${id}`}>
        <img src={url} alt="" className="rounded-t-lg" />
      </NavLink>
      <div className="p-4">
        <h2 className="text-lg font-semibold">{nickName}</h2>
        <div className="flex gap-10 items-center">
          <span>{species}</span>
          <span
            className={`px-4 py-1 rounded-md text-white font-semibold ${
              status === 'Alive' ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            {status}
          </span>
        </div>
      </div>
    </div>
  )
}
