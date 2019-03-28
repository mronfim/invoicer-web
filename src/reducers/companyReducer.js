import {
    FETCH_COMPANY_ESTIMATES,
    NEW_COMPANY_ESTIMATE,
    FETCH_ESTIMATE_DETAILS,
    UNSET_ESTIMATE_DETAILS,
} from 'actions/types'

const initialState = {
    current: {
        id: 1,
    },
    estimates: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMPANY_ESTIMATES:
            return {
                ...state,
                estimates: action.payload,
            }
        case FETCH_ESTIMATE_DETAILS:
            return {
                ...state,
                estimate: action.payload,
            }
        case UNSET_ESTIMATE_DETAILS:
            return {
                ...state,
                estimate: action.payload,
            }
        default:
            return state
    }
}