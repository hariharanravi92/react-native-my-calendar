import React, { Component } from 'react';
import { Text,  View, Image} from 'react-native';
import Styles from './events.styles';

class EventsComponent extends Component {

  constructor(props) {
		super(props);
	}

  render() {
    return (
      <View style={Styles.container}>
       <Text style={Styles.welcome}>
         No Events
        </Text>
      </View>
    );
  }
}


export default EventsComponent;

