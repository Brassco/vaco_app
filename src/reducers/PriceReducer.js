import {
    LOADING_PRICES,
    PRICES_LOADED_SUCCESS,
    PRICE_MSG_CHANGE,
    PRICE_VALUE_CHANGE,
    PRICE_MESSAGE_SENDED_SUCCESS,
    PRICE_SENDING_FAIL,
    PRICE_SENDING_START
} from '../actions/types';

const INITIAL_STATE = {
    prices: [],
    loading: true,
    msg: '',
    country: 'kzt',
    value: '',
    error: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LOADING_PRICES:
            return {...state, loading: true}
        case PRICES_LOADED_SUCCESS:
            return {...state, prices: action.payload, loading: false, error: null}
        case PRICE_MSG_CHANGE:
            return {...state, msg: action.payload, error: null}
        case PRICE_VALUE_CHANGE:
            return {...state, value: action.payload, error: null}
        case PRICE_SENDING_FAIL:
            return {...state, loading: false, error: action.payload}
        case PRICE_SENDING_START:
            return {...state, loading: true}
        case PRICE_MESSAGE_SENDED_SUCCESS:
            return {...state, loading: false}
        default:
            return state
    }
}