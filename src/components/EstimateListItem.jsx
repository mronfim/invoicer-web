import React, { Component } from 'react'

// import 'styles/EstimateListItem.scss'

export default class EstimateListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...this.props.estimate
        }
    }

    render() {
        const { id, title, client, estimateNumber, items } = this.state
        return (
            <div className='estimate-list-item'>
                <div className='estimate-number'><h6>#{estimateNumber}</h6></div>
            </div>
        )
    }
}
