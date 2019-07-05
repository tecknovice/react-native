import React, { Component } from "react";
import { View, Button, FlatList } from 'react-native'
import { Icon } from 'react-native-elements'

import ListItem from './ListItem'

export default class List extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'List'
           
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            notes: [
                {
                    title: 'reading', body: 'world is flat, the sixth sense'
                },
                {
                    title: 'studying', body: 'react native, HTML, CSS, javascript'
                },
                {
                    title: 'studying', body: 'react native, HTML, CSS, javascript'
                },
                {
                    title: 'studying', body: 'react native, HTML, CSS, javascript'
                },
                {
                    title: 'studying', body: 'react native, HTML, CSS, javascript'
                },
                {
                    title: 'studying', body: 'react native, HTML, CSS, javascript'
                },
                {
                    title: 'studying', body: 'react native, HTML, CSS, javascript'
                },
                {
                    title: 'studying', body: 'react native, HTML, CSS, javascript'
                },
                {
                    title: 'studying', body: 'react native, HTML, CSS, javascript'
                },
                {
                    title: 'studying', body: 'react native, HTML, CSS, javascript'
                },
                {
                    title: 'studying', body: 'react native, HTML, CSS, javascript'
                },
                {
                    title: 'studying', body: 'react native, HTML, CSS, javascript'
                },
                {
                    title: 'studying', body: 'react native, HTML, CSS, javascript'
                },
                {
                    title: 'studying', body: 'react native, HTML, CSS, javascript'
                },
                {
                    title: 'studying', body: 'react native, HTML, CSS, javascript'
                },
                {
                    title: 'ending', body: 'react native, HTML, CSS, javascript'
                }
            ]
        }
    }

    render() {
        const { navigate } = this.props.navigation
        const { buttonContainerStyle } = styles
        return (
            <View style={{ flex: 1, backgroundColor: '#EEE' }}>
                <FlatList
                    data={this.state.notes}
                    renderItem={({ item }) => <ListItem {...item} />}
                />
                <View
                    style={buttonContainerStyle}>
                    <Icon
                        name='add'
                        type='material'
                        color='#000'
                        underlayColor='#03DAC5'
                        onPress={() => navigate('Create')} />
                </View>
            </View>
        )
    }
}
const styles = {
    buttonContainerStyle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#03DAC5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.2
    }
}