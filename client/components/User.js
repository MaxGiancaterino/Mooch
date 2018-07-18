import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import gql from "graphql-tag";
import { Query } from "react-apollo";

class User extends React.Component {
  render() {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          borderTopWidth: 1,
          backgroundColor: "lightgray",
          height: 50,
          justifyContent: "center"
        }}
      >
        <Text style={{ fontSize: 24 }}>{this.props.name}</Text>
      </View>
    );
  }
}

export default User;
