import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Divider, Card } from 'react-native-elements'
import { List, ListItem } from 'react-native-elements'
import { LineChart, PieChart } from 'react-chartkick'

class CoinDetail extends Component {
  render () {
    //    console.log(util.inspect(this.props.navigation, false, null))
    return (
      <View>
        <Card image={require('./chart.jpg')} />
        <List containerStyle={{ marginBottom: 20 }}>
          <ListItem
            title='Price'
            subtitle={this.props.navigation.state.params.price_usd}
          />
          <ListItem
            title='Market Capitalization'
            subtitle={this.props.navigation.state.params.market_cap_usd}
          />
          <ListItem
            title='Available Supply'
            subtitle={this.props.navigation.state.params.available_supply}
          />
          <ListItem
            title='Total Supply'
            subtitle={this.props.navigation.state.params.available_supply}
          />
        </List>
      </View>
    )
  }
}

export default CoinDetail
