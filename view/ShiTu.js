// 引入需要用到的方法
// 引入connect和bindActionCreators
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// 引入获得userToken的action方法
import {userToken} from '../action/ShiTuUserToken';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import React from "react";

// 导出ShiTu页面并连接Reducer
// connect 连接 Recucer ，我ShiTu.js的Reducer叫ShiTuReducer，
// userToken等方法是我在action里面创建的，所以调用的也就是action方法

let AddTodo = ({dispatch}) => {
    let input;

    return (
        <View>
            <Text>123123</Text>
        </View>
    )
}

export default connect((state) => {
    const {ShiTuReducer} = state;
    return {
        ShiTuReducer
    };
}, {userToken})(AddTodo)

// // 使用
// componentDidMount()
// {
//     console.log('componentDidMount');
//     // 使用userToken方法。
//     this.props.userToken();
// }
//
// render()
// {
//     console.log('render');
//     // 掉用过上面的方法后就可以通过打印`ShiTuReducer`获得需要的数据
//     console.log(this.props.ShiTuReducer);
// }
