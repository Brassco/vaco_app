import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import OrderReducer from './OrderReducer';
import OrdersReducer from './OrdersReducer';

export default combineReducers({
    auth: AuthReducer,
    order: OrderReducer,
    orders: OrdersReducer
})