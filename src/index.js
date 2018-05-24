import React, {Component} from "react";
import {Provider, connect} from "react-redux";

import {getStore, addListener} from "./store";
import {AppNavigator} from './routers';
import {PersistGate} from 'redux-persist/integration/react';


const navReducer = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
};

const mapStateToProps = (state) => ({
    nav: state.nav
});

class App extends Component {
    render() {
        return (
            <AppNavigator
                navigation={{
                    dispatch: this.props.dispatch,
                    state: this.props.nav,
                    addListener
                }}
            />
        );
    }
}

/**/

const AppWithNavigationState = connect(mapStateToProps)(App);

const {store, persistor} = getStore(navReducer);

export default function Root() {
    console.log(store);
    console.log(persistor);
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppWithNavigationState/>
            </PersistGate>
        </Provider>
    );
}
