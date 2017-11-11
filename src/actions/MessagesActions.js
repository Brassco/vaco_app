import axios from 'axios';
import {
    MESSAGES_LOADED_SUCCESS
} from './types';
import {Actions} from 'react-native-router-flux';
import Querystring from 'querystring'

export const loadingMessages = (userKey, assingmentId) => {
    console.log('loadingMessages');
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

const onMessagesLoaded = (dispatch, messages) => {
    dispatch({
        type: MESSAGES_LOADED_SUCCESS,
        payload: messages
    })
}