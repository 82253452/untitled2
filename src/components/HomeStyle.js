import {
    Dimensions,
    StyleSheet
} from 'react-native';

export default StyleSheet.create({
    top: {
        height: 50,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 15
    },
    topLeft: {
        height: 50,
        backgroundColor: '#fff',
        width: 80,
        paddingLeft: 25,
    },
    topRight: {
        height: 50,
        backgroundColor: '#fff',
        width: 80,
        paddingLeft: 25,
    },
    topLog: {
        width: 120,
        height: 20,
        backgroundColor: '#fff',
        resizeMode: 'contain',
    },
    topCenter: {
        height: 50,
        backgroundColor: '#fff',
        width: 200,
        paddingLeft: 40
    },
    center: {
        height: 230,
        backgroundColor: '#fff'
    },
    bottom: {
        width: Dimensions.get('window').width,
        height: 90,
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15,
        marginTop: 10,
    },
    imgStyle: {
        width: Dimensions.get('window').width,
        height: 180
    },
    viewImage: {
        height: 180
    },
    centerImages: {
        width: Dimensions.get('window').width,
        height: 220
    },
    textImage: {
        width: Dimensions.get('window').width,
        height: 50,
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15
    },
    textView: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15
    },
    hotHot: {
        borderBottomWidth: 1,
        borderBottomColor: '#9D9D9D',
        fontSize: 20,
        fontWeight: 'bold'
    },
    hotTitle: {
        color: '#9D9D9D',
        fontSize: 14,
    },
    infoText: {
        paddingTop: 15,
    },
    footer: {
        width: Dimensions.get('window').width,
        height: 80
    },
    footerText: {
        textAlign: 'center',
        lineHeight:30
    }
});