import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

class ModalCreateGroup extends React.Component {
  static navigationOptions = {
    title: "Links"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text> go back </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ModalCreateGroup;
