import axios from 'axios';
import {
    PRICE_SENDING_FAIL,
    PRICES_LOADED_SUCCESS,
    PRICE_MSG_CHANGE,
    PRICE_VALUE_CHANGE,
    PRICE_SENDING_START,
    PRICE_MESSAGE_SENDED_SUCCESS
} from './types';
import Querystring from 'querystring';
import {Actions} from 'react-native-router-flux';

export const loadingPrices = (userKey, assingmentId) => {

    return (dispatch) => {
        const key = "Bearer " + userKey;
        const config = {'Authorization': key};
        const url = 'http://vacowebapi.azurewebsites.net/api/Assignments/GetApplicationsByAssignmentId?id=' + assingmentId;
        axios.get(url, {headers: config})
            .then(order => onPricesLoaded(dispatch, order.data))
            .catch((error) => {
                console.log(error);
            })
    }
}

export const sendMessage = (userKey, msgObj) => {
    var data = JSON.stringify(msgObj);

    const key = "Bearer "+userKey;
    const config = {
        'Content-Type': 'application/json',
        'Authorization': key
    };

    return (dispatch) => {
        dispatch({
            type: PRICE_SENDING_START
        })
    axios.post('http://vacowebapi.azurewebsites.net/api/Assignments/SendApplication', data, {headers: config})
        .then(user => onMessagesSended(dispatch, user.data))
        .catch((error) => {
            onSendingFail(dispatch, error)
        })
    }
}

export const changeMsg = (msg) => {
    return {
        type: PRICE_MSG_CHANGE,
        payload: msg
    }
}

export const changePrice = (price) => {
    return {
        type: PRICE_VALUE_CHANGE,
        payload: price
    }
}

export const setCountry = () => {}

const onSendingFail = (dispatch, error) => {
    dispatch({
        type: PRICE_SENDING_FAIL
    })
}

const onPricesLoaded = (dispatch, prices) => {
    dispatch({
        type: PRICES_LOADED_SUCCESS,
        payload: prices
    })
}

const onMessagesSended = (dispatch, res) => {

    dispatch({
        type: PRICE_MESSAGE_SENDED_SUCCESS
    })
    Actions.pop();
}