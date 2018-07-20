import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class Payment extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={
          () => console.log("PRESSED")
          //this.props.navigation.push("Group", { id: this.props.id })
        }
      >
        <View style={styles.group}>
          <Text style={styles.groupText}>{this.props.name}</Text>
          <Text style={styles.groupText}>Total: ${this.props.cost}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Payment;

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
    fontFamily: "Futura",
    color: "white",
    margin: 5
  }
});
