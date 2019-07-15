import React, { Component } from "react"
import { View, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { updateForm } from '../../actions'

class Form extends Component {
    render() {
        const { containerStyle, titleStyle, bodyStyle } = styles
        return (
            <View style={containerStyle}>
                <TextInput
                    style={titleStyle}
                    placeholder='Title'
                    onChangeText={value => this.props.updateForm({ prop: 'title', value })}
                    value={this.props.title}
                />
                <TextInput
                    multiline={true}
                    style={bodyStyle}
                    placeholder='Body'
                    onChangeText={value => this.props.updateForm({ prop: 'body', value })}
                    value={this.props.body}
                />
            </View>
        )
    }
}
const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: '#EEE',
        paddingTop: 10
    },
    titleStyle: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
        paddingLeft: 10,
        fontSize: 16,
        height: 40,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2
    },
    bodyStyle: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
        paddingLeft: 10,
        paddingTop: 5,
        textAlignVertical: 'top',
        fontSize: 16,
        lineHeight: 24,
        height: 200,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2
    }
}
const mapStateToProps = state => {
    const { title, body } = state.form
    return { title, body }
}

export default connect(mapStateToProps, { updateForm })(Form)