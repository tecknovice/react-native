import React, { Component } from 'react';
import { View, Text } from 'react-native'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.headerStyle}>
                <Text style={styles.headerTextStyle}> {this.props.text} </Text>
            </View>
        )
    }
}

const styles = {
    headerStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor:'#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5
    },
    headerTextStyle: {
        fontSize: 20
    }
}