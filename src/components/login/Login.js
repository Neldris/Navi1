/**
 * Created by richie on 31/12/17.
 */

import React, {Component}from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';

export default class Login extends Component{

    render (){
        return (
            <KeyboardAvoidingView style= {styles.login_container}>

                <Image
                    source={require('../../../resources/imgs/freepik.jpg')}
                    style={styles.login_header_img}
                />
                <View style= {styles.login_header}>
                    <Text style={styles.login_text}>Login</Text>
                </View>


                <TextInput style={styles.login_text_imput}
                           placeholder= 'username'
                           underlineColorAndroid='transparent'/>


                <TextInput style={styles.login_text_imput}
                           placeholder= 'password'
                           secureTextEntry={true}
                           underlineColorAndroid='transparent'/>


                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')} style={styles.login_btn}>
                        <Text style={styles.login_txt}>Login</Text>
                    </TouchableOpacity>


                <TouchableOpacity style={styles.login_register}>
                    <Text>Register here</Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    login_container:{
        backgroundColor:'#2896d3',
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight:40,
        paddingLeft:40,
    },
    login_header:{
        borderColor: '#ccc',
        marginBottom:30,
    },
    login_text_imput:{
        fontSize:16,
        color: '#c2c2d6',
        padding: 10,
        alignSelf: 'stretch',
        backgroundColor:'white',
        marginBottom:20,
    },
    login_text:{
        color:'white',
        fontSize:24,
    },
    login_btn:{
        backgroundColor:'#01c853',
        justifyContent:'center',
        alignSelf:'stretch',
        alignItems:'center',
        paddingTop:10,
        paddingBottom:10,
    },
    login_txt:{
        color:'white',
        fontSize:16,
    },
    login_register:{
       marginTop:20

    },
    login_header_img:{
        height:100,
        width: 100,
        marginBottom: 30,
    }

});