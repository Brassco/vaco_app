import {
    LOADING_DETAILS,
    DETAILS_LOADED_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    details: null,
    loading: true,
    selectedOrder: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LOADING_DETAILS:

            return {...state, loading: true, selectedOrder: action.payload}
        case DETAILS_LOADED_SUCCESS:
            return {...state, loading: false, details: action.payload}

        default:
            return state
    }
}