import React, { Component } from 'react';
import { Text, View, CheckBox, FlatList, StyleSheet } from 'react-native';
import { PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
export default class HelloWorldApp extends Component {

  state = {
    checked: true,
    geoData: [
      { key: 'Devin' },
      { key: 'Dan' }
    ]
  };

  async componentDidMount() {
    
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this._interval = setInterval(() => {
          Geolocation.getCurrentPosition(
            (position) => {
              console.log(position);
            },
            (error) => {
              // See error code charts below.
              console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
          );
        }, 1000);        
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.log(err);
    }
  }
  componentWillUnmount() {
    clearInterval(this._interval);
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.headerStyle}>
          <Text>Location</Text>
        </View>
        <View style={styles.controlStyle}>
          <CheckBox
            value={this.state.checked}
            onValueChange={() => this.setState({ checked: !this.state.checked })}
          />
          <Text style={{ marginTop: 5 }}>Background geolocation</Text>
        </View>
        <View style={styles.geoDataContainer}>
          <FlatList
            data={this.state.geoData}
            renderItem={({ item }) => <Text style={styles.geoDataItem}>{item.key}</Text>}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2
  },
  controlStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10
  },
  geoDataContainer: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: '#ddd'
  },
  geoDataItem: {
    height: 100
  }
})
