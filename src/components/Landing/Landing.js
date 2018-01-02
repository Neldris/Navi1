/**
 * Created by richie on 31/12/17.
 */

import React, {Component}from 'react';
import  GenericComponent from '../generic_components/GenericComponent';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

export default class Landing extends Component{

    render (){
        setTimeout(()=> this.props.navigation.navigate('Login'),5000);
        return (
            <View style={styles.landing_container}>
             <Image style={styles.landing_img}
                source={{uri:'https://facebook.github.io/react/logo-og.png'}}
             />
                <Image style={styles.landing_loader}
                source={require('./nav1.gif')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    landing_container:{
        flex: 1,
    },
    landing_img:{
        flex:1,
        alignSelf: 'stretch'
    },
    landing_loader:{
        position: 'absolute',
        zIndex: 10,
    }
});