'use strict';
import React from 'react';
import {StyleSheet} from 'react-native';

let Styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subHeader : {
    flexDirection: 'row',
    left:0,
    right:0,
    top:0,
    flex:1,
    height:80,
    position: 'absolute',
    backgroundColor:'#dcdcdc'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Styles;