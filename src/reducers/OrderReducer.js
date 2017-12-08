import {
    LOADING_DETAILS,
    DETAILS_LOADED_SUCCESS,
    BACK_TO_LIST,
    SET_SELECTED_PAGE
} from '../actions/types';

const INITIAL_STATE = {
    details: null,
    loading: true,
    selectedOrder: null,
    selectedPage: '1'
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LOADING_DETAILS:
            return {...state, loading: true, selectedOrder: action.payload}
        case DETAILS_LOADED_SUCCESS:
            return {...state, loading: false, details: action.payload}
        case BACK_TO_LIST:
            return {...state, loading: true, details: null, selectedOrder: null}
        case SET_SELECTED_PAGE:
            console.log('SET_SELECTED_PAGE', action.payload);
            return {...state, selectedPage: action.payload}
        default:
            return state
    }
}