import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import CoinList from '../src/components/CoinList'
import Favorites from '../src/components/Favorites'
import CoinDetail from '../src/components/CoinDetail'
import Chart from '../src/components/Chart'

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

const DetailsTabs = TabNavigator({
  Chart: {
    screen: CoinDetail,
    navigationOptions: {
      title: 'Chart'
    }
  },
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      title: 'Exchanges'
    }
  },
  Github: {
    screen: Favorites,
    navigationOptions: {
      title: 'Github'
    }
  }
})
export const RootNavigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  CoinDetail: {
    screen: DetailsTabs,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}`
    })
  }
})
// screen: CoinDetail,
// navigationOptions: ({ navigation }) => ({
// title: `${navigation.state.params.name}`
// })
