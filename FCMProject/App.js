import React, { Component } from 'react';
import { Text, View } from 'react-native';

import firebase from 'react-native-firebase';

export default class App extends Component {
  componentWillMount(){
    firebase.messaging().getToken()
    .then(fcmToken => {
      if (fcmToken) {
        console.log('11:fcmToken=',fcmToken);
      } else {
        console.log('13:No token');
      } 
    });
  }
  componentDidMount() {
    this.onTokenRefreshListener = firebase.messaging().onTokenRefresh(fcmToken => {
      // Process your token as required
      console.log('20:fcmToken=',fcmToken);
    });
  }
  componentWillUnmount() {
    this.onTokenRefreshListener();
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, world!</Text>
      </View>
    );
  }
}
