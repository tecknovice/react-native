import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'

import { Card } from './commons/Card'
import { ActionConst, Actions } from 'react-native-router-flux';

export default class ListItem extends Component {
    onRowPress() {
        Actions.Detail({ data:this.props})
    }
    render() {
        const { titleContainerStyle, titleStyle, bodyStyle } = styles
        const { title, body } = this.props
        return (
            <TouchableWithoutFeedback
                onPress={this.onRowPress.bind(this)}
            >
                <View>
                    <Card>
                        <View style={titleContainerStyle}>
                            <Text style={titleStyle}>{title}</Text>
                        </View>
                        <Text style={bodyStyle}>{body}</Text>
                    </Card >
                </View>
            </TouchableWithoutFeedback>
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