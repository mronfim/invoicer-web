import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {
    Navbar,
    Nav,
} from 'react-bootstrap'

import 'styles/SideNav.scss'

export default class SideNav extends Component {
    render() {
        return (
            <nav className='sidenav'>
                <div className="brand">
                    <Navbar.Brand href="/">
                        Invoicer
                    </Navbar.Brand>
                </div>
                <Nav defaultActiveKey="/home" className='flex-column'>
                    <NavLink className='link' activeStyle={activeStyle} to='/home'>Home</NavLink>
                    <NavLink className='link' activeStyle={activeStyle} to='/estimates'>Estimates</NavLink>
                    <NavLink className='link' activeStyle={activeStyle} to='/clients'>Clients</NavLink>
                    <NavLink className='link' activeStyle={activeStyle} to='/companies'>Companies</NavLink>
                </Nav>
            </nav>
        )
    }
}

const activeStyle = {
    backgroundColor: '#fcfcfc',
    borderTop: '1px solid #eee',
    borderBottom: '1px solid #eee',
    padding: '14px 0',
    textDecoration: 'none',
    color: 'rgb(100, 100, 100)',
    fontWeight: 'bold',
}