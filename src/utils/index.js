import API from './api'

const commonParam = {
    device: 'IOS'
}

function fetchData(action, params, method = 'post') {
    console.log('开始get');
    return fetch('http://dev.innter.fast4ward.cn/innter' + action, {
        method: method,
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: params ? JSON.stringify(params) : null
    })
        .then((response) => {
            return response.json()
        }).then((responseData) => {

        })
        .catch((error) => { // 错误处理
            console.log(error);
        });
}

let getFetchParamm = (method, body) => {
    if ('get' == method || 'GET' == method) {
        return {method: method}
    } else {
        return {
            method: method,
            body: body
        }
    }
}

function fetchApi(api, params) {
    let body = Object.assign({}, commonParam, params);
    let formData = new FormData();
    let url = 'http://dev.innter.fast4ward.cn/innter' + api.url;

    Object.keys(body).forEach((k, index, array) => {
        if ('get' == api.method || 'GET' == api.method) {
            if (url.search(/\?/) === -1) {
                url += '?' + k + '=' + body[k];
            } else {
                url += '&' + k + '=' + body[k];
            }
        } else {
            formData.append(k, body[k]);
        }
    });
    return fetch(url, getFetchParamm(api.method, formData))
        .then((response) => {
            if (response.status == '200') {
                return response.json()
            } else {
                console.error(response);
            }
        }).then((responseData) => {
            if (responseData.code == '1000') {
                return responseData.data;
            } else {
                console.error(responseData);
            }
        })
        .catch((error) => { // 错误处理
            console.log(error);
        });
}

module.exports = {
    API: API,
    fetchApi
}

