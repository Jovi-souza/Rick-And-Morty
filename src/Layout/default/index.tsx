import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

export function DefaultLayout() {
  return (
    <div className="max-w-screen-xl m-auto">
      <Header />
      <Outlet />
    </div>
  )
}
