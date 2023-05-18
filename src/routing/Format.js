import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBarPanel from './NavBar'

const Format = () => {
    return (
        <>
            <NavBarPanel />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default  Format