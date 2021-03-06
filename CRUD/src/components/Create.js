import React, { Component } from "react"
import { View, Button } from 'react-native'
import { connect } from 'react-redux'

import { updateForm, createNote } from '../actions'
import Form from './commons/Form'
import { Card } from './commons/Card'
class Create extends Component {
    constructor(props) {
        super(props)
        this.props.updateForm({ prop: '_id', value: '' })
        this.props.updateForm({ prop: 'title', value: '' })
        this.props.updateForm({ prop: 'body', value: '' })
    }
    onPressButton() {
        const { title, body } = this.props
        this.props.createNote({ title, body })
    }
    render() {
        const { containerStyle } = styles
        return (
            <View style={containerStyle}>
                <Form />
                <Card>
                    <Button
                        onPress={this.onPressButton.bind(this)}
                        title="Create"
                    />
                </Card>
            </View>
        )
    }
}
const styles = {
    containerStyle: {
        flex: 1
    }
}
const mapStateToProps = state => {
    const { title, body } = state.form
    return { title, body }
}
export default connect(mapStateToProps, { updateForm, createNote })(Create)