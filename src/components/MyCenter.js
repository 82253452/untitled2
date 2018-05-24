import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    StatusBar,
    TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class MyCenter extends Component {
    static navigationOptions = {
        tabBarLabel: '我的',
        tabBarIcon: ({tintColor}) => (
            <Icon name="user-circle" size={24} color={tintColor}/>
        )
    };

    render() {
        return (
            <Text>mycenter</Text>
        )
    }
}