import { NavLink } from 'react-router-dom'

interface EpisodeProps {
  name: string
  episode: string
  id: number
}

export function EpisodeInfo({ episode, name, id }: EpisodeProps) {
  return (
    <NavLink
      to={`/Episodes/info/${id}`}
      className="w-full max-w-[16rem] p-4 rounded shadow-lg"
    >
      <div>
        <h2>{name}</h2>
        <p>{episode}</p>
      </div>
    </NavLink>
  )
}
