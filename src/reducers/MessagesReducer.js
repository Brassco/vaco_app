import {
    LOADING_MESSAGES,
    MESSAGES_LOADED_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    messages: [],
    loading: true
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LOADING_MESSAGES:
            return {...state, loading: true}
        case MESSAGES_LOADED_SUCCESS:
            return {...state, messages: action.payload, loading: false}
        default:
            return state
    }
}