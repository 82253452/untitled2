import * as types from '../constant/ActionTypes';


import {AsyncStorage} from 'react-native';
// 存储信息的KEY
let KEY = 'USERTOKEN';

// 这个方法是请求网络，获取Token的方法
// 识兔中调用这个方法之后，需要判断是否存在userToken，不存在请求网络并保存，存在直接调用返回
export function userToken() {
    return dispatch => {
        dispatch(getUserToken(KEY));
    }
};

// 如果()括号里面的参数`userToken`和Reducer里面的初始参数一样，就可以不用键：值的写法，直接返回就好。
export function getUserToken(userToken) {
    return {
        // type是必要参数，通过type值判断
        type: types.USER_TOKEN_SUCCESS,
        userToken
    }
}


// 如果()括号里面的参数`userToken`和Reducer里面的初始参数一样，就可以不用键：值的写法，直接返回就好。
export function increase() {
    return {
        increase() {
            dispatch({
                type: 'increase',
            })
        }
    }
}
