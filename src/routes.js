import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import CoinList from '../src/components/CoinList'
import Favorites from '../src/components/Favorites'

const Tabs = TabNavigator({
  CoinList: {
    screen: CoinList,
    navigationOptions: {
      title: 'Coins'
    }
  },
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      title: 'Favorites'
    }
  }
})

export const RootNavigator = StackNavigator({
  Home: {
    screen: Tabs
  }
})
