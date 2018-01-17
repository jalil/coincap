import React, { Component } from "react";
import { ScrollView, View, Text } from "react-native";
import axios from "axios";
import { List, ListItem } from "react-native-elements";
import { SearchBar } from "react-native-elements";

import util from "util";

class CoinList extends Component {
  state = { coins: [] };

  componentWillMount() {
    axios
      .get("file:///Users/jalil/codes/sample.json")
      .then(response => this.setState({ coins: response.data }));
  }

  OnButtonPress(name) {
    //  console.log(util.inspect(this.props.navigation, false, null));
    this.props.navigation.navigate("CoinDetail", { ...name });
  }
  render() {
    return (
      <ScrollView>
        <SearchBar
          onChangeText={() => console.log()}
          onClearText={() => console.log()}
          round
          lightTheme
          placeholder="Type Here..."
        />
        <List containerStyle={{ marginBottom: 20 }}>
          {this.state.coins.map(item =>
            <ListItem
              key={item.id}
              title={item.name}
              subtitle={item.price_usd}
              onPress={() => this.OnButtonPress(item)}
            />
          )}
        </List>
        <Text />
      </ScrollView>
    );
  }
}

export default CoinList;
