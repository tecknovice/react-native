import React, { Component } from 'react';
import { Text, View, CheckBox, FlatList, StyleSheet } from 'react-native';
import { PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
export default class HelloWorldApp extends Component {

  state = {
    checked: true,
    geoData: []
  };

  async componentDidMount() {

    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.watchId = Geolocation.watchPosition(
          (position) => {
            this.setState({
              geoData: [...this.state.geoData, position]
            })
          },
          (error) => {
            // See error code charts below.
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true,  distanceFilter:1, interval: 1000}
        );
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.log(err);
    }
  }
  componentWillUnmount() {
    Geolocation.clearWatch(this.watchId)
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
            renderItem={({ item }) => <Text style={styles.geoDataItem}>{JSON.stringify(item)}</Text>}
            keyExtractor={item => item.timestamp}
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
    borderTopWidth: 1,
    borderTopColor: '#ddd'
  }
})
