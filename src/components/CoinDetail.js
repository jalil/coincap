import React, { Component } from 'react'
import { View, Text } from 'react-native'
import util from 'util'
import { Divider } from 'react-native-elements'

class CoinDetail extends Component {
  render () {
    console.log(util.inspect(this.props.navigation, false, null))
    return (
      <View>
        <Text>
          Name:{this.props.navigation.state.params.name}
        </Text>
        <Divider style={{ backgroundColor: 'blue' }} />
        <Text>
          Symbol:{this.props.navigation.state.params.symbol}
        </Text>
        <Divider style={{ backgroundColor: 'blue' }} />
        <Text>
          Price:{this.props.navigation.state.params.name}
        </Text>
        <Divider style={{ backgroundColor: 'blue' }} />
        <Text>
          MarketCap:{this.props.navigation.state.params.name}
        </Text>
        <Divider style={{ backgroundColor: 'blue' }} />
        <Text>
          Total Supply: {this.props.navigation.state.params.name}
        </Text>
      </View>
    )
  }
}

export default CoinDetail
