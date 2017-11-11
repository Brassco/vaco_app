import axios from 'axios';
import {
    LOADING_PRICES,
    PRICES_LOADED_SUCCESS
} from './types';

export const loadingPrices = (userKey, assingmentId) => {
    console.log('loadingPrices');
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

const onPricesLoaded = (dispatch, prices) => {
    dispatch({
        type: PRICES_LOADED_SUCCESS,
        payload: prices
    })
}