import {handleActions} from 'redux-actions';

export default handleActions({
    NEWS_LIST: (state, action) => ({
        ...state,
        data: [...state.data, ...action.payload.list],
        page: action.payload.currPage,
        pageStatus: action.payload.totalPage == action.payload.currPage
    }),
    BANNER_LIST: (state, action) => Object.assign({}, state, {topViewBanner: action.payload}),
    NEWS_DETAIL: (state, action) => Object.assign({}, state, {newsDetail: action.payload})
}, {
    ret: true,
    statusText: '',
    data: [],
    pageStatus: false,
    newsDetail: {},
    page: 1,
    topViewBanner: [{
        title: '1',
        id: 1,
        imgUrl: 'http://images.fast4ward.cn/o_1c78iiejr1scp63r156h1pvl18bao.jpg'
    }, {title: '2', id: 2, imgUrl: 'http://images.fast4ward.cn/o_1c78iiejr1scp63r156h1pvl18bao.jpg'}]
});
