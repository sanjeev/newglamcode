import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from "redux-persist";
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
let composeEnhancers;
if (typeof window !== 'undefined') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
    composeEnhancers = compose;
}
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export const persistor = persistStore(store);
export default store;





//const composeEnhancers = compose;

// const store = createStore(rootReducer, composeEnhancers(
//     applyMiddleware(thunk)
// ));
// export default store;