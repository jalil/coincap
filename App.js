import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RootNavigator } from './src/routes.js'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './src/reducers'
import CoinList from './src/components/CoinList'

export default class App extends React.Component {
  render () {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <RootNavigator />
          <CoinList />
        </View>
      </Provider>
    )
  }
}
