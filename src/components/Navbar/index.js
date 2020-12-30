import React from 'react'
// import { NavLink } from 'react-router-dom'
import { Nav, NavLink, NavItems, Bars } from './NavbarElements'

const Navbar = () => {
    return (
        <Nav>
            <Bars />
            <NavItems>
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>Menu</li>
                </ul>
                
            </NavItems>
        </Nav>
    )
}

export default Navbar
