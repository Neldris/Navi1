/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    Image,
} from 'react-native';
import {StackNavigator} from 'react-navigation'
import MainView from "./src/Views/MainView";

class UserHome extends Component{
/*  static navigationOptions:{
    title: 'Home Screen',
  };*/

  render(){
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container} >
        <Text style={styles.welcome} onPress={()=>navigate('Profile',{name:'King'})}>
          Click to Profile
        </Text>
      </View>
    )
  }
}

class UserProfile extends Component{

/*    static navigationOptions:{
        title: 'Profile Page'
    };*/

    render(){
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container} >
                <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                       style={{width:300, height:300, borderRadius:100}}/>
                <Text onPress={()=>navigate('Main')}>
                Go to Main
                </Text>
            </View>
        )
    }
}

class MainContent extends Component{

    static  navigationOptions ={
        header:false,
        title:'Home',
        icom :{uri:''}
    }
    render(){
        const {navigate} = this.props.navigation;
        return (
            <Text onLongPress={()=>navigate('Home')}>
                Back to home static
            </Text>
        );
    }
}

const NavControllApp = StackNavigator({
  Home: {screen: UserHome},
  Profile: {screen: UserProfile},
  Main: {screen: MainContent} ,
},{
    navigationOptions:{
        header:false
    }
});



export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            initHome:true,
        }
    }

    componentWillMount(){
        if(this.state.initHome){ this.setState({initHome:<NavControllApp/>});}
        else{ this.setState({initHome:<Text>Noting here</Text>});}
    }
  render() {
    return  (
      <MainView/>
    );
     
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderRadius:500,
    margin:20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'thistle',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
