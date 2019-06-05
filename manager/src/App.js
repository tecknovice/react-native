import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'

import Reducers from './reducers'
import LoginForm from './components/LoginForm'

class App extends Component {
    componentWillMount() {
        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyCQxHOePDwV9mL0aKir4oVDwjCYdhBRzYI",
            authDomain: "manager-69dcd.firebaseapp.com",
            databaseURL: "https://manager-69dcd.firebaseio.com",
            projectId: "manager-69dcd",
            storageBucket: "manager-69dcd.appspot.com",
            messagingSenderId: "670625058184",
            appId: "1:670625058184:web:0c43810ee25549b4"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }
    render() {
        const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk))
        return (
            <Provider store={store}>
                <View>
                    <LoginForm />
                </View>
            </Provider>
        )
    }
}

export default App