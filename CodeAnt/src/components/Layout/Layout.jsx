import React from 'react'
import { AppProvider } from '../../contexts/AppContext'
import Dashboard from '../pages/Dashboard/Dashboard'
import { Outlet } from 'react-router-dom'
import Sidebar from '../pages/Sidebar/Sidebar'

//This file is for the future purpose for adding new section

function Layout() {
  return (
    <AppProvider>
      <Sidebar/>
      <Outlet/>
       <Dashboard/>
    </AppProvider>
  )
}

export default Layout