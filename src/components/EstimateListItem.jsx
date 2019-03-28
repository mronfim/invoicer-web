import React, { Component } from 'react'

import 'styles/EstimateListItem.scss'

export default class EstimateListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...this.props.estimate
        }
    }

    parseClientInfo(client) {
        return client.fullname
    }

    render() {
        const { id, title, client, estimateNumber, items } = this.state
        const total = items.reduce((prev, item) => ({ price: prev.price + item.price })).price
        return (
            <div className='estimate-list-item'>
                <div className='estimate-number'><h6>#{estimateNumber}</h6></div>
                <div className='estimate-title'><h5>{title}</h5></div>
                <div className='estimate-client'>{this.parseClientInfo(client)}</div>
                <div className='estimate-total'><h4>${total}</h4></div>
            </div>
        )
    }
}
