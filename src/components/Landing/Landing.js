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
    AsyncStorage,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import  styles from '../../../resources/styles/Nav1StyleSheet';


export default class Landing extends Component{

    constructor(props){
        super(props);
        this.state = {
            user:{
                username:'',
                password: '',
                pin_code: '',

            },
            username:'',
            password: '',
            pin_code: '',
            pin_check: '',
        }
    }

    async getLocalStorage(key){
        return await AsyncStorage.getItem(key);
    }

    static initControl;
     componentWillMount() {
        try {

            var storage =  this.getLocalStorage('USER');

            if (storage == null) {
                this.initControl =
                    <KeyboardAvoidingView style={styles.login_container}>

                        <Image
                            source={require('../../../resources/imgs/freepik.jpg')}
                            style={styles.login_header_img}
                        />
                        <View style={styles.login_header}>
                            <Text style={styles.login_text}>Login</Text>
                        </View>


                        <TextInput style={styles.login_text_imput}
                                   placeholder='username'
                                   underlineColorAndroid='transparent'/>


                        <TextInput style={styles.login_text_imput}
                                   placeholder='password'
                                   secureTextEntry={true}
                                   underlineColorAndroid='transparent'/>


                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}
                                          style={styles.login_btn}>
                            <Text style={styles.login_txt}>Login</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.login_register}>
                            <Text>Register here</Text>
                        </TouchableOpacity>

                    </KeyboardAvoidingView>;
            } else {
                //Set user state
                this.setState({user: storage});
                var res = this.state.user;

                if (res.pin_code !== '') {
                    //Ask for setting pin code
                    //Show #pin code view
                    this. initControl =
                        <KeyboardAvoidingView style={styles.login_container}>

                        </KeyboardAvoidingView>
                } else {
                    // set a new pin code for user
                    this.initControl =
                        <KeyboardAvoidingView style={styles.login_container}>
                        </KeyboardAvoidingView>
                }
            }
        } catch (error) {

        }

    }

    render (){

        return (
            <View style={styles.landing_container}>
                {this.initControl}
            </View>
        );
    }
}

