import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RootNavigator } from './src/routes.js'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './src/reducers'

export default class App extends React.Component {
  render () {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <RootNavigator />
        </View>
      </Provider>
    )
  }
}
