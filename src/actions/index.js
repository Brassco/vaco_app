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
    BACK_TO_LIST
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
        onLoginSuccess(dispatch, 'user');
        console.log('loginUser');
        // var data = Querystring.stringify({
        //     "grant_type": "password",
        //     "username": 'nariman.ospanov@kcell.kz',
        //     "password": '9EO'
        // });
        // axios.post('http://vacowebapi.azurewebsites.net/token', data)
        //     .then(user => onLoginSuccess(dispatch, user.data))
        //     .catch((error) => {
        //         console.log(error);
        //     })
    }
}

export const loadingOrders = (user) => {
    return (dispatch) => {
        dispatch({
            type: LOADING_ORDERS
        })
        onOrdersListLoaded(dispatch, orders);
        // const key="Bearer y7ixvWtlmByyHe_oLTew2idnykAYKSUDKdKStGV27HPaEUbfGTMLShPN2O5x3FVezAhSMD8qoBVubsTpE5Tf5AEqIA83ASM7HrQCZq-5KNQQj6oaiWZN2nyKpfREaAXzkc-usK9wqjZ9FM4xv-JYo9XT7cq2zY-fT3rYDd36uhfH2Xyu6XgIYWkKrL6FeWf1QSJM_lVcKL2mOcbmD6HYFSUpbw5_rGCXXHk1PKkeHsZJ6yv_vcebM6ierPAxEhZ3-q8lKVMovc8P6Dy57xfTBBi5sGZv0EaGnkgogc-l2jhhyNlRx9dTOopgxof4wEQ8zndiYpMd4Tkfb5tVVAb2q8UQz4NMz9SRdkQh88_ztYjsujGUWod46qcvl1q9vXaFvth8zxuyEstXVDdI6EFbdKjJLL6M7JKu6hAA2DpUg_jCiJQ9k7rrgfl6FhzRaAV9DUrYEw5FRC1w8goRuDRPWW1V-Xy-25AsPtE3utPlVZVOyZFiuU664i0ReOnyt0Ee47wWnEbaVqEB6u6rSP5J6us9S2r8XGlbHzvPS8kAC9FUGVu1H_ChxXqznZI0Wfi8"
        // const key= "Bearer " + user.access_token;
        // const config = {'Authorization': key};
        // axios.get('http://vacowebapi.azurewebsites.net/api/Assignments', {headers: config})
        //     .then((response) => onOrdersListLoaded(dispatch, response.data))
        //     .catch((error) => {
        //         console.log(error);
        //     })
    }
}

export const openDetails = (order) => {
    console.log(order);
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

        onOrderDetailsLoaded(dispatch, order);

        // const key="Bearer QfQwMr9GvpILvBFg6DUpd0FkGZeOTvMOXbM9ibP1WlHVIB1PIYcWTBxE7HaLhHABwQ9Im4uVZj0FzCi2FfcVkegzWtCZEA_xLRwabeA56xU-qts7uxpvAoWkJPhkZlZkf8zM08gNZ-lHbh5qo5rSOmjT9UDw6CJyLN2hcciX6zkOCZKdPYr4Z-O_juTvEf9HadP7xUr4XNhukLiZJR6xZrBn2G-_G0LB3tMQ8tP6_c0Fcye6OSaAN_sO7lesoeS9epKWZ5Cu5kLMUdUyyKfJhKzQQUl2iH33boyBOFdq_XsuL0wP-qKyABfhCkIx2p77S1wnaDmNSFqIqGu4ULeGJxSLaRaHekLPHJAuDEnWDxDcUaAQXcYy6obnJC_sIAQSPRE2TBIap7rOFKmOFhVzV2f2u7FNSsLrS2zRpLu9LbLOG4ln4UAeo6S0Z_Tj3Lt6EJk60RDJq0PFefBP4eqMjjS5zdnT54oqatM3qUfGT82Ag1K6-phxXsvlxxIqSxi91EnGf6LQ6jEADwxXtzy-MKYXr0ON2eDDDIoZQLdhldo"
        // const key = "Bearer " + userKey;
        // const config = {'Authorization': key};
        // const url = 'http://vacowebapi.azurewebsites.net/api/Assignments/' + orderId;
        // axios.get(url, {headers: config})
        //     .then(order => onOrderDetailsLoaded(dispatch, order.data))
        //     .catch((error) => {
        //         console.log(error);
        //     })

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
    console.log('on login success', user);
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
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
