import axios from 'axios';
import {
    PRICE_SENDING_FAIL,
    PRICES_LOADED_SUCCESS,
    PRICE_MSG_CHANGE,
    PRICE_VALUE_CHANGE,
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
    var data = Querystring.stringify({
        "ExecutorId": msgObj.executorId,
        "AssignmentId": msgObj.assignmentId,
        "Text": msgObj.text,
        "ProposedPrice": msgObj.proposedPrice
    });

    const key = "Bearer i-2YXXcwe25hbYnz2NFrJZQ7CO1gdlqyKa1sLjWaQnTBh7H1lz2yI7eeHax3jN1ET2E4-9OrPF8tFudTLTy4JobBP6Oa63abXodBWe1dA8LZO069c7qJaw6Knzti_PEuYkqkGu8QjoFLCTAP8vfm2OzYWGestEIApqfnbhASZFSVWrCGh5-6-ACndbScITd2-4JNYJTwbESWnhhbe5V511-JfR60CEloW3Sr8a1-0DkzdtX42woMCBoTwknZKfIsRS0Tx96A7biJx1xSdpKu6kCYZC11Q9SvEJC62FjmcNDSPdbnQx7js5J5cnCw95KTXRT-uTveU8W3uJceqAPRfAFNcB5snq1dwInLhx-D8SDxog4Y6R6H6aQ0C2pwV9wwBOxUrBht8fOv0eaMpRuDiSbiu68_r_hPyJRiJjkw6GQxjlKidEQyoyVvdHnrvGNSs0aRwSGpc0pYrq8JJ81grs55cagQKLNee1xr0MFHSyzEl8p4N-ARSOfz3XpTZoU8h2y_q12Az17bo2yIbloVNrtRhQiZ5p8e9R4vALhuJow";
    const config = {'Authorization': key};
    return (dispatch) => {
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
    console.log(error);
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
    
    Actions.pop();
}