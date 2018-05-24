import {createAction} from 'redux-actions'
import {fetchApi, API} from '../utils';
import {NavigationActions} from "react-navigation";


export const newsList = createAction('NEWS_LIST', (page) => {
    return fetchApi(API.API_NEWS, {newsType: '0', page: page}).then((data) => {
        return data;
    });
});
export const bannerList = createAction('BANNER_LIST', () => {
    return fetchApi(API.API_NEWS, {newsType: '1'}).then((data) => {
        return data.list;
    });
});
export const newsDetail = createAction('NEWS_DETAIL', (id) => {
    return fetchApi(API.API_NEWS_DETAIL, {id: id}).then((data) => {
        return data;
    });
});
export const goback = createAction(NavigationActions.back(), () => {

});


