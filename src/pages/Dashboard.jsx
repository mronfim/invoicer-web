import React from 'react';
import { Route, Switch} from 'react-router-dom'
import {
    Container,
    Row,
    Col,
    Nav,
    Button,
} from 'react-bootstrap'

import Companies from 'containers/Companies'
import Estimates from 'containers/Estimates'
import EstimateForm from 'containers/EstimateForm'

import 'styles/Dashboard.css'

class Dashboard extends React.Component {
    render() {
        return (
            <Container className='dashboard' fluid={true}>
                <Row className='dashboard-body' noGutters={true}>
                    <Col className='app-root'>
                        <Route path='/companies' component={Companies} />
                        <Route path='/estimates' component={Estimates} />
                        <Route path='/estimate/:estimateId' component={EstimateForm} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Dashboard;