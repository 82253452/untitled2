module.exports = {
    API_NEWS: {
        url: '/rest/news/list',
        method: 'post',
        des: '-资讯列表'
    },
    API_NEWS_DETAIL: {
        url: '/rest/news/info',
        method: 'post',
        des: '-资讯详情'
    },
    API_SEND_CODE: {
        url: '/rest/user/get-sms-for-login',
        method: 'get',
        des: '-获取验证码'
    },
    API_SMS_LOGIN: {
        url: '/rest/user/login-by-mobile',
        method: 'post',
        des: '-验证码登录'
    },

}