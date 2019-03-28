import React, { Component } from 'react'
import {
    Navbar,
    Nav,
} from 'react-bootstrap'

import 'styles/SideNav.css'

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
                    <Nav.Link href="/home">Active</Nav.Link>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav>
            </nav>
        )
    }
}
