import {createAction} from 'redux-actions'
import {fetchApi, API} from '../utils';
import * as wechat from 'react-native-wechat';


export const loginWechat = createAction('USER_LOGIN', () => {
    let scope = 'snsapi_userinfo';
    let state = 'wechat_sdk_demo';
    wechat.isWXAppInstalled()
        .then((isInstalled) => {
            if (isInstalled) {
                wechat.sendAuthRequest(scope, state)
                    .then(responseCode => {
                        console.log('????');
                        console.log(responseCode);
                        console.log(responseCode.code);
                    })
                    .catch(err => {
                        console.error('登录授权发生错误：', err.message, [
                            {text: '确定'}
                        ]);
                    })
            } else {
                console.error('没安装');
            }
        })
    return {};
    // return fetchApi(API.API_NEWS, {newsType: '0', page: page}).then((data) => {
    //     return data;
    // });
});
export const login = createAction('USER_LOGIN', () => {
    return fetchApi(API.API_NEWS, {newsType: '0', page: page}).then((data) => {
        return data;
    });
});
export const loginOut = createAction('USER_LOGOUT', () => {
    return {};
});
export const sendCode = createAction('USER_SENDCODE', (phone) => {
    return fetchApi(API.API_SEND_CODE, {mobile: phone}).then((data) => {
        return data;
    });
});
export const loginBySms = createAction('USER_LOGIN', (phone, code) => {
    return fetchApi(API.API_SMS_LOGIN, {mobile: phone, code: code}).then((data) => {
        return data;
    });
});


