'use strict';
import React from 'react';
import {Navigator} from 'react-native';
import {SplashPage, HomePage} from './pages'


export default class MainNavigator extends React.Component {

    render() {
        return (
        	<Navigator
                initialRoute={{ name: 'Splash' }}
                renderScene={ this.renderScene}
                  configureScene={(route) => { return Navigator.SceneConfigs.FloatFromRight } } 
                />
        );
    }

    renderScene(route, navigator) { 

        switch (route.name) {
            case 'Splash':
                return <SplashPage {...route.passProps} navigator = {navigator} route={route} />  
            case 'HomePage':
                return <HomePage {...route.passProps} navigator = {navigator} route={route} />                  
            default :
                return <SplashPage {...route.passProps} navigator = {navigator} route={route} />
        }
        
    } 

}