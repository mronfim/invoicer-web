import { FETCH_USER_COMPANIES, NEW_USER_COMPANY } from 'actions/types'

const initialState = {
    current: {
        id: 1,
    },
    companies: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_COMPANIES:
            return {
                ...state,
                companies: action.payload
            }
        default:
            return state
    }
}