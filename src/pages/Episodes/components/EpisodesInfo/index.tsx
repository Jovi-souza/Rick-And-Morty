import { ArrowLeft } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { EpisodesContext } from '../../../../Contexts/EpisodesContext/context'

export function EpisodesInfo() {
  const { Episode } = useContext(EpisodesContext)

  return (
    <div className="flex flex-col gap-8 mt-10">
      <NavLink to="/Episodes">
        <button className="flex gap-2 border rounded px-4 py-2">
          <ArrowLeft size={24} weight="bold" />
          Go Back
        </button>
      </NavLink>
      <div className="w-screen max-w-xs m-auto shadow-lg p-4">
        <h1 className="text-green-500 text-lg font-bold">{Episode.name}</h1>
        <div className="text-gray-500">
          <div>
            <span>{Episode.episode}</span>
          </div>
          <div>
            <span>{Episode.air_date}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
