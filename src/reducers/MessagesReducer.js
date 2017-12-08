import {
    LOADING_MESSAGES,
    MESSAGES_LOADED_SUCCESS,
    MESSAGES_SENDED_SUCCESS,
    MESSAGE_CHANGE,
    SELECT_MESSAGE,
    SET_MESSAGES_FOR_QUESTION,
    CLEAR_MESSAGES_FOR_QUESTION
} from '../actions/types';
import axios from 'axios';

const INITIAL_STATE = {
    messages: [],
    msg: '',
    selectedMsg: null,
    loading: true,
    messagesForQuestion: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LOADING_MESSAGES:
            return {...state, loading: true}
        case MESSAGES_LOADED_SUCCESS:
            return {...state, msg: '', messages: action.payload, loading: false, messagesForQuestion: []}
        case MESSAGE_CHANGE:
            return {...state, msg: action.payload};
        case MESSAGES_SENDED_SUCCESS:
            return {...state, loading: false, msg: ''}
        case SELECT_MESSAGE:
            return {...state, loading: false, selectedMsg: action.payload}
        case SET_MESSAGES_FOR_QUESTION:
            return {...state, messagesForQuestion: action.payload}
        case CLEAR_MESSAGES_FOR_QUESTION:
            return {...state, messagesForQuestion: []}
        default:
            return state
    }
}