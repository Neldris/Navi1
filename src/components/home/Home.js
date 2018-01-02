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

export default class Home extends Component{

    render (){
        return (
          <GenericComponent titleName="Home"/>
        );
    }
}

