import React, { Component } from 'react';
import { Text,  View} from 'react-native';

import Styles from './home.styles';

class HomePage extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.welcome}>
         Home
        </Text>
        <Text style={Styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={Styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}


export default HomePage;

