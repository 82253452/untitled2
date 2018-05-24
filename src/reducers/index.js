import {combineReducers} from 'redux';

import news from './newsReducer';
import user from './userReducer';

//和导航相关的reducer通过从调用出传递进来
export default function getReducers(navReducer) {
    return combineReducers({
        user,
        news,
        nav: navReducer
    });
}
