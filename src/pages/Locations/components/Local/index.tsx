import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { LocationsContext } from '../../../../Contexts/LocationsContext/context'

interface LocalProps {
  name: string
  planet: string
  id: number
}

export function Local({ id, name, planet }: LocalProps) {
  const { fetchLocalInfo } = useContext(LocationsContext)
  const getLocal = () => {
    fetchLocalInfo(id)
  }
  return (
    <NavLink
      to="/Locations/Info"
      onClick={getLocal}
      className="w-full max-w-[16rem] p-4 rounded shadow-lg"
    >
      <div>
        <h1>{name}</h1>
        <p>Type: {planet}</p>
      </div>
    </NavLink>
  )
}
