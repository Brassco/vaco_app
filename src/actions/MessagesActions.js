import axios from 'axios';
import {
    LOADING_MESSAGES,
    MESSAGES_LOADED_SUCCESS,
    MESSAGES_SENDED_SUCCESS,
    MESSAGE_CHANGE,
    SELECT_MESSAGE,
    SET_MESSAGES_FOR_QUESTION,
    CLEAR_MESSAGES_FOR_QUESTION
} from './types';
import Querystring from 'querystring';
import {Actions} from 'react-native-router-flux';

export const loadingMessages = (userKey, assingmentId) => {

    return (dispatch) => {
        startLoadingMessages(dispatch);
        const key = "Bearer " + userKey;
        const config = {'Authorization': key};
        const url = 'http://vacowebapi.azurewebsites.net/api/Assignments/GetQnAByAssignmentId?id=' + assingmentId;
        axios.get(url, {headers: config})
            .then(order => onMessagesLoaded(dispatch, order.data))
            .catch((error) => {
                console.log(error);
            })
    }
}

export const sendMessage = (userKey, msgObj) => {
    return (dispatch) => {

        var data = Querystring.stringify(msgObj);

        const key = "Bearer "+userKey;
        const config = {'Authorization': key};

        axios.post('http://vacowebapi.azurewebsites.net/api/Assignments/SendQnA', data, {headers: config})
            .then(response => onMessagesSended(dispatch, response.data))
            .catch((error) => {
            console.log(error);
                // onSendingFail(dispatch, error)
            })
    }
}

export const selectMessage = (messageObj) => {
    return {
        type:SELECT_MESSAGE,
        payload: messageObj
    }
}

export const onChangeMsg = (msg) => {
    return {
        type: MESSAGE_CHANGE,
        payload: msg
    }
}

export const clearMessagesForQuestion = () => {
    return {
        type: CLEAR_MESSAGES_FOR_QUESTION
    }
}

export const setMessagesForQuestion = (msgs) => {
    return {
        type: SET_MESSAGES_FOR_QUESTION,
        payload: msgs
    }
}

const startLoadingMessages = (dispatch) => {
    dispatch({
        type: LOADING_MESSAGES
    })
}

const onMessagesLoaded = (dispatch, messages) => {
    dispatch({
        type: MESSAGES_LOADED_SUCCESS,
        payload: messages
    })
}

const onMessagesSended = (dispatch, response) => {

    Actions.pop();
    dispatch({
        type: MESSAGES_SENDED_SUCCESS
    })
}