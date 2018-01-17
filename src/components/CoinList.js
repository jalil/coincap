import React, { Component } from "react";
import { ScrollView, View, Text } from "react-native";
import axios from "axios";
import { List, ListItem } from "react-native-elements";

class CoinList extends Component {
  state = { coins: [] };

  componentWillMount() {
    axios
      .get("file:///Users/jalil/codes/sample.json")
      .then(response => this.setState({ coins: response.data }));
  }

  OnButtonPress(name) {
    console.log(this.props.navigation.state.params);
  }
  render() {
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
