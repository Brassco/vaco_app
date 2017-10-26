import {
    LOADING_DETAILS,
    DETAILS_LOADED_SUCCESS,
    BACK_TO_LIST
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
        case BACK_TO_LIST:
            return {...state, loading: true, details: null, selectedOrder: null}
        default:
            return state
    }
}