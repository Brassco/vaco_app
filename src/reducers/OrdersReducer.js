import {
    LOADING_ORDERS,
    ORDERS_LOADED_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    orders: [],
    loading: true
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LOADING_ORDERS:
            return {...state, loading: true}
        case ORDERS_LOADED_SUCCESS:
            return {...state, orders: action.payload, loading: false}
        default:
            return state
    }
}