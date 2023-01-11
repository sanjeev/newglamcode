import HomeReducers from './HomeReducers'
import mainCatReducers from './mainCatReducers'
import locationReducers from './locationReducers'
import userDetails from './UserReducers'
import cardAdd from './cart'

import userAddress from './UserAddressReduces'
import storage from "redux-persist/lib/storage";
import { combineReducers } from 'redux'
import { persistReducer } from "redux-persist";

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    slide: HomeReducers,
    maincat: mainCatReducers,
    loctions: locationReducers,
    cardAdd: cardAdd,
    userdetails: userDetails,
    userAddress: userAddress
});

export default persistReducer(persistConfig, rootReducer);