import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Card } from './commons/Card'

export default class ListItem extends Component {
    render() {
        const { titleContainerStyle, titleStyle, bodyStyle } = styles
        const { title, body } = this.props
        return (
            <Card>
                <View style={titleContainerStyle}>
                    <Text style={titleStyle}>{title}</Text>
                </View>
                <Text style={bodyStyle}>{body}</Text>
            </Card >
        )
    }
}
const styles = StyleSheet.create({

    titleContainerStyle: {
        height: 30
    },
    titleStyle: {
        fontSize: 20,
        fontFamily: 'Arial',
        color: '#000',
        textTransform: 'capitalize'
    },
    bodyStyle: {
        fontSize: 16,
        fontFamily: 'Arial',
        color: '#000',
    }
})