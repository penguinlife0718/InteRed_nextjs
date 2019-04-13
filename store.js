import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import Info from './reducer/Info';
import InfoList from './reducer/InfoList';
import RankList from './reducer/RankList';
import User from './reducer/User';
import Payment from './reducer/Payment';
import Messages from './reducer/Messages';


let reducer = combineReducers({ Info, InfoList, RankList, User, Payment, Messages });
const store = (initialState) => { return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
);}

export default store;