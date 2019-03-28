import React from 'react';
import { Router, Route, Redirect } from 'react-router-dom'
import {
    Container,
    Row,
    Col,
    Nav,
    Button,
} from 'react-bootstrap'

import Topbar from 'components/Topbar'
import Companies from 'containers/Companies'
import Estimates from 'containers/Estimates'

import 'styles/Dashboard.css'

import SideNav from 'components/SideNav'

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <Topbar />
                <SideNav />
                <Container className='dashboard' fluid={true}>
                    <Row className='dashboard-body' noGutters={true}>
                        <Col className='app-root'>
                            <Route path='/companies' component={Companies} />
                            <Route path='/estimates' component={Estimates} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Dashboard;