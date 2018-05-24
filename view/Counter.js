import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';

class Counter extends Component<Props> {
    componentWillUnmount() {
        console.log('这是说什么？？？');
    }

    render() {
        console.log(this.props);
        const {count, increase} = this.props;
        return (
            <View>
                <Text>{count}</Text>
                <Button onPress={increase}
                        title="点我啊"/>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {count: state.ShiTuReducer.count};
};

const mapDispatchToProps = (dispatch) => {
    return {
        increase: () => {
            dispatch({
                type: 'increase'
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter)


