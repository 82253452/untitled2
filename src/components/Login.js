import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableWithoutFeedback,
    TextInput,
    StyleSheet,
    Dimensions,
} from 'react-native';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as userAction from "../actions/userAction";
import * as wechat from 'react-native-wechat';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: '',
            pwd: ''
        };
        this.props.status ? this.props.navigation.navigate("Home") : console.info('false');
    }

    componentDidMount() {
        try {
            wechat.registerApp('wxe38f485909db8cf8');//从微信开放平台申请
        } catch (e) {
            console.error(e);
        }
    }

    componentDidUpdate() {
        this.props.status ? this.props.navigation.navigate("Home") : console.info('false');
    }

    _sendCode = () => {
        this.props.sendCode(this.state.account);
    }

    _LoginByWechat = () => {
        // this.props.login();
        // let scope = 'snsapi_userinfo';
        // let state = 'wechat_sdk_demo';
        // wechat.sendAuthRequest(scope, state)
        //     .then(responseCode => {
        //         console.log('????');
        //         console.log(responseCode);
        //         console.log(responseCode.code);
        //     })
        //     .catch(err => {
        //         console.error('登录授权发生错误：', err.message, [
        //             {text: '确定'}
        //         ]);
        //     })
    };
    _LoginBySMS = () => {
        this.props.loginBySms(this.state.account, this.state.pwd);
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({account: text})}
                    keyboardType={'numeric'}
                    placeholder={'手机号'}
                    value={this.state.account}
                    onBlur={this._sendCode}
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({pwd: text})}
                    keyboardType={'numeric'}
                    placeholder={'验证码'}
                    value={this.state.pwd}
                />
                <TouchableWithoutFeedback onPress={this._LoginBySMS}>
                    <View style={styles.buttonSub}>
                        <Text style={styles.buttonSubText}>login</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent: 'center',
    },
    textInput: {
        height: 40,
        width: 200,
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 10
    }, buttonSub: {
        alignSelf: 'center',
        marginTop: 10,
        width: 100,
        height: 40,
        borderWidth: 1,
        borderColor: '#999',
        justifyContent: 'center',
        borderRadius: 10
    },
    buttonSubText: {
        textAlign: 'center'
    }
})

export default connect(
    state => ({
        status: state.user.status,
        user: state.user.user
    }),
    dispatch => bindActionCreators(userAction, dispatch)
)
(Login);