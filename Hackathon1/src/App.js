import React, {Component} from 'react';
import { Text, View} from 'react-native';
import Header from './components/Header'
import List from './components/List'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header text='Cars'/>
        <List />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  }
};
