import React from 'react'
import { AppProvider } from '../../contexts/AppContext'
import Dashboard from '../pages/Dashboard/Dashboard'



function Layout() {
  return (
    <AppProvider>
       <Dashboard/>
    </AppProvider>
  )
}

export default Layout