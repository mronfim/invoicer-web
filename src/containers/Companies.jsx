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
    componentWillMount() {
        this.props.fetchCompanies();
    }

    render() {
        const companies = this.props.companies.map(company => (
            <CompanyInstanceCard company={company} key={company.id} />
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