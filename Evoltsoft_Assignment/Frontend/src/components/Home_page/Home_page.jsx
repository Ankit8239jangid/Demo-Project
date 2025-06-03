import React from 'react'
import SideBar from '../UI/SideBar'
import { Outlet } from 'react-router-dom'

function Home_page() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 h-screen w-full ">
        <Outlet />
      </div>
    </div>
  )
}

export default Home_page
