import React from "react";
import { ScrollView, Text, Button } from "react-native";

class CreateGroupModal extends React.Component {
  static navigationOptions = {
    title: "Links"
  };
  render() {
    return (
      <ScrollView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </ScrollView>
    );
  }
}

export default CreateGroupModal;
