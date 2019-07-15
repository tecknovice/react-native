import React, { Component } from "react";
import { View, FlatList } from 'react-native'
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux'

import {readNotes} from '../actions'
import ListItem from './ListItem'
class List extends Component {
    static navigationOptions = {
        title: 'List'
      }
    constructor(props){
        super(props)
        this.props.readNotes()
        this.state ={ isLoading: true}
      }
    render() {
        const { navigate } = this.props.navigation
        const { buttonContainerStyle } = styles
        return (
            <View style={{ flex: 1, backgroundColor: '#EEE' }}>
                <FlatList
                    data={this.props.notes}
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

const mapStatesToProps = state => {
    return { notes: state.notes }
}

export default connect(mapStatesToProps, {readNotes})(List)