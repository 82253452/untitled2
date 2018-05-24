import React, {Component} from 'react';
import {Image, ListView, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as userAction from "../actions/userAction";

export class CustomDrawer extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([{
                des: '联系客服',
                click: () => {

                }
            }, {
                des: '关于我们',
                click: () => {

                }
            }, {
                des: '退出登录',
                click: () => {
                    this.props.loginOut();
                    this.props.navigation.navigate("Login");
                }
            }]),
        };
    }

    render() {
        console.log(this.props.user);
        return (
            <View style={styles.container}>
                <View style={styles.drawTop}>
                    <Image style={styles.drawImg} source={{uri: this.props.user.avatar}}/>
                    <Text style={styles.drawText}>{this.props.user.nick}</Text>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <TouchableWithoutFeedback onPress={rowData.click}>
                        <View style={styles.listRow}>
                            <Text style={styles.listRowText}>{rowData.des}</Text>
                        </View>
                    </TouchableWithoutFeedback>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 200,
        paddingLeft: 20
    },
    drawTop: {
        width: 200,
        flexDirection: 'row',
        height: 60,
    },
    drawImg: {
        width: 30,
        height: 30,
        borderRadius: 50,
        alignSelf: 'center',
    },
    drawText: {
        marginLeft: 10,
        fontSize: 20,
        alignSelf: 'center',
    },
    listRow: {
        height: 60,
        marginTop: 30,
    },
    listRowText: {
        fontSize: 20,
    }
});
export default connect(
    state => ({
        status: state.user.status,
        user: state.user.user
    }),
    dispatch => bindActionCreators(userAction, dispatch)
)
(CustomDrawer);