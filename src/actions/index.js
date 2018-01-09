// import firebase from 'firebase';
import axios from 'axios';
import {
    EMAIL_CHANGE,
    PASSWORD_CHANGE,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    LOADING_ORDERS,
    LOADING_DETAILS,
    DETAILS_LOADED_SUCCESS,
    ORDERS_LOADED_SUCCESS,
    BACK_TO_LIST,
    SET_SELECTED_PAGE,
    SET_LOCATION_TIME,
    SET_PHONE_VISIBILITY
} from './types';
import {Actions} from 'react-native-router-flux';
import Querystring from 'querystring'
import orders from '../components/stub/orders.json';
import order from '../components/stub/order.json';

export const onEmailChange = (email) => {
    return {
        type: EMAIL_CHANGE,
        payload: email
    }
}

export const onPasswordChange = (pass) => {
    return {
        type: PASSWORD_CHANGE,
        payload: pass
    }
}

export const loginUser = ({email, password}) => {

    return (dispatch) => {

        dispatch({
            type: LOGIN_USER
        })

        // var data = Querystring.stringify({
        //     "grant_type": "password",
        //     "username": email,
        //     "password": password
        // });
        var data = Querystring.stringify({
            "grant_type": "password",
            "username": 'nariman.ospanov@kcell.kz',
            "password": '9EO'
        });
        axios.post('http://vacowebapi.azurewebsites.net/token', data)
            .then(user => onLoginSuccess(dispatch, user.data))
            .catch((error) => {
            console.log(error);
                onLoginFail(dispatch)
            })
    }
}

export const loadingOrders = (user) => {
    return (dispatch) => {
        dispatch({
            type: LOADING_ORDERS
        })
        const key= "Bearer " + user.access_token;
        const config = {'Authorization': key};
        axios.get('http://vacowebapi.azurewebsites.net/api/Assignments', {headers: config})
            .then((response) => onOrdersListLoaded(dispatch, response.data))
            .catch((error) => {
                console.log(error);
            })
        // onOrdersListLoaded(dispatch, orders)
    }
}

export const openDetails = (order) => {
    return (dispatch) => {
        dispatch({
            type: LOADING_DETAILS,
            payload: order
        })
        Actions.orderDetails();
    }
}

export const loadingDetails = (userKey, orderId) => {
    return (dispatch) => {

        const key = "Bearer " + userKey;
        const config = {'Authorization': key};
        const url = 'http://vacowebapi.azurewebsites.net/api/Assignments/' + orderId;
        axios.get(url, {headers: config})
            .then(order => onOrderDetailsLoaded(dispatch, order.data))
            .catch((error) => {
                console.log(error);
            })

    }
}

export const setSelectedPage = (selectedPage) => {
    return (dispatch) => {
        dispatch({
            type: SET_SELECTED_PAGE,
            payload: selectedPage
        })
    }
}

export const backToList = () => {
    return (dispatch) => {
        dispatch({
            type: BACK_TO_LIST
        })
    }
}

const onLoginSuccess = (dispatch, user) => {

    const key = "Bearer " + user.access_token;
    const config = {'Authorization': key};
    const url = 'http://vacowebapi.azurewebsites.net/api/Account/UserInfo';
    axios.get(url, {headers: config})
        .then(info => onUserInfoLoaded(dispatch, user, info.data))
        .catch((error) => {
            console.log(error);
        })
}

const onUserInfoLoaded = (dispatch, user, info) => {
    const userInfo = {...user, info: info}
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: userInfo
    })
    Actions.list();
}

const onLoginFail = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL
    })
}

const onOrderDetailsLoaded = (dispatch, order) => {
    dispatch({
        type: DETAILS_LOADED_SUCCESS,
        payload: order
    })

}

const onOrdersListLoaded = (dispatch, orders) => {
    dispatch({
        type: ORDERS_LOADED_SUCCESS,
        payload: orders
    })
}

export const sendLocation = (user, coordsObj, timestamp) => {
    return (dispatch) => {
        var data = Querystring.stringify(coordsObj);
        if (user) {
            const key = "Bearer "+user.access_token;
            const config = {'Authorization': key};
            axios.post('http://vacowebapi.azurewebsites.net/api/Coordinates', data, {headers: config})
                .then(response => {
                        setLocationCheckoutTime(dispatch, timestamp)
                    }
                )
                .catch((error) => {
                    console.log(error);
                    // onSendingFail(dispatch, error)
                })
        }

    }
}

const setLocationCheckoutTime = (dispatch, timestamp) => {
console.log('action setLocationCheckoutTime');
    dispatch({
        type: SET_LOCATION_TIME,
        payload: timestamp
    })
}

export const setPhoneVisibility = () => {
    return (dispatch) => {
        dispatch({
            type: SET_PHONE_VISIBILITY
        })
    }
}
