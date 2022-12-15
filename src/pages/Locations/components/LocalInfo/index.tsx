import { ArrowLeft } from 'phosphor-react'
import { useQuery } from 'react-query'
import { NavLink, useParams } from 'react-router-dom'
import { api } from '../../../../lib/axios'

export function LocalInfo() {
  const { id } = useParams()

  const { data: local } = useQuery('local info', async () => {
    const { data } = await api.get(`location/${id}`)
    return data
  })

  return (
    <div className="flex flex-col gap-8 mt-10">
      <NavLink to="/Locations">
        <button className="flex gap-2 border rounded px-4 py-2">
          <ArrowLeft size={24} weight="bold" />
          Go Back
        </button>
      </NavLink>
      <div className="w-screen max-w-xs m-auto shadow-lg p-4">
        <h1 className="text-green-500 text-lg font-bold">{local?.name}</h1>
        <div className="text-gray-500">
          <div>
            <span>Type: </span>
            <span>{local?.type}</span>
          </div>
          <div>
            <span>{local?.dimension}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
