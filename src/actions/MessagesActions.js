import axios from 'axios';
import {
    MESSAGES_LOADED_SUCCESS
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

const onMessagesLoaded = (dispatch, messages) => {
    dispatch({
        type: MESSAGES_LOADED_SUCCESS,
        payload: messages
    })
}