import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import Create from './components/Create'
import List from './components/List'
import Detail from './components/Detail'
const RouterComponent = () => {
    return (
        <Router>
            <Scene key='main'>
                <Scene
                    key='List'
                    component={List}
                    title='List'
                    initial
                />
                <Scene
                    key='Create'
                    component={Create}
                    title='Create'
                />
                <Scene
                    key='Detail'
                    component={Detail}
                    title='Detail'
                />
            </Scene>
        </Router>
    )
}
export default RouterComponent