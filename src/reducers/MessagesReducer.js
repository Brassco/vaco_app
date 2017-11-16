import {
    LOADING_MESSAGES,
    MESSAGES_LOADED_SUCCESS,
    MESSAGES_SENDED_SUCCESS,
    MESSAGE_CHANGE,
    SELECT_MESSAGE
} from '../actions/types';

const INITIAL_STATE = {
    messages: [],
    msg: '',
    selectedMsg: null,
    loading: true
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LOADING_MESSAGES:
            return {...state, loading: true}
        case MESSAGES_LOADED_SUCCESS:
            return {...state, messages: action.payload, loading: false}
        case MESSAGE_CHANGE:
            console.log('MESSAGE_CHANGE', action.payload)
            return {...state, msg: action.payload};
        case MESSAGES_SENDED_SUCCESS:
            return {...state, loading: false}
        case SELECT_MESSAGE:
            return {...state, loading: false, selectedMsg: action.payload}
        default:
            return state
    }
}