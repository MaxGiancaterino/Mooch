import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import gql from "graphql-tag";
import { Query } from "react-apollo";

class Group extends React.Component {
  render() {
    console.log("NAME: " + this.props.name + "<==");
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.push("Group", { id: this.props.id })
        }
      >
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
      </TouchableOpacity>
    );
  }
}

export default Group;
