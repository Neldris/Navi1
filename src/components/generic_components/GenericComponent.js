/**
 * Created by richie on 31/12/17.
 */

import React, {Component}from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class GenericComponent extends Component{

    render (){
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                <Text style={styles.title}>{this.props.titleName}</Text>
                {this.props.content}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        height:50,
        backgroundColor:'blue',
        justifyContent: 'center',
        alignItems: 'center',

    },
    title:{
        color:'white',
    },
});