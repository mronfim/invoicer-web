import { InvoicerApi, DummyApi } from 'axios.config.js'
import {
    FETCH_COMPANY_ESTIMATES,
    NEW_COMPANY_ESTIMATE,
    FETCH_ESTIMATE_DETAILS,
    UNSET_ESTIMATE_DETAILS,
} from './types'

export const fetchEstimates = (userId, companyId) => dispatch => {
    InvoicerApi.get(`/companies/${companyId}/estimates`)
        .then(response => {
            dispatch({
                type: FETCH_COMPANY_ESTIMATES,
                payload: response.data.estimates
            })
        })
}

export const fetchEstimateDetails = (userId, companyId, estimateId) => dispatch => {
    InvoicerApi.get(`/companies/${companyId}/estimates/${estimateId}`)
        .then(response => {
            dispatch({
                type: FETCH_ESTIMATE_DETAILS,
                payload: response.data
            })
        })
}

export const unsetEstimateDetails = () => ({
    type: UNSET_ESTIMATE_DETAILS,
    payload: undefined,
})