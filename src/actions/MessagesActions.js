import axios from 'axios';
import {
    MESSAGES_LOADED_SUCCESS,
    MESSAGES_SENDED_SUCCESS,
    MESSAGE_CHANGE,
    SELECT_MESSAGE
} from './types';

export const loadingMessages = (userKey, assingmentId) => {

    return (dispatch) => {
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

export const sendMessage = (msgObj) => {
    return (dispatch) => {
        // const key = "Bearer " + userKey;
        // const config = {'Authorization': key};
        // const url = 'http://vacowebapi.azurewebsites.net/api/Assignments/SendApplication';
        // axios.get(url, {headers: config})
        //     .then(order => onMessagesSended(dispatch, order.data))
        //     .catch((error) => {
        //         console.log(error);
        //     })

        var data = Querystring.stringify({
            "AuthorId": msgObj.authorId,
            "AssignmentId": msgObj.assingmentId,
            "Text": msgObj.text,
            "DateTime": msgObj.dateTime,
            "ResponseToQuestionId": msgObj.responseToQuestionId
        });
        axios.post('http://vacowebapi.azurewebsites.net/token', data)
            .then(user => onMessagesSended(dispatch, user.data))
            .catch((error) => {
                onLoginFail(dispatch)
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

const onMessagesLoaded = (dispatch, messages) => {
    dispatch({
        type: MESSAGES_LOADED_SUCCESS,
        payload: messages
    })
}

const onMessagesSended = (dispatch, res) => {
    dispatch({
        type: MESSAGES_SENDED_SUCCESS,
        payload: messages
    })
}