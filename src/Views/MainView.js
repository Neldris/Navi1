/**
 * Created by richie on 31/12/17.
 */

import React, {Component}from 'react';
import  NavApplication from '../components/navigation/NavApplication'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

export default class MainView extends Component{

    render (){
        return (
            <NavApplication/>
        );
    }
}
