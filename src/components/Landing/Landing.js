/**
 * Created by richie on 31/12/17.
 */

import React, {Component}from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    AsyncStorage,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import  styles from '../../../resources/styles/Nav1StyleSheet';



export default class Landing extends Component{

    constructor(props){
        super(props);
    }

    async getLocalStorage(key){
        return await AsyncStorage.getItem(key);
    }

     componentWillMount() {
        try {

            var storage =  this.getLocalStorage('appUser');

            if (storage == null) {
                alert('900');
                 this.props.navigation.navigate('Login');

            } else {
                //Set user state
                this.setState({user: storage});
                var res = this.state.user;

                if (res.pin_code !== '') {
                    //Ask for setting pin code
                    //Show #pin code view
                    alert('pop');
                } else {
                    // set a new pin code for user

                }
            }

        } catch (error) {
            alert('err');
        }

    }

    render (){

        return (
            <View style={styles.landing_container} >
                <KeyboardAvoidingView style={styles.login_container}>

                   <ActivityIndicator size={'large'} color={'pink'}/>

                </KeyboardAvoidingView>
                <Button title={"clicker"} onPress={()=>{this.props.navigation.navigate('Login')}}/>
            </View>
        );
    }
}

