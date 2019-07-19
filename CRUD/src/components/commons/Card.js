import React from 'react'
import { View, StyleSheet } from 'react-native'

export const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    )
}
const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#fff',
        padding: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2
    }
})