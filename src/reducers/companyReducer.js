import { FETCH_COMPANY_ESTIMATES, NEW_COMPANY_ESTIMATE } from 'actions/types'

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
                estimates: action.payload
            }
        default:
            return state
    }
}