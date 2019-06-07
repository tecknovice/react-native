import React, { Component } from 'react';
import { FlatList } from 'react-native'
import ListItem from './ListItem'
import axios from 'axios'

class List extends Component {
    state = { data: [] }
    componentWillMount() {
        axios.get('http://localhost:3000/data')
            .then((response) => this.setState({ data: response.data }))
            .catch((error) => console.log(error))
    }

    render() {
        return <FlatList
            style={styles.listStyle} 
            data={this.state.data}
            renderItem={({item}) => <ListItem item={item}/>}
            />
    }
}
const styles ={
    listStyle:{
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5
    }
}
export default List