import { InvoicerApi, DummyApi } from 'axios.config.js'
import { FETCH_USER_COMPANIES, NEW_USER_COMPANY } from './types'

export const fetchCompanies = () => dispatch => {
    InvoicerApi.get('/companies')
    .then( response => {
        dispatch({
            type: FETCH_USER_COMPANIES,
            payload: response.data
        })
    })
}