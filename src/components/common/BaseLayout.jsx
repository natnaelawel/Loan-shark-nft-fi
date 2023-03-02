import { Outlet } from 'react-router-dom'

import NotificationToaster from './NotificationToaster'
import Navbar from './Navbar'

const BaseLayout = () => {
  return (
    <div className='relative flex flex-col flex-1  max-w-screen overflow-x-hidden min-h-screen overflow-y-auto  text-light'>
      <Navbar />
      <main>
        <Outlet />
        <NotificationToaster />
      </main>
    </div>
  )
}

export default BaseLayout
