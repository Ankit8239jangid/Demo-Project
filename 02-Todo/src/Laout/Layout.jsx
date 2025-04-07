import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navebar'

// Note:  This file for the future reference if you want to add more functionality and Components into this
function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Layout