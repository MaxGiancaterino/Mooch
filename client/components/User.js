import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import gql from "graphql-tag";
import { Query } from "react-apollo";

class User extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.userContainer}>
          <Text style={styles.userText}>{this.props.name}</Text>
        </View>
      </View>
    );
  }
}

export default User;

const styles = StyleSheet.create({
  userContainer: {
    backgroundColor: "#5B0000",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    width: 200
  },
  userText: {
    color: "white",
    fontSize: 24
  }
});
