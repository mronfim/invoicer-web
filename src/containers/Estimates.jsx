import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Form,
    Button
} from 'react-bootstrap'

import { fetchEstimates } from 'actions/companyActions'

import EstimateListItem from 'components/EstimateListItem'

import 'styles/Estimates.scss'

class Estimates extends Component {
    componentWillMount() {
        const userId = this.props.user.id
        const companyId = this.props.company.id
        this.props.fetchEstimates(userId, companyId);
    }

    render() {
        const estimates = this.props.estimates.map(estimate => (
            <EstimateListItem estimate={estimate} key={estimate.id} />
        ))
        return (
            <div className="estimates">
                <h2>Estimates</h2>
                {estimates}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user.current,
    company: state.company.current,
    estimates: state.company.estimates,
})

const mapDispatchToProps = {
    fetchEstimates,
}

export default connect(mapStateToProps, mapDispatchToProps )(Estimates)