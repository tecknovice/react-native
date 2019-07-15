import React, { Component } from 'react'
import { createStore,applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import Navigator from './Navigator'
import Reducers from './reducers'

export default class App extends Component {
  render() {
    const store = createStore(Reducers, applyMiddleware(thunk))
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  }
}
