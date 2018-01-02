/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MainView from "./src/Views/MainView";

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            initHome:true,
        }
    }

    render() {
        return  (
            <MainView/>
        );

    }
}

