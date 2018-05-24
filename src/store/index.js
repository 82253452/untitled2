import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';

import getReducers from '../reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import {persistStore, persistReducer} from 'redux-persist'
import {AsyncStorage} from "react-native";
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
//promiseMiddleware 是异步action的一个中间件，本例子中暂时没有使用
const middleware = createReactNavigationReduxMiddleware(
    "App",
    state => state.nav,
);
export const addListener = createReduxBoundAddListener("App");
let middlewares = [];
middlewares.push(thunk);
middlewares.push(promiseMiddleware);
middlewares.push(middleware);
middlewares.push(logger);

const persistConfig = {
    key: 'user',
    storage: AsyncStorage,
    stateReconciler: hardSet,
}

export function getStore(navReducer) {

    let store = createStore(
        persistReducer(persistConfig, getReducers(navReducer)),
        undefined,
        applyMiddleware(...middlewares)
    );
    let persistor = persistStore(store)
    return {store, persistor};
}
