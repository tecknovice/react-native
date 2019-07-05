import React, { Component } from "react"
import { View, Text } from 'react-native'

export default class Create extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Create screen</Text>
            </View>
        )
    }
}
const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}