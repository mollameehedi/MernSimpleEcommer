import React from 'react'
import { SideBar } from './SideBar'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
   <div className='flex'>
   <SideBar/>
   <Outlet/>
   </div>
  )
}

export default RootLayout