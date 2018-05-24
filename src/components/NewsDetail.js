import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    StatusBar,
    TouchableHighlight,
    Dimensions,
    StyleSheet,
    WebView,
    DeviceInfo
} from 'react-native';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as newsActions from "../actions/newsAction";
import HTMLView from 'react-native-htmlview';
import Video from 'react-native-video';
import Swiper from 'react-native-swiper';


export class NewsDetail extends Component {
    static navigationOptions = {
        tabBarLabel: '详情',
    };

    componentDidMount() {
        this.props.newsDetail(this.props.navigation.state.params.id);
    }

    _bannerIndexChange = index => {
        console.info(index);
    };
    _renderHtml = body => {
        return '<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" >' +
            '<style type="text/css">' +
            'img {width:100%;}' +
            '</style>' +
            '</head><body>' + body + '</body></html>';
    }

// <HTMLView value={this.props.newsDetailInfo.content}/>
    _getView() {
        if (this.props.newsDetailInfo.type == 1) {
            return (
                <View style={styles.webView}>
                    <WebView source={{html: this._renderHtml(this.props.newsDetailInfo.content), baseUrl: ''}}
                             style={styles.webView}
                             automaticallyAdjustContentInsets={true}
                             scalesPageToFit={true}
                             scrollEnabled={true}
                    />
                </View>
            )
        } else if (this.props.newsDetailInfo.type == 4) {
            return (
                <View style={styles.container}>
                    <Image source={{uri: this.props.newsDetailInfo.imgUrl}} style={styles.topImage}/>
                    <Text style={styles.textTitle}>{this.props.newsDetailInfo.title}</Text>
                    <Text style={styles.textDes}>{this.props.newsDetailInfo.describe}</Text>
                </View>
            )
        } else if (this.props.newsDetailInfo.type == 2) {
            return (
                <Video source={{uri: this.props.newsDetailInfo.content}} // Can be a URL or a local file.
                       rate={1.0}                   // 0 is paused, 1 is normal.
                       volume={1.0}                 // 0 is muted, 1 is normal.
                       muted={false}                // Mutes the audio entirely.
                       paused={false}               // Pauses playback entirely.
                       resizeMode="cover"           // Fill the whole screen at aspect ratio.
                       repeat={true}                // Repeat forever.
                    // onLoadStart={this.loadStart} // Callback when video starts to load
                    // onLoad={this.setDuration}    // Callback when video loads
                    // onProgress={this.setTime}    // Callback every ~250ms with currentTime
                    // onEnd={this.onEnd}           // Callback when playback finishes
                    // onError={this.videoError}    // Callback when video cannot be loaded
                       style={styles.backgroundVideo}/>
            )
        } else if (this.props.newsDetailInfo.type == 3) {
            return (
                <View style={styles.swiperView}>
                    <Swiper
                        onIndexChanged={(index) =>
                            this._bannerIndexChange(index)
                        }>
                        {this.props.newsDetailInfo.content.map((item) => {
                            return <View key={item.img} style={styles.imgStyleView}>
                                <Image source={{uri: item.img}}
                                       style={styles.imgStyle}/>
                            </View>
                        })}
                    </Swiper>
                </View>
            )
        } else {
            return (<View></View>);
        }
    }

    render() {
        return (<View>
            {this._getView()}
        </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: 800,
    },
    topImage: {
        width: Dimensions.get('window').width,
        height: 200
    },
    webView: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    textTitle: {
        fontSize: 20,
        fontWeight: '200',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        color: '#000'
    },
    textDes: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20
    },
    backgroundVideo: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    imgStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    swiperView: {
        width: Dimensions.get('window').width,
        height: 200,
        marginTop: 150,
        backgroundColor: '#000'
    },
    imgStyleText: {
        width: Dimensions.get('window').width,
        textAlign: 'center'
    },
    imgStyleView: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#000'
    }
});


export default connect(
    state => ({
        newsDetailInfo: state.news.newsDetail
    }),
    dispatch => bindActionCreators(newsActions, dispatch)
)(NewsDetail);