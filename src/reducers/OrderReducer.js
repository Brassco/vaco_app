import {
    LOADING_DETAILS,
    DETAILS_LOADED_SUCCESS,
    BACK_TO_LIST,
    SET_SELECTED_PAGE,
    SET_PHONE_VISIBILITY
} from '../actions/types';

const INITIAL_STATE = {
    details: null,
    loading: true,
    selectedOrder: null,
    selectedPage: '1',
    phoneIsVisible: false
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
            return {...state, selectedPage: action.payload}
        case SET_PHONE_VISIBILITY:
            const phoneIsVisible = state.phoneIsVisible == true ? false : true;
            return {...state, phoneIsVisible: phoneIsVisible}
        default:
            return state
    }
}