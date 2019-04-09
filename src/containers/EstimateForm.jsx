import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Container
} from 'react-bootstrap'

import { fetchEstimateDetails } from 'actions/companyActions'

import 'styles/EstimateForm.scss'

class EstimateForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            minHeight: this._calculateMinHeight(),
        }
    }

    componentDidMount() {
        const { match : { params } } = this.props
        const user = this.props.user
        const company = this.props.company
        const { estimateId } = params

        // Check if estimate is passed and if id is present
        // If URL has id and no estimate, then fetch estimate
        if (estimateId) {
            this.props.fetchEstimateDetails(user.id, company.id, estimateId)
        }

        window.addEventListener("resize", this.updateHeight.bind(this))
    }

    updateHeight() {
        const topOffset = 55 + 15; // Topnav height + padding
        this.setState({
            minHeight: this._calculateMinHeight(),
        })
    }

    _calculateMinHeight() {
        const topOffset = 55 + 15 + 15; // Topnav height + padding top + padding bottom
        return window.innerHeight - topOffset;
    }

    render() {
        const { minHeight } = this.state
        const estimate = this.props.estimate || {}
        const items = this.props.estimate && this.props.estimate.items.map((item, index) => (
            <div key={index} className='estime-item'>
                {item.description} {item.price}
            </div>
        ))
        return (
            <Container fluid={true} className='estimate-form' style={{ minHeight }}>
                <header className="estimate-header">
                    <div className="estimate-number text-left">
                        <h3>Estimate #{estimate.estimateNumber}</h3>
                    </div>
                    <hr />
                    <div className="header-info">
                        <div className="client-info text-left">
                            <div className="client-info-header">
                                <h5>Client</h5>
                            </div>
                        </div>
                    </div>
                </header>
                <hr/>
                <div className="estimate-items">
                    <div className="items-header">
                        <h5>Items</h5>
                    </div>
                    {items}
                </div>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user.current,
    company: state.company.current,
    estimate: state.company.estimate,
})

const mapDispatchToProps = {
    fetchEstimateDetails,
}

export default connect(mapStateToProps, mapDispatchToProps)(EstimateForm)