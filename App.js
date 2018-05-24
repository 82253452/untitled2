/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import configureStore from './view/ConfigureStore';
// 引入react-redux
import {Provider} from 'react-redux';
import Counter from './view/Counter';

// 调用 store 文件中的rootReducer常量中保存的方法
const {store, persistor} = configureStore();

type Props = {};
export default class App extends Component<Props> {
    render() {
        console.log('1221');
        console.log(store);
        console.log(persistor);
        return (
            // 包装App
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Counter/>
                </PersistGate>
            </Provider>
        );
    }
}

