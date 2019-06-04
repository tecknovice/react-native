import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native'
import { connect } from 'react-redux'
import { CardSection } from './common'
import * as actions from '../actions'

class ListItem extends Component {

    componentWillUpdate(){
        LayoutAnimation.linear()
    }

    renderDescription() {
        const { library, expanded } = this.props
        if (expanded) {
            return (
                <CardSection>
                    <Text>
                        {library.description}
                    </Text>
                </CardSection>
            )
        }
    }

    render() {
        const { titleStyle } = styles
        const { id, title } = this.props.library
        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    const expanded = state.selectedLibraryId === ownProps.library.id
    return { expanded }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

export default connect(mapStateToProps, actions)(ListItem)