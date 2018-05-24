import {createBottomTabNavigator, createDrawerNavigator, createStackNavigator} from "react-navigation";
import Home from '../components/Home';
import Community from '../components/Community';
import MyCenter from '../components/MyCenter';
import NewsDetail from '../components/NewsDetail';
import CustomDrawer from '../components/CustomDrawer';
import Login from '../components/Login';
//底部的tabBar导航
const TabbarNavigator = createBottomTabNavigator({
    Home: {screen: Home},
    Community: {screen: Community},
    MyCenter: {screen: MyCenter},
}, {
    tabBarPosition: 'top',
    tabBarOptions: {
        style: {
            height: 50,
            backgroundColor: '#fff',
        },
        activeTintColor: '#4ECBFC',
        inactiveTintColor: '#aaa',
    }
});

//侧面导航
const DrawerNav = createDrawerNavigator({
    DrawerHome: TabbarNavigator,
}, {
    drawerWidth: 200,
    drawerPosition: 'left',
    contentComponent: CustomDrawer,
});

const AuthNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    }
});

//整个应用的路由栈
const AppNavigator = createStackNavigator({
    TabBar: {
        screen: DrawerNav,
        path: 'DrawerHome',
        navigationOptions: {
            header: null
        }
    },
    NewsDetail: {
        path: 'NewsDetail',
        screen: NewsDetail
    },
    Login: {
        path: 'Login',
        screen: AuthNavigator,
        navigationOptions: {
            header: null
        }
    }
}, {
    initialRouteName: 'Login',
});


export {
    AppNavigator
};
