// import a library to help create a component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
//create a component
const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText={'Album!'} />
        <AlbumList />
    </View>
    );
//render it to the device
AppRegistry.registerComponent('AwesomeProject', () => App);
