import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navebar'

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Layout