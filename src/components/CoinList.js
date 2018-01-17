import React, { Component } from "react";
import { ScrollView, View, Text } from "react-native";
import axios from "axios";
import { List, ListItem } from "react-native-elements";

class CoinList extends Component {
  state = { coins: [] };

  componentWillMount() {
    axios
      .get("https://api.coinmarketcap.com/v1/ticker/?limit=10")
      //.get("file:///Users/jalil/codes/sample.json")
      .then(response => this.setState({ coins: response.data }));
  }

  OnButtonPress(name) {
    console.log(name);
  }
  render() {
    console.log(this.state.coins);
    return (
      <ScrollView>
        <List containerStyle={{ marginBottom: 20 }}>
          {this.state.coins.map(item =>
            <ListItem
              key={item.id}
              title={item.name}
              subtitle={item.price_usd}
              onPress={() => this.OnButtonPress(item.name)}
            />
          )}
        </List>
        <Text />
      </ScrollView>
    );
  }
}

export default CoinList;
