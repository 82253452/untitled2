import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    FlatList,
    Image,
    Text,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    View,
    YellowBox,
    BackHandler
} from 'react-native';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as newsActions from '../actions/newsAction';
import Swiper from 'react-native-swiper';
import styles from './HomeStyle';
import PopupDialog, {SlideAnimation} from 'react-native-popup-dialog';
import {NavigationActions} from "react-navigation";

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

class Home extends Component {
    static navigationOptions = {
        tabBarLabel: '首页',
        tabBarIcon: ({tintColor}) => (
            <Icon name="home" size={24} color={tintColor}/>
        )
    };

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
        this.props.newsList(1);
        this.props.bannerList();
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }

    onBackPress = () => {
        this.props.navigation.navigate('TabBar');
        return true;
    };

    _onPressItem = (id) => {
        this.props.navigation.navigate('NewsDetail', {id: id});
    };
    _keyExtractor = (item, index) => item.id.toString();
    _renderItem = ({item}) => (
        <TouchableNativeFeedback key={item.id}
                                 onPress={
                                     () => {
                                         this._onPressItem(item.id)
                                     }
                                 }
        >
            <View>
                <Image source={{uri: item.imgUrl}} style={styles.centerImages}/>
                <Text numberOfLines={1} style={styles.textImage}>{item.title}</Text>
            </View>
        </TouchableNativeFeedback>
    );
    _bannerIndexChange = index => {
        console.info(index);
    };
    _renderHeaderItem = () => (
        <View>
            <View style={styles.center}>
                <Swiper
                    onIndexChanged={(index) =>
                        this._bannerIndexChange(index)
                    }
                    paginationStyle={{bottom: 55}}>
                    {this.props.topViewBanner.map((item) => {
                        return <View key={item.id} style={styles.viewImage}>
                            <Image source={{uri: item.imgUrl}}
                                   style={styles.imgStyle}/>
                            <View style={styles.textView}>
                                <Text numberOfLines={1}>{item.title}</Text>
                            </View>
                        </View>
                    })}
                </Swiper>
            </View>
            <View style={styles.bottom}>
                <Text style={styles.hotHot}>Hot</Text>
                <Text style={styles.hotTitle}>汇聚今日最新热点话题资讯</Text>
            </View>
        </View>
    );
    _renderFooter = () => (
        <View style={styles.footer}>
            <Text style={styles.footerText}>
                已显示全部
            </Text>
        </View>);
    _onRefresh = () => {
        this.props.newsList(1);
    };
    _onEndReached = () => {
        if (!this.props.pageStatus) {
            this.props.newsList(this.props.page + 1);
        }
    };

    _extraUniqueKey(item, index) {
        return "index" + index + item;
    };

    _leftShow = () => {
        this.props.navigation.openDrawer();
    };

    _renderLogin = () => (<PopupDialog
        ref={(popupDialog) => {
            this.popupDialog = popupDialog;
        }}
        dialogAnimation={slideAnimation}
    >
        <View>
            <Text>Hello</Text>
        </View>
    </PopupDialog>);

    render() {
        return (
            <View>
                <View style={styles.top}>
                    <TouchableWithoutFeedback onPress={this._leftShow}>
                        <View style={styles.topLeft}>
                            <Icon name={'user-circle'} size={20}/>
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={styles.topCenter}>
                        <Image source={require('../images/Logo.png')} style={styles.topLog}/>
                    </View>
                    <View style={styles.topRight}>
                        <Icon name={'align-center'} size={20}/>
                    </View>

                </View>
                <FlatList
                    keyExtractor={this._extraUniqueKey}
                    data={this.props.data}
                    renderItem={this._renderItem}
                    ListHeaderComponent={this._renderHeaderItem}
                    onRefresh={this._onRefresh}
                    refreshing={false}
                    ListFooterComponent={this._renderFooter}
                    onEndReached={this._onEndReached}
                    onEndReachedThreshold={0.5}
                />
            </View>
        );
    }
}

//让业务组件和redux建立关联
export default connect(
    state => ({
        page: state.news.page,
        data: state.news.data,
        topViewBanner: state.news.topViewBanner,
        pageStatus: state.news.pageStatus,
        nav: state.nav
    }),
    dispatch => bindActionCreators(newsActions, dispatch)
)(Home);
