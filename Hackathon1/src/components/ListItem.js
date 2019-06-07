import React, { Component } from 'react';
import { View, Text, Image } from 'react-native'
import { Icon } from 'react-native-elements'
export default class ListItem extends Component {
    renderStars() {
        let stars = []
        for (let i = 0; i < this.props.item.rating; i++) {
            stars.push(
                <Icon
                    key={i}
                    name='star'
                    type='font-awesome'
                    color='#ffdf00'
                />
            )
        }
        return stars
    }
    render() {
        const { id, title, thumbnail, rating } = this.props.item
        const { itemStyle, thumbnailContainerStyle, thumbnailStyle, contentContainerStyle, titleStyle, starsContainerStyle } = styles
        return (
            <View style={itemStyle}>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: thumbnail }}
                    />
                </View>
                <View style={contentContainerStyle}>
                    <Text style={titleStyle}>{title}</Text>
                    <View style={starsContainerStyle}>
                        {this.renderStars()}
                    </View>
                </View>
            </View >
        )
    }
}
const styles = {
    itemStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItem: 'center',
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#ddd'
    },
    thumbnailStyle: {
        width: 50,
        height: 50
    },
    contentContainerStyle: {
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        alignSelf: 'stretch'
    },
    titleStyle: {
        fontSize: 18,
        textTransform: 'capitalize'
    },
    starsContainerStyle: {
        flexDirection: 'row'
    }
}