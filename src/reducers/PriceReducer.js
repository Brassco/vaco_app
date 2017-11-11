import {
    LOADING_PRICES,
    PRICES_LOADED_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    prices: [],
    loading: true
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LOADING_PRICES:
            return {...state, loading: true}
        case PRICES_LOADED_SUCCESS:
            return {...state, prices: action.payload, loading: false}
        default:
            return state
    }
}