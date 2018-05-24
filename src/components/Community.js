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

export default class Community extends Component {
    static navigationOptions = {
        tabBarLabel: '社群',
        tabBarIcon: ({tintColor}) => (
            <Icon name="comments" size={24} color={tintColor}/>
        )
    };

    render() {
        return (
            <Text>community</Text>
        )
    }
}