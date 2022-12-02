import { ArrowLeft } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { LocationsContext } from '../../../../Contexts/LocationsContext/context'
export function LocalInfo() {
  const { Local } = useContext(LocationsContext)
  return (
    <div className="flex flex-col gap-8 mt-10">
      <NavLink to="/Locations">
        <button className="flex gap-2 border rounded px-4 py-2">
          <ArrowLeft size={24} weight="bold" />
          Go Back
        </button>
      </NavLink>
      <div className="w-screen max-w-xs m-auto shadow-lg p-4">
        <h1 className="text-green-500 text-lg font-bold">{Local.name}</h1>
        <div className="text-gray-500">
          <div>
            <span>Type: </span>
            <span>{Local.type}</span>
          </div>
          <div>
            <span>{Local.dimension}</span>
          </div>
        </div>
      </div>
      {/* <div className="bg-blue-500 w-screen max-w-xs m-auto">
        <h1>Residents</h1>
        <div></div>
      </div> */}
    </div>
  )
}
