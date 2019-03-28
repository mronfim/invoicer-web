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
                <div className='estimate-number'>
                    <span>#{estimateNumber}</span>
                </div>
                <div className='estimate-title'>
                    <span>{title}</span>
                </div>
                <div className='estimate-client'>
                    <span>{this.parseClientInfo(client)}</span>
                </div>
                <div className='estimate-total'>
                    <span>${total}</span>
                </div>
            </div>
        )
    }
}
