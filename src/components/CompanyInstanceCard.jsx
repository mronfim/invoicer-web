import React, { Component } from 'react'
import {
    Form,
    Col,
    Button,
    ButtonToolbar,
    ButtonGroup,
} from 'react-bootstrap'

import 'styles/CompanyInstanceCard.css'

export default class CompanyInstanceCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.company.name,
            ...props.company.address,
            editing: false,
            editPaneStyle: styleNotEditing
        }
    }

    _startEditing() {
        this.setState({
            editing: true,
            editPaneStyle: styleEditing,
        })
    }

    _cancelEditing() {
        this.setState({
            editing: false,
            editPaneStyle: styleNotEditing,
        })
    }

    onEdit() {
        this.state.editing ? this._cancelEditing() : this._startEditing()
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const { id, name, street, city, state, zipcode } = this.state
        const { editPaneStyle } = this.state

        return (
            <div key={id} className='company-instance-card'>
                <ul>
                    <li>
                        <Form.Check type="checkbox" />
                    </li>
                    <li><h5 className='name'>{name}</h5></li>
                    <li>
                        <Button variant="outline-secondary" onClick={this.onEdit.bind(this)}>
                            Edit
                        </Button>
                    </li>
                </ul>
                <div className='edit-pane' style={editPaneStyle}>
                    <Form className='edit-form'>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control
                                as='input'
                                name='name'
                                value={name}
                                placeholder="Company Name"
                                onChange={this.onChange.bind(this)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Company Address</Form.Label>
                            <Form.Row>
                                <Col>
                                    <Form.Control
                                        as='input'
                                        name='street'
                                        value={street}
                                        placeholder="Street"
                                        onChange={this.onChange.bind(this)}
                                        />
                                </Col>
                                <Col>
                                    <Form.Control
                                        as='input'
                                        name='city'
                                        value={city}
                                        placeholder="City"
                                        onChange={this.onChange.bind(this)} />
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Control
                                        as='input'
                                        name='state'
                                        value={state}
                                        placeholder="State"
                                        onChange={this.onChange.bind(this)} />
                                </Col>
                                <Col>
                                    <Form.Control
                                        as='input'
                                        name='zipcode'
                                        value={zipcode}
                                        placeholder="Zip Code"
                                        onChange={this.onChange.bind(this)} />
                                </Col>
                            </Form.Row>
                        </Form.Group>
                        <ButtonToolbar>
                            <ButtonGroup style={{ margin: '0 0 0 auto' }}>
                                <Button variant="outline-danger" type="Save">
                                    Delete
                                </Button>
                                <Button variant="success" type="Save">
                                    Submit
                                </Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </Form>
                </div>
            </div>
        )
    }
}

const styleEditing = {
    marginTop: '15px',
    paddingTop: '10px',
    height: '300px',
    opacity: 1,
}

const styleNotEditing = {
    marginTop: 0,
    paddingTop: 0,
    height: 0,
    opacity: 0,
}