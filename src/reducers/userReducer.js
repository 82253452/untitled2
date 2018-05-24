import {handleActions} from 'redux-actions';
import DeviceStorage from '../utils/DeviceStorage'

export default handleActions({
    USER_LOGIN: (state, action) => {
        DeviceStorage.save('user', {status: true, userInfo: action.payload}).then(() => {
            console.log('222222');
        });
        return {
            ...state,
            user: action.payload,
            status: true,
        }
    },
    USER_LOGOUT: (state, action) => ({
        user: {},
        status: false,
    }),
    USER_SENDCODE: (state, action) => ({
        ...state
    }),
}, {
    user: {},
    status: true,
})
;
