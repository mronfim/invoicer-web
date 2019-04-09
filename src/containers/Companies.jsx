import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Form,
    Button
} from 'react-bootstrap'

import { fetchCompanies } from 'actions/userActions'

import CompanyInstanceCard from 'components/CompanyInstanceCard'

import 'styles/Companies.css'

class Companies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expandedCompanyId: undefined,
        }
    }

    componentWillMount() {
        this.props.fetchCompanies()
    }

    onExpandForEditing(companyId) {
        this.setState({ expandedCompanyId: companyId })
    }

    render() {
        const expanded = this.state.expandedCompanyId // Which company should be expanded for editing
        const companies = this.props.companies.map(company => (
            <CompanyInstanceCard
                key={company.id}
                company={company}
                expanded={company.id === expanded}
                onEdit={this.onExpandForEditing.bind(this)}
            />
        ))
        return (
            <div className="companies">
                <h2>Edit Companies</h2>
                {companies}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user.currentUser,
    company: state.company.currentCompany,
    companies: state.user.companies,
})

const mapDispatchToProps = {
    fetchCompanies,
}

export default connect(mapStateToProps, mapDispatchToProps )(Companies)