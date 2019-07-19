import React, { Component } from "react"
import { View, Button } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'

import { updateForm, updateNote, deleteNote } from '../actions'
import Form from './commons/Form'
import { Card } from './commons/Card'
class Detail extends Component {
    constructor(props) {
        super(props)
        _.each(this.props.data, (value, prop) => {
            this.props.updateForm({ prop, value })
        })
    }
    onPressUpdateButton() {
        const { _id, title, body } = this.props
        this.props.updateNote({ _id, title, body })
    }
    onPressDeleteButton() {
        const { _id } = this.props
        this.props.deleteNote(_id)
    }
    render() {
        const { containerStyle } = styles
        return (
            <View style={containerStyle}>
                <Form />
                <Card>
                    <Button
                        onPress={this.onPressUpdateButton.bind(this)}
                        title="Update"
                    />
                </Card>
                <Card>
                    <Button
                        onPress={this.onPressDeleteButton.bind(this)}
                        title="Delete"
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
    const { _id, title, body } = state.form
    return { _id, title, body }
}
export default connect(mapStateToProps, { updateForm, updateNote, deleteNote })(Detail)