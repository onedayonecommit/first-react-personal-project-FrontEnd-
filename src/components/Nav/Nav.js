import React from 'react'
import Navnotice from './Navnotice'
import NavSide from './NavSide'
import NavSignup from './NavSignup'
const Nav = () => {
    return (
        <div>
            <nav className="nav-bar flex justify-between items-center pl-14 pr-20 bg-gray-200">
                <NavSide />
                <Navnotice />
                <NavSignup />
            </nav>
        </div>
    )
}

export default Nav