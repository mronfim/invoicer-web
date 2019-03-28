import { InvoicerApi, DummyApi } from 'axios.config.js'
import { FETCH_COMPANY_ESTIMATES, NEW_COMPANY_ESTIMATE } from './types'

export const fetchEstimates = (userId, companyId) => dispatch => {
    InvoicerApi.get(`/companies/${companyId}/estimates`)
        .then(response => {
            dispatch({
                type: FETCH_COMPANY_ESTIMATES,
                payload: response.data
            })
        })
}