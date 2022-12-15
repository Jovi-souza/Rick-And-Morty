import { NavLink } from 'react-router-dom'

interface LocalProps {
  name: string
  planet: string
  id: number
}

export function Local({ id, name, planet }: LocalProps) {
  return (
    <NavLink
      to={`/Locations/Info/${id}`}
      className="w-full max-w-[16rem] p-4 rounded shadow-lg"
    >
      <div>
        <h1>{name}</h1>
        <p>Type: {planet}</p>
      </div>
    </NavLink>
  )
}
