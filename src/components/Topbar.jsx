import React, { Component } from 'react'
import {
    Container,
    Row,
    Col,
    Navbar,
    Button,
} from 'react-bootstrap'

import 'styles/Topbar.css'

class Topbar extends Component {
  render() {
    return (
        <Navbar className="topbar" bg="light" variant="light" fixed="top">
            <Navbar.Collapse className='justify-content-end'>
                <Button variant="outline-primary">
                    Sign Out
                </Button>
            </Navbar.Collapse>
        </Navbar>
    )
  }
}

export default Topbar