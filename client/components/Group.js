import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import gql from "graphql-tag";
import { Query } from "react-apollo";

class Group extends React.Component {
  render() {
    console.log("NAME: " + this.props.name + "<==");
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.push("Group", { id: this.props.id })
          }
        >
          <View style={styles.group}>
            <Text style={styles.groupText}>{this.props.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Group;

const styles = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: "#5B0000",
    width: "40%",
    margin: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  groupText: {
    fontSize: 24,
    color: "white"
  }
});
