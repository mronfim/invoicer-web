import React from 'react';
import {
    Container,
    Row,
    Col,
    Nav,
    Button,
} from 'react-bootstrap'

import Topbar from 'components/Topbar'
import Companies from 'containers/Companies'

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
                            <Companies />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Dashboard;