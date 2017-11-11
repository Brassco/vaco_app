import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import OrderReducer from './OrderReducer';
import OrdersReducer from './OrdersReducer';
import PriceReducer from './PriceReducer';
import MessagesReducer from './MessagesReducer';

export default combineReducers({
    auth: AuthReducer,
    order: OrderReducer,
    orders: OrdersReducer,
    prices: PriceReducer,
    messages: MessagesReducer
})