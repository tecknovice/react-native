import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm'

class App extends Component {

    state = { loggedIn: null }

    componentWillMount() {
        // Initialize Firebase
        firebase.initializeApp({
            apiKey: "AIzaSyCIXAz3yoCYkcx5dR56kNZIejzyDeJuavE",
            authDomain: "authentication-16085.firebaseapp.com",
            databaseURL: "https://authentication-16085.firebaseio.com",
            projectId: "authentication-16085",
            storageBucket: "authentication-16085.appspot.com",
            messagingSenderId: "889806933142",
            appId: "1:889806933142:web:d3250ff473dd455e"
        });
        firebase.auth().onAuthStateChanged((user) => {

            if (user) {
                this.setState({ loggedIn: true })
            } else {
                this.setState({ loggedIn: false })
            }
        })
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log out
                    </Button>
                )
            case false:
                return <LoginForm />
            default:
                return <Spinner />
        }
    }

    render() {
        return (
            <View>
                <Header headerText='Authentication'></Header>
                {this.renderContent()}
            </View>
        );
    };
}

export default App;