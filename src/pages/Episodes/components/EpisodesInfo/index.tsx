import { ArrowLeft } from 'phosphor-react'
import { NavLink, useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { api } from '../../../../lib/axios'

type episodeType = {
  name: string
  episode: string
  air_date: string
}

export function EpisodesInfo() {
  const { id } = useParams()

  const { data: episode } = useQuery<episodeType>('episode info', async () => {
    const { data } = await api.get(`episode/${id}`)
    return data
  })

  return (
    <div className="flex flex-col gap-8 mt-10">
      <NavLink to="/Episodes">
        <button className="flex gap-2 border rounded px-4 py-2">
          <ArrowLeft size={24} weight="bold" />
          Go Back
        </button>
      </NavLink>
      <div className="w-screen max-w-xs m-auto shadow-lg p-4">
        <h1 className="text-green-500 text-lg font-bold">{episode?.name}</h1>
        <div className="text-gray-500">
          <div>
            <span>{episode?.episode}</span>
          </div>
          <div>
            <span>{episode?.air_date}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
