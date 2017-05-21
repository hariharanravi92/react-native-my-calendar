import React, { Component } from 'react';
import { Text,  View, Image} from 'react-native';
import Styles from './splash.styles';

class SplashPage extends Component {

  constructor(props) {
		super(props);
	}

  componentWillMount() {
		setTimeout(() => {
				this.props.navigator.replace({
				name: 'HomePage'
			});
		}, 2000);
	}

  render() {
    return (
      <View style={Styles.container}>
       <Image style={{height:100,width:100}} source={require('../../images/app_logo.png')}/>
        <Text style={Styles.welcome}>
         Manage Your Events
        </Text>
       <Image style={{height:100,width:100}} source={require('../../images/loading.gif')}/>
      </View>
    );
  }
}


export default SplashPage;

