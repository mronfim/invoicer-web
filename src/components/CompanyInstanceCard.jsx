import React, { Component } from 'react'
import {
    Form,
    Col,
    Button,
    ButtonToolbar,
    ButtonGroup,
} from 'react-bootstrap'

import 'styles/CompanyInstanceCard.scss'

export default class CompanyInstanceCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.company.name,
            ...props.company.address,
        }
    }

    // Handles style changes when entering editing mode
    _startEditing() {
        this.props.onEdit(this.props.company.id)
    }

    // Handles style changes when leaving editing mode
    _cancelEditing() {
        this.props.onEdit(undefined)
    }

    // Called when edit button is pressed
    onEdit() {
        this.props.expanded ? this._cancelEditing() : this._startEditing()
    }

    // Handle text input onChange event
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    // Editing was canceled. Revert the values back to default
    onCancel() {
        this._cancelEditing()
        this.setState({
            name: this.props.company.name,
            ...this.props.company.address,
        })
    }

    // Delete Company. API request
    onDelete() {

    }

    // Save edits. API Request
    onSave() {
        this._cancelEditing()
    }

    render() {
        const { id, name, street, city, state, zipcode } = this.state
        const { expanded } = this.props
        const editPaneStyle = expanded ? styleEditing : styleNotEditing
        const expandedClass = expanded ? 'expanded' : ''

        return (
            <div className={`company-instance-card ${expandedClass}`}>
                <ul>
                    <li>
                        <Form.Check type="checkbox" />
                    </li>
                    <li><h5 className='name'>{name}</h5></li>
                    <li className='edit-cancel-group'>
                        <div>
                            <Button variant="outline-secondary" onClick={this.onEdit.bind(this)}>
                                Edit
                            </Button>
                        </div>
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
                                <Button variant="outline-danger" onClick={this.onDelete.bind(this)}>
                                    Delete
                                </Button>
                                <Button variant="outline-secondary" onClick={this.onCancel.bind(this)}>
                                    Cancel
                                </Button>
                                <Button variant="success" onClick={this.onSave.bind(this)}>
                                    Save
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